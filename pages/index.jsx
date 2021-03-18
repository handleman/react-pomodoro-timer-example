import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Pomodoro } from '../components/pomodoro'
import { TimerControlsPanel } from '../components/timerControlsPanel'
import { Button } from '../components/button'

// todo: head title
// todo: move code out to '/features/countdown'
export default function Index() {
  return (
    <div className={styles.timerPanel}>
      <Pomodoro></Pomodoro>
      <TimerControlsPanel>
        <Button primary>Run</Button>
        <Button>Pause</Button>
        <Button accent>Reset</Button>
      </TimerControlsPanel>
    </div>
  )
}
