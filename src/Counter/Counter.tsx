import {ChangeEvent, useState} from "react";
import styles from "./Counter.module.css";

export function Counter() {
    const [settings, setSettings]=useState<{maxValue: number, stepValue: number} >({maxValue:5, stepValue:1})
    const [count, setCount] = useState(0)
    const [value, setValue] = useState<number>(settings.maxValue)
    const [step, setStep] = useState<number>(settings.stepValue)
    const [open, setOpen] = useState<boolean>(true)

    function counti() {
        setCount((count) => count + settings.stepValue)
    }

    function saveSettings(){
        setSettings({maxValue: value, stepValue: step})
    }

    function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
        const maxValue = Number(event.target.value)
        setValue(maxValue)
    }

    function onChangeStep(event: ChangeEvent<HTMLInputElement>) {
        const maxValue = Number(event.target.value)
        const step = Number(event.target.value)
        if (step > maxValue) {
            return
        }
        setStep(step)
    }

    return <div className={styles.container}>
    <div className={styles.countContainer}>
        <div className={styles.buttonContainer}>
            <div className={styles.buttonSettingsContainer}>
                <button className={styles.buttonMenu} onClick={() => setOpen((prev) => !prev)}>settings</button>

            </div>
        </div>

        <div className={`${styles.counter} ${count >= settings.maxValue ? styles.counterAlarm : ''}`}>{count}</div>


                <button className={`${styles.buttonDefault} ${styles.button}`} onClick={() => setCount(0)}>res</button>
                <button
                    className={`${styles.button} ${styles.buttonIncrem} ${count >= settings?.maxValue ? styles.buttonIncremDis : styles.buttonIncrem}`}
                    onClick={counti} disabled={count >= settings?.maxValue}>+
                </button>

            </div>
        <div className={`${styles.menu} ${open ? styles.active : ""}`}>
            <input
                className={styles.inputValue}
                onChange={onChangeValue}
                value={value}
                type={"number"}
            />
            <input
                className={styles.inputStep}
                value={step}
                type={"number"}
                onChange={onChangeStep}
            />
            <button onClick={saveSettings}
                    className={styles.buttonSave}>
                save</button>
        </div>
    </div>
}