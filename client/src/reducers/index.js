import { combineReducers } from 'redux';
import { reducer as reduxForm } from "redux-form";
import tablesReducer from './tablesReducer';
import authReducer from './authReducer';
import lyftTokenReducer from './lyftTokenReducer';
import lyftCostEstReducer from './lyftCostEstReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tables: tablesReducer,
  lyftToken: lyftTokenReducer,
  lyftCostEst: lyftCostEstReducer
});
