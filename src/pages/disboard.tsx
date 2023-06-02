import React from 'react'
import  style  from './../styles/Disboard.module.css'

type Props = {}

export default function disboard({}: Props) {
  return (
    <div>
      <div className={style.content}>
        <div className={style.chart_display}></div>
        <div className={style.side_bar}>
          <div className={style.day_time}>day</div>
          <div className={style.week_time}>week</div>
          <div className={style.month_time}>month</div>
          <div className={style.year_time}>year</div>
        </div>
      </div>
    </div>
  )
}