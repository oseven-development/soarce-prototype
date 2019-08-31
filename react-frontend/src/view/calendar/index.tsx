/** @format */

import React from 'react'
import {Scheduler, DayView, WeekView, Appointments, MonthView} from '@devexpress/dx-react-scheduler-material-ui'

const CalendarView = (props: any) => {
  return (
    <React.Fragment>
      <Scheduler
        data={[
          {startDate: '2019-08-31 10:00', endDate: '2019-08-31 11:00', title: 'Meeting'},
          {startDate: '2019-09-01 18:00', endDate: '2019-09-01 19:30', title: 'Go to a gym'},
        ]}>
        <WeekView />
        <Appointments />
      </Scheduler>
    </React.Fragment>
  )
}
export default CalendarView
