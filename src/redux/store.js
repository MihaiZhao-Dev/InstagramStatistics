import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import dataReducer from './reducers/data';
import { isDevelopment } from '../services/envService';

const middleWare = [thunk];

const reducers = combineReducers({
    data: dataReducer,
});

const composeEnhancers =
    typeof window === 'object' &&
    isDevelopment() &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            trace: true,
            traceLimit: 25,
        })
        : compose;

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancer = composeEnhancers(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);