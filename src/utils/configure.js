import { applyMiddleware, createStore} from "redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";
import root from './root';
const createStoreWithMiddleWare = applyMiddleware(promiseMiddlerware, reduxThunk)(createStore);
const configure = () => createStoreWithMiddleWare(root);

export default configure();