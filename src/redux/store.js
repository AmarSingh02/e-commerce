import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice';
import ViewCartReducer from './viewCartSlice'


export const store=configureStore({
    reducer:{
        counter:CounterReducer,
        viewCart:ViewCartReducer,
    }
})