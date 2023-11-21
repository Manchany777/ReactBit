import { combineReducers } from "redux";
import color from './modules/color';
import count from './modules/count.js';
import animal from './modules/animal';

export default combineReducers({
    color, // color2: color
    count,
    animal // animal.js파일과 연결을 시켜주는 이름
})