/** @format */

import React from 'react'
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  MonthView,
  AppointmentTooltip,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui'
import {ButtonGroup, Button, Paper} from '@material-ui/core'
import {ContentCard} from '../../components'

const CalendarView = (props: any) => {
  const {data} = props
  const [view, setView] = React.useState('month')
  return (
    <React.Fragment>
      <div style={{maxWidth: 1200}}>
        <ButtonGroup variant="contained" color={'secondary'}>
          <Button
            onClick={() => {
              setView('day')
            }}>
            Tages-Ansicht
          </Button>
          <Button
            onClick={() => {
              setView('week')
            }}>
            Wochen-Ansicht
          </Button>
          <Button
            onClick={() => {
              setView('month')
            }}>
            Monats-Ansicht
          </Button>
        </ButtonGroup>
        <Paper>
          <Scheduler
            data={
              data.projects
                ? data.projects.map((project: any) => {
                    return {
                      startDate: project.startDate,
                      endDate: project.endDate,
                      title: project.name,
                      promoter: project.promoter,
                      description: project.description,
                    }
                  })
                : []
            }>
            {view === 'day' ? <DayView /> : view === 'week' ? <WeekView /> : <MonthView />}

            <Appointments />
            <AppointmentTooltip showCloseButton showOpenButton />
          </Scheduler>
        </Paper>
      </div>
    </React.Fragment>
  )
}
export default CalendarView
