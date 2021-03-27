import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Pomodoro } from '../components/pomodoro'
import { TimerControlsPanel } from '../components/timerControlsPanel'
import { Button } from '../components/button'
import { useSelector, useDispatch } from 'react-redux';
import { selectActiveState, selectPausedState, setActive, setOnPause, reset } from '../store/timerSlice';

// todo: head title
// todo: move code out to '/features/countdown'
export default function Index() {
  const active = useSelector(selectActiveState);
  const paused = useSelector(selectPausedState);
  const dispatch = useDispatch();
  const isTimerReadyForUse = (!active && !paused);
  const isTimerInUse = (active && !paused);
  const isTImerOnPause = (active && paused);

  const handleStartTimer = () => {
    dispatch(setActive());
  }
  const handlePauseTimer = () => {
    dispatch(setOnPause());
  }
  const handleResetTimer = () => {
    dispatch(reset());
  }

  return (
    <div className={styles.timerPanel}>
      <Pomodoro></Pomodoro>
      <TimerControlsPanel>
        {
          isTimerReadyForUse && <Button primary onClick={handleStartTimer}>Run</Button>
        }
        {
          isTimerInUse && <Button onClick={handlePauseTimer}>Pause</Button>
        }
        {
          isTImerOnPause && <Button accent onClick={handleResetTimer}>Reset</Button>
        }
      </TimerControlsPanel>
    </div>
  )
}
