import styles from './timerControlsPanel.module.scss'

export function TimerControlsPanel(props) {
    const { children } = props;

    return (
        <div className={styles.controls}>
            {children}
            <style jsx globlal>{`
                .${styles.controls} button{
                    margin-right: 1em;
                }
                .${styles.controls} button:last-child {
                    margin-right: 0;
                }
            `}</style>
        </div>
    )
}