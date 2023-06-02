import React,{useEffect, useState} from 'react'
import style from './../styles/CountTime.module.css'
type Props = {}

export default function index({}: Props) {
  const [status,setStatus] = useState(false)
  const [sec,setSec] = useState(0)
  const [msec,setMsec] = useState(0)
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
        if(status){
          setTimeout(()=>{
            if(sec%59 == 0 && sec!=0){
              seconds = -59
              minutes = 1
            }
            else if(min%59 == 0 && min!=0){
              minutes = -59
              hours = 1
            }
            else{
              seconds = 1
              minutes = 0
              hours = 0
            }
            setHour(hour+hours)
            setMin(min+minutes)
            setSec(sec+seconds)
            console.log(`Hour : ${hour} Min : ${min} Sec : ${sec} `)
          },1000)
        }
        
    })
    
    return (
    <>
      <div className={style.content}>
          <div className={style.display}>
            <div className="hours-number" > {hour} Hours</div>
            <div>:</div>
            <div className="minutes-number"> {min} Minutes</div>
            <div>:</div>
            <div className="seconds-number"> {sec} Seconds</div>
          </div>
          <div className={style.but_all}>
            <button id='but-time' style={{background:'green'}} onClick={()=>{setStatus(true); console.log(status)}}>Start</button>
            <button id='but-time' style={{background:'red'}} onClick={()=>setStatus(false)}>End</button>
            <button id='but-time' style={{background:'orange'}} onClick={()=>{if(!status)clearTime()}}>Reset</button>
            <button id='but-time' style={{background:'yellow'}}>Record</button>
          </div>
      </div>
      
    </>
  )
}