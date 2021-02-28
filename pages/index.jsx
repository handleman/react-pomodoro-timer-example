import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="timer-panel">

      <h1>pomodoro</h1>
      <style jsx>{`
        .timer-panel{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
      </style>
    </div>
  )
}
