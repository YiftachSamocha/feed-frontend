import { legacy_createStore as createStore, combineReducers } from 'redux'

import { systemReducer } from './reducers/system.reducer'
import { commentReducer } from './reducers/comment.reducer'

const rootReducer = combineReducers({
    commentModule: commentReducer,
    systemModule: systemReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })