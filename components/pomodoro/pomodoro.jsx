<<<<<<< HEAD
export function Pomodoro(props) {

    return (
        <div>pomodoro</div>
    )
=======
import styles from './pomodoro.module.scss'
export function Pomodoro(props) {
    const minutes = 25;
    const seconds = 0;
    return (
        <div className={styles.pomodoro}>
            <div className={styles.clock}>
                <span>{minutes}</span> : <span>{seconds}</span>
            </div>
        </div>
    );
>>>>>>> 1400a2b41f88899436f3685cd9f496a6f16cdac3
}