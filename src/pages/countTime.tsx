import React,{useEffect, useState} from 'react'
import style from './../styles/CountTime.module.css'
type Props = {}

export default function countTime({}: Props) {
  const [sec,setSec] = useState(0)
  const [min,setMin] = useState(0)
  const [hour,setHour] = useState(0)

  function clearTime(){
    setHour(0)
    setMin(0)
    setSec(0)
  }
    useEffect(()=>{
        let seconds : number = 0
        let minutes : number = 0
        let hours : number = 0
          
    })

    return (
    <div className={style.content}>
        <div className="hours-number"> {hour} Hours</div>
        <div>:</div>
        <div className="minutes-number"> {min} Minutes</div>
        <div>:</div>
        <div className="seconds-number"> {hour} Seconds</div>
    </div>
  )
}