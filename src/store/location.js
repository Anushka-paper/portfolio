import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION=locations.work;

const useLocationStore=create(immer((set)=>({
    activeLocation:DEFAULT_LOCATION,

    setActiveLocation:(location)=>
    set((state)=>{
        if (location === undefined) {
          console.warn('setActiveLocation called without a location argument');
        }
        state.activeLocation=location;
     }),     resetActiveLocation:()=>
        set((state)=>{
            state.activeLocation=DEFAULT_LOCATION;
        })
})))

export default useLocationStore;