import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";


const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(persistedReducer, middleware);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
