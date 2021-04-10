import styles from './pomodoro.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveState, selectPausedState, reset, setActive } from '../../store/timerSlice';
import {
    selectRestMode,
    setRestMode,
    selectMinutes,
    selectSeconds,
    setSeconds,
    setMinutes,
    selectInterval,
    selectRestInterval,
    setStatus,
    selectedStatus,
} from '../../store/countDownSlice';
import { COUNTDOWN_STATE } from '../../store/enums';

const DELAY = 60;
const TICK = 1000;

let tickInterval = null;

const interpolateToCountdownState = (isActive, isPaused) => {

    if (isActive && !isPaused) {
        return COUNTDOWN_STATE.ACTIVE;
    }
    if (isActive && isPaused) {
        return COUNTDOWN_STATE.PAUSED;
    }
    if (!isActive && !isPaused) {
        return COUNTDOWN_STATE.RESET;
    }
}

const getCssClasses = (derivedState, restMode) => {
    let result = styles.active;

    switch (derivedState) {
        case COUNTDOWN_STATE.RESET:
            result = styles.ready;
            break;
        case COUNTDOWN_STATE.PAUSED:
            result = styles.paused
            break;
    }

    return restMode && result !== styles.paused ? styles.resting : result;
}

export function Pomodoro(props) {
    const dispatch = useDispatch();
    const isActive = useSelector(selectActiveState);
    const isPaused = useSelector(selectPausedState);
    const restMode = useSelector(selectRestMode);
    const countDownStatus = useSelector(selectedStatus);


    const seconds = useSelector(selectSeconds);
    const minutes = useSelector(selectMinutes);
    const inteval = useSelector(selectInterval);
    const restInteval = useSelector(selectRestInterval);

    const derivedState = interpolateToCountdownState(isActive, isPaused);

    const cssClasses = getCssClasses(derivedState, restMode);


    // start timer procedure 
    const startCountDown = () => {
        let _seconds = seconds;
        let _minutes = minutes;
        let _restMode = restMode
        // starts callback on every second and controls display of the interface timer over every second
        const tickCallback = () => {
            const isSecondsOut = (_seconds < 1);
            const isIntervalOut = (_minutes === 0 && isSecondsOut)

            if (isIntervalOut) {
                if (_restMode) {
                    _minutes = inteval;
                    alert('You should get back to work');
                } else {
                    _minutes = restInteval
                    alert('You need to get some rest');
                }
                dispatch(setMinutes(_minutes));

                // set styling for intraface apropriate to countdown mode
                _restMode = !_restMode;
                dispatch(setRestMode(_restMode));
                return;
            }

            // if seconds out it starts another minute
            if (isSecondsOut) {
                // interface seconds become 59
                dispatch(setSeconds(DELAY - 1));
                _seconds = DELAY - 1;
                _minutes = _minutes - 1;
                dispatch(setMinutes(_minutes));
                return;

            }

            // if neither of abowe happen just decrease seconds value by one
            _seconds = _seconds - 1;
            dispatch(setSeconds(_seconds));
        }

        tickInterval = setInterval(tickCallback, TICK)
        // switch countdown to active mode
        dispatch(setStatus(COUNTDOWN_STATE.ACTIVE));
    }
    // set interface on pause 
    const stopCountDown = () => {
        clearInterval(tickInterval);
        dispatch(setStatus(COUNTDOWN_STATE.PAUSED));
    }
    // set interface at default state
    const resetCountDown = () => {
        dispatch(reset());
        // bring timer back from resting mode if it is on
        restMode && dispatch(setRestMode(false))

        dispatch(setMinutes(inteval));
        dispatch(setSeconds(0));

        // stop animation if it is going
        tickInterval && stopCountDown();
        dispatch(setStatus(COUNTDOWN_STATE.RESET));
    }

    if (derivedState !== countDownStatus) {
        switch (derivedState) {
            case COUNTDOWN_STATE.ACTIVE:
                startCountDown();
                break;
            case COUNTDOWN_STATE.PAUSED:
                stopCountDown();
                break;
            case COUNTDOWN_STATE.RESET:
                resetCountDown();
                break;
        }
    }

    return (
        <div className={`${styles.pomodoro} ${cssClasses}`}>
            <div className={styles.clock}>
                <span>{minutes}</span> : <span>{seconds}</span>
            </div>
        </div>
    );
}