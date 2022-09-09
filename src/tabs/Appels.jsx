// import { newCallout } from "../utils/callout.js";
import { useSelector } from 'react-redux'

/*
Si pas d'internet charger utiliser le .json des amenities
"Lancer dé" pour avoir la rareté du callout
Rechercher dans .json callout avec cette rareté et qui convient aux amenities de la zone
*/

export default function Appels() {
  const callouts = useSelector(state => state.callouts);

  return (
    <>
      <h1 className="p-6 text-lg w-full border-b">Centre de traitement des appels</h1>
      {/*<button onClick={() => newCallout([45.5203,3.18183,45.56911,3.31401], "police") } className="w-full bg-gray-800 text-white ease-in-out duration-200 active:scale-105 group w-full p-2 rounded-md flex flex-col items-center">Recevoir un appel</button>*/}
      <div className="pt-3 px-2">
        { callouts.map(callout => (
          <button key={callout.id} className="w-full mb-3 border border-gray-800 ease-in-out duration-200 hover:bg-gray-100 active:bg-gray-300 group w-full p-2 rounded-md flex flex-col">
            <div className="flex justify-around">
              <span>{callout.title}</span>
              <span>
                { callout.services.map(service =>
                  <>
                    {service === "police" && (
                      <i key="police" className="fa-solid fa-user-police"></i>
                    )}
                    {service === "pompiers" && (
                      <i key="pompiers" className="fa-solid fa-fire-flame"></i>
                    )}
                    {service === "samu" && (
                      <i key="samu" className="fa-solid fa-user-doctor"></i>
                    )}
                  </>
                ) }
              </span>
            </div>
          </button>
        )) }
      </div>
    </>
  )
}