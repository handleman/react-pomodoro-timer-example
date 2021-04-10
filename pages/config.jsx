import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux';
import { selectInterval, setInterval, selectRest, setRest, setMinutes } from '../store/countDownSlice';
import { reset } from '../store/timerSlice';

export default function Config() {
    // form that takes interval values for pomodoro timer and resting mode
    // take interval and rest values from state and put it in templat
    const dispatch = useDispatch();
    const interval = useSelector(selectInterval);
    const rest = useSelector(selectRest);


    //  each form element has its own handler fired on onChange
    // interval time input handler
    const intervalChange = event => {
        // gets the value from input p
        // input could be taken from event.target object
        const value = event.target.value;
        // update the stete for interval
        dispatch(setInterval(value));
        // update state for minutes
        dispatch(setMinutes(value))
        // update state for timer as reset in order to restart interface for pomodoro
        dispatch(reset());
    }

    const restChange = event => {
        const value = event.target.value;
        dispatch(setRest(value));
        dispatch(reset());
    }
    return (
        <div>
            <Head>
                <title>Pomodoro timer configuration</title>
            </Head>
            <form className="config-panel">
                <h2>Please adjust timer and rest intervals </h2>
                <h3>(in minutes)</h3>
                <label htmlFor="interval">
                    Timer:
                </label>
                <input type="number" name="interval" id="interval" value={interval} onChange={intervalChange} />
                <label htmlFor="rest">
                    Rest:
                </label>
                <input type="number" name="rest" id="rest" value={rest} onChange={restChange} />

                </form>
                <style jsx lang="scss">{`
                    $darkgray: #777;
                    .config-panel{
                
                        max-width: 350px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-right: auto;
                        margin-left: auto;
                    }
                    input{
                        appearance: none;
                        display: inline-block;
                        min-height: 36px;
                        padding: 8px 12px;
                        width: 100%;
                        margin-top: 5px;
                        background: #fff;
                        border: 1px solid #d9d9d9;
                        border-top: 1px solid #c0c0c0;
                        box-sizing: border-box;
                        border-radius: 1px;
                        font-size: 15px;
                        color: $darkgray;
                        outline: none;
                        margin-bottom: 1em;
                    }
                    label{
                        font-size: 1em;
                        margin-bottom: 0.5em;
                        color: $darkgray;
                    }
                `}
                </style>
        </div>
    )
}
