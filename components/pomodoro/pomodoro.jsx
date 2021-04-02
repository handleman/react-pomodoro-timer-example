import styles from './pomodoro.module.scss'
import { useSelector } from 'react-redux';
import { selectActiveState, selectPausedState } from '../../store/timerSlice';
import { selectRestMode } from '../../store/countDownSlice';
import { COUNTDOWN_STATE } from '../../store/enums';

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
    const isActive = useSelector(selectActiveState);
    const isPaused = useSelector(selectPausedState);
    const restMode = useSelector(selectRestMode);

    const derivedState = interpolateToCountdownState(isActive, isPaused);

    const cssClasses = getCssClasses(derivedState, restMode)
    const minutes = 25;
    const seconds = 0;
    return (
        <div className={`${styles.pomodoro} ${cssClasses}`}>
            <div className={styles.clock}>
                <span>{minutes}</span> : <span>{seconds}</span>
            </div>
        </div>
    );
}