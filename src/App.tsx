import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dataSelector} from "./Bll/Selectors/selectors";
import {getDataTC} from "./Bll/reducer";
import s from './App.module.css'

function App() {
    const dispatch = useDispatch()
    const data = useSelector(dataSelector)
    const [inputValue, setInputValue] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)
    const [lowerCase, setLowerCase] = useState<boolean>(false)
    const [substring, setSubstring] = useState<boolean>(false)

    const filterOne = () => {
        setLowerCase(true)
    }
    const filterTwo = () => {
        setSubstring(true)
    }
    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        setLowerCase(false)
        setSubstring(false)
    }
    useEffect(() => {
        dispatch(getDataTC())
    }, [dispatch])
    return <>

        <div className={s.container}>
            <label htmlFor="Search"><b>Search:</b></label>
            <input className={s.superInput} type="text" value={inputValue} onChange={changeInputValue}/>

            <div>
                <button className={s.btn} onClick={filterOne}>FilterOne</button>
                <button className={s.btn} onClick={filterTwo}>FilterTwo</button>
            </div>
            <div>
                <label htmlFor="Search"><b>Сapital letters:</b></label>
                <input type={'checkbox'} onChange={() => setEditMode(!editMode)}/>
            </div>
        </div>


        <div className={s.data}>

            {lowerCase && data.filter((item) => item.length > +inputValue)
                .map((item, index) => {
                    return <div className={s.test} key={index}>{item}</div>
                })}
            {substring && data.filter((item) => editMode ?
                item.toLowerCase().match(inputValue.toLowerCase()) :
                item.match(inputValue)).map((item, index) => {
                return <div className={s.test} key={index}>{item}</div>
            })}
        </div>
    </>;
}

export default App;
