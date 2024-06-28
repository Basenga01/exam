import {ChangeEvent, useState} from "react";
import styles from "./Counter.module.css";

export function Counter() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState<number>(5)
    const [step, setStep] = useState<number>(1)
    const [open, setOpen] = useState<boolean>(true)
    const [settings, setSettings]=useState<{maxValue: number, stepValue: number}|undefined>(undefined)

    function counti() {
        setCount((count) => count + step)
    }

    function saveSettings(){
        setSettings({maxValue: value, stepValue: step})
    }

    function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
        const value = Number(event.target.value)
        setValue(value)
    }

    function onChangeStep(event: ChangeEvent<HTMLInputElement>) {
        const step = Number(event.target.value)
        if (step > value) {
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

        <div className={`${styles.counter} ${count >= value ? styles.counterAlarm : ''}`}>{count}</div>


                <button className={`${styles.buttonDefault} ${styles.button}`} onClick={() => setCount(0)}>res</button>
                <button
                    className={`${styles.button} ${styles.buttonIncrem} ${count >= value ? styles.buttonIncremDis : styles.buttonIncrem}`}
                    onClick={counti} disabled={count >= value}>+
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
                    className={styles.buttonSave}
            >save</button>
        </div>
    </div>
}