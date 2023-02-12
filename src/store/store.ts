import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import { dogApi } from "./apis/dogApi";

export const store = configureStore({
  reducer: {
    game: gameReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
