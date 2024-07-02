import { ITask } from "@/domain";
import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "../states";

export interface AppStore {
    items: ITask[];
}

export default configureStore<AppStore>({
    reducer: {
        items: itemSlice.reducer
    }
 });