import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";


const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// con esta linea conectamos nuestra app con la extension redux devbtools del navegador

const store = createStore(
    reducer, composeEnhancer(applyMiddleware(thunkMiddleware))// con esta linea podemos hacer peticiones a una API/servidor
)

export default store;