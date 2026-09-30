import { locations as staticLocations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useLocationStore=create(immer((set)=>({
    activeLocation:staticLocations.work,
    defaultLocation:staticLocations.work,
    // Tracks whether the user has manually navigated away from the
    // default location. Using this flag instead of comparing
    // activeLocation === defaultLocation matters: inside an Immer
    // producer, reading two state fields that alias the same object
    // still yields two distinct draft-proxy instances, so that
    // comparison is always false — which silently broke syncing
    // activeLocation to freshly-fetched content.
    hasManualSelection:false,

    setActiveLocation:(location)=>
    set((state)=>{
        if (location === undefined) {
          console.warn('setActiveLocation called without a location argument');
        }
        state.activeLocation=location;
        state.hasManualSelection=true;
     }),
    resetActiveLocation:()=>
        set((state)=>{
            state.activeLocation=state.defaultLocation;
            state.hasManualSelection=false;
        }),
    // Called once content.loadContent() resolves with the real work
    // location, so Finder/Home reflect fetched projects, not just the
    // static fallback that seeded the initial state.
    setDefaultLocation:(location)=>
        set((state)=>{
            state.defaultLocation=location;
            if (!state.hasManualSelection) {
              state.activeLocation=location;
            }
        }),
})))

export default useLocationStore;