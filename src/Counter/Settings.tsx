import {ChangeEvent, useState} from "react";
interface Result{
    name: string,
    age: number,
    agree: boolean,
    sub: boolean
}

const INITIAL_VALUE: Result = {
    name:"",
    age:18,
    agree: false,
    sub: false
}
export const Settings = () =>{
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(18)
    const [sub, setSub] = useState<boolean>(false)
    const [agree, setAgree] = useState<boolean>(false)
    const [result, setResult] = useState<Result | undefined>(undefined)

    const setOnlineResult=(key: any, value: string|number|boolean)=>{
        setResult(prevState => prevState ? {...prevState, [key]: value} : {...INITIAL_VALUE, [key]: value})
    }
    const onChangeName = (event: ChangeEvent<HTMLInputElement>) =>{
        setOnlineResult("name", event.target.value)
        setName(event.target.value)
    }
    const onChangeAge = (event: ChangeEvent<HTMLInputElement>) =>{
        if (Number(event.target.value) >= 18 && Number(event.target.value) <100){
            setAge(Number(event.target.value))
            setOnlineResult("age", Number(event.target.value))
    }}
    const onChangeSub = (event: ChangeEvent<HTMLInputElement>)=>{
        setSub(event.target.checked)
        setOnlineResult("sub", event.target.checked)
    }
    const onChangeAgree = (event: ChangeEvent<HTMLInputElement>)=>{
        setAgree(event.target.checked)
        setOnlineResult("agree", event.target.checked)
    }
    function onClickSubBtn(){
        const data: Result={
            name: name,
            age: age,
            sub: sub,
            agree: agree
        }
       console.log(data)
            setResult(data)
    }
    return <div>

        <input placeholder={"name"} value={name} type={"text"} onChange={onChangeName}/>
        <input placeholder={"18"} value={age} type={"number"}  onChange={onChangeAge}/>
        <input placeholder={"agree"} type={"checkbox"} checked={sub} onChange={onChangeSub}/>Subscribe on email invite
        <input placeholder={"disagree"} type={"checkbox"} checked={agree} onChange={onChangeAgree}/>Transition personal data

        <button disabled={!(Boolean(name) && !!age && agree && sub)}
                onClick={onClickSubBtn}>
            Subscribe
        </button>
        {result &&
            <div>
            <div>Name: {result.name}</div>
            <div>Age: {result.age}</div>
            <div>Agree with transition:  {result.agree ? "Y": "N"}</div>
            <div>Agree with subscribe:  {result.sub ? "Y": "N"}</div>
            </div>
        }
    </div>
}