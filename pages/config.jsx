import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <form className="config-panel">
                <h2>Please adjust timer and rest intervals </h2>
                <h3>(in minutes)</h3>
                <label htmlFor="interval">
                    Timer:
                </label>
                <input type="number" name="interval" id="interval" />
                <label htmlFor="rest">
                    Rest:
                </label>
                <input type="number" name="rest" id="rest" />

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
