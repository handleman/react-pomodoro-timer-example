import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Pomodoro } from '../components/pomodoro'
import { TimerControlsPanel } from '../components/timerControlsPanel'
import { Button } from '../components/button'

// todo: head title

export default function Home() {
  return (
    <div className={styles.timerPanel}>
      <Pomodoro></Pomodoro>
      <TimerControlsPanel>
        <Button>Run</Button>
        <Button>Pause</Button>
        <Button>Reset</Button>
      </TimerControlsPanel>
    </div>
  )
}
