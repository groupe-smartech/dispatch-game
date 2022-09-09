import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// const json = await axios.get("data.json");
const initialState = [
  { id: '1', title: 'Rixe', services: ['police'] },
  { id: '2', title: 'Meurtre', services: ['police','pompiers'] }
];

export const calloutsSlice = createSlice({
  name: 'callouts',
  initialState,
  reducers: {}
})

export default calloutsSlice.reducer