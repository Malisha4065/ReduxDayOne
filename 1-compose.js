import { createStore, compose, applyMiddleware, bindActionCreators } from "redux";

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderRepeatThreeTimesAndEmbolden = string => embolden(repeatThreeTimes(makeLouder(string)));

console.log(makeLouderRepeatThreeTimesAndEmbolden('hello'));

const makeLouderRepeatEmboldNew = compose(embolden, repeatThreeTimes, makeLouder);

console.log(makeLouderRepeatEmboldNew('himom'));