import { configureStore } from '@reduxjs/toolkit'

import calloutsReducer from '../features/callouts/calloutsSlice'

/*
Game -
  Coords de la ville
  Difficulté
  Argent
  Amenities de la zone (chargé par axios ou .json si pas internet)...
  Effectifs possédés
  Callouts en cours (id, date d'ajout, effectifs envoyés...)
Callouts - Charger tous les .json des callouts
Services - Charger .json des services
*/

export default configureStore({
  reducer: {
    callouts: calloutsReducer,
  }
})