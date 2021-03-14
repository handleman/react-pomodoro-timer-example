import styles from './pomodoro.module.scss'
export function Pomodoro(props) {
    const minutes = 25;
    const seconds = 0;
    return (
        <div className={`${styles.pomodoro} ${styles.active}`}>
            <div className={styles.clock}>
                <span>{minutes}</span> : <span>{seconds}</span>
            </div>
        </div>
    );
}