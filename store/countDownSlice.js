import { createSlice } from '@reduxjs/toolkit';
import { countDownDefaults } from './defaults';

export const countDownSlice = createSlice({
    name: 'countDown',
    initialState: countDownDefaults,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setMinutes: (state, action) => {
            state.minutes = action.payload
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload
        },
        setInterval: (state, action) => {
            state.interval = action.payload
        },
        setRest: (state, action) => {
            state.rest = action.payload
        },
        setRestMode: (state, action) => {
            state.restMode = action.payload
        },

    }

});

export const selectRestMode = state => state.countDown.restMode;
export const selectMinutes = state => state.countDown.minutes;
export const selectSeconds = state => state.countDown.seconds;
export const selectInterval = state => state.countDown.interval;
export const selectRestInterval = state => state.countDown.rest;
export const selectedStatus = state => state.countDown.status;
export const selectRest = state => state.countDown.rest;

export const {
    setStatus,
    setMinutes,
    setSeconds,
    setInterval,
    setRest,
    setRestMode,
} = countDownSlice.actions;

export default countDownSlice.reducer;
