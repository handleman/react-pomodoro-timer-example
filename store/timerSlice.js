import { createSlice } from '@reduxjs/toolkit';
import { timerDefaults } from './defaults';

export const timerSlice = createSlice({
    name: 'timer',
    initialState: timerDefaults,
    reducers: {
        setActive: state => {
            state.active = true;
            state.paused = false;
        },
        setOnPause: state => {
            state.active = true;
            state.paused = true;
        },
        reset: state => {
            state.active = false;
            state.paused = false;
        }
    }
})

export const {
    setActive,
    setOnPause,
    reset,
} = timerSlice.actions;

export default timerSlice.reducer;
