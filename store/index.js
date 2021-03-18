import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import countDownReducer from './countDownSlice';

export default configureStore({
    reducer: {
        timer: timerReducer,
        countDown: countDownReducer
    }
})
