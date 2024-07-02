import { createSlice, current } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../services";
import { ITask, Items, StorageKeys } from "@/domain";

export const itemSlice = createSlice({
    name: "items",
    initialState: getLocalStorage(StorageKeys.Items) ? JSON.parse(getLocalStorage(StorageKeys.Items) as string): Items,
    reducers: {
        setItems: (_, action) => {
            setLocalStorage(StorageKeys.Items, action.payload);
            return action.payload;
        },
        removeItem: (state, action) => {
            const _filter = current(state).filter((p: ITask) => p.id !== action.payload.id);
            setLocalStorage(StorageKeys.Items, _filter);
            return _filter;
        }
    }
});

export const { setItems, removeItem } = itemSlice.actions;