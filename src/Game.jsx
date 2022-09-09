import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import * as turf from '@turf/turf'

import Appels from './tabs/Appels';
import Interventions from './tabs/Interventions';
import Effectifs from './tabs/Effectifs';
import Services from './tabs/Services';
import Reglages from './tabs/Reglages';

/*
  https://overpass-turbo.eu/ -> exporter -> requete
  https://sites-formations.univ-rennes2.fr/mastersigat/Cours/STOM_Overpass.pdf
  https://gis.stackexchange.com/questions/163044/mapbox-how-to-generate-a-random-coordinate-inside-a-polygon
  Utiliser données pour générer callouts selon les lieux proches, meteo, date...
  https://www.pompiers.fr/pompiers/nous-connaitre/vehicules-des-sapeurs-pompiers
  Utiliser opendata pour s'installer uniquement dans vrais casernes/commissariats : https://magosm.magellium.com/geoserver/wfs?request=GetFeature&version=2.0.0&count=500000&outputFormat=application/json&typeName=magosm:france_police_point&srsName=EPSG:3857&bbox=-1538728.3025657746,4558105.012117158,2570526.338045301,6805965.139927621
  Faire json callouts : amenities: [amenities possibles], probability: 0.1, services: [dans l'ordre: pompier, police...], effectifsMinimum: {police: [eri, bac], pompiers: [vtu, ftp]}, reward: 10000
  Système argent : + d'effectifs = coût + important // rapidité/efficacité = + grosse récompense..., pouvoir acheter véhicules
  Pouvoir exporter/importer saves / importer sur téléphone avec qr code...
  https://www.cnil.fr/fr/fpr-fichier-des-personnes-recherchees
  https://www.data.gouv.fr/fr/datasets/localisation-des-hopitaux-dans-openstreetmap/

  node["amenity"="police"]["police:FR"]({{bbox}});
  way["amenity"="police"]["police:FR"]({{bbox}});
  nwr(around:10000,{{bbox}})["amenity"="hospital"]["emergency"="yes"];

  - Nominatim/Geocoder ville en coord
  - Créer bbox/radius autour du centre
  - Overpass trouver commissariat/caserne plus proche

  Callouts sur github, permettre de télécharger la zone de jeu pour jouer hors ligne + map par défaut (paris...)
  Hors ligne = estimer distance et calculer temps pour arriver sur zone a vol d'oiseau // En ligne geocoder trajet en suivant routes ?

  Faire dossier avec les saves (fs), les mods, les maps téléchargées...
*/

export default function Game() {
  const [ActiveTab, setActiveTab] = useState(() => Appels);
  const tabs = [
    {
      'key': 'appels',
      'component': Appels,
      'icon': 'fa-solid fa-phone-intercom',
      'name': 'Appels',
    },
    {
      'key': 'interventions',
      'component': Interventions,
      'icon': 'fa-regular fa-light-emergency-on',
      'name': 'Interventions',
    },
    {
      'key': 'effectifs',
      'component': Effectifs,
      'icon': 'fa-regular fa-user-police',
      'name': 'Effectifs',
    },
    {
      'key': 'services',
      'component': Services,
      'icon': 'fa-regular fa-hospital',
      'name': 'Services',
    },
    {
      'key': 'reglages',
      'component': Reglages,
      'icon': 'fa-regular fa-gear',
      'name': 'Réglages',
    },
  ]

  const position = [45.541510, 3.248128];

  let options = {
    steps: 50,
    units: 'kilometers',
    options: {}
  };
  let radius = turf.circle([position[1],position[0]], 5, options); // 5km

  // useEffect(() => {
  // }, []);

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex">
        {/* Narrow sidebar */}
        <div className="hidden w-28 bg-gray-700 overflow-y-auto md:block">
          <div className="w-full py-6 flex flex-col items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="fa-stack fa-2x">
                <i className="fa-duotone fa-map fa-stack-1x text-[50px] text-[#3363b8]"></i>
                <i className="fa-solid fa-light-emergency-on fa-stack-1x text-[25px] text-pompier"></i>
              </span>
            </div>

            <div className="flex-1 mt-6 w-full px-2 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(() => tab.component)}
                  className={((ActiveTab === tab.component) ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:shadow-sm hover:text-white text-gray-400') + ' ease-in-out duration-200 active:scale-105 group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'}
                >
                  <i className={tab.icon + ' fa-xl mt-3'}></i>
                  <span className="mt-3">{tab.name}</span>
                </button>
              ))}
            </div>

          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="w-full md:hidden">
            <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
              <div className="flex-1 flex justify-between px-4 sm:px-6">
                <div className="mx-auto md:hidden">
                  <button
                    type="button"
                    className="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <i className="fa-solid fa-gear"></i>
                  </button>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 flex items-stretch overflow-hidden">

            <main className="flex-1 overflow-y-auto">
              <section className="min-w-0 flex-1 h-full flex flex-col">
                <MapContainer className="w-full h-full" center={position} zoom={13}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  {/*<Marker position={position}>
                    <Popup>
                      Rixe <br />
                      Statut : non traité <br/>
                      5 Rue du Docteur Sauvat
                    </Popup>
                  </Marker>*/}

                  <GeoJSON
                   data={radius}
                   style={() => ({
                    color: '#4a83ec',
                    weight: 3,
                    fillOpacity: 0,
                   })}
                  />
                </MapContainer>
              </section>
            </main>

            <aside className="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block lg:order-first">
              <ActiveTab />
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}