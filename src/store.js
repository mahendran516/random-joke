import { configureStore } from "@reduxjs/toolkit";
import jokeslice from "./jokeslicer";


const store = configureStore({
    reducer:{
        joke:jokeslice.reducer
    }
})

export default store