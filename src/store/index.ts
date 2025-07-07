import { combineReducers, configureStore } from "@reduxjs/toolkit";
import examReducer from "@/slices/examSlice";


import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// ── Per Slice Persist Configs ──
const examPersistConfig = {
  key: "exam",
  storage,
};


// ── Combine Reducers ──
const rootReducer = combineReducers({
  exam: persistReducer(examPersistConfig, examReducer),
});

// ── Configure Store ──
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ── Persistor ──
export const persistor = persistStore(store);

// ── Types ──
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
