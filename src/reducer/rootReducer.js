import { combineReducers } from '@reduxjs/toolkit';
import pathReducer from '../slice/pathSlice';

const rootReducer = combineReducers({
  path: pathReducer,
});

export default rootReducer;
