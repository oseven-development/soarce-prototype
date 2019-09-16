/** @format */

import React from 'react'

import {DashboardView, ProjectView, CalendarView, LocationView, PromoterView} from '../../view'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ProjectIcon from '@material-ui/icons/EventNote'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import LocationIcon from '@material-ui/icons/Business'
import PromoterIcon from '@material-ui/icons/AccessibilityNew'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  position?: number
  groups: any | string | string[]
  bottomNavigation: boolean
  siteNav?: boolean
  icon?: JSX.Element
}

const routes: IRoute[] = [
  {
    path: '/',
    component: DashboardView,
    groups: '',
    displayName: 'Dashboard',
    position: 1,
    bottomNavigation: true,
    icon: <DashboardIcon />,
  },
  {
    path: '/project',
    component: ProjectView,
    groups: '',
    displayName: 'Projekte',
    position: 2,
    bottomNavigation: true,
    icon: <ProjectIcon />,
  },
  {
    path: '/calendar',
    component: CalendarView,
    groups: '',
    displayName: 'Kalender',
    position: 3,
    bottomNavigation: true,
    icon: <CalendarIcon />,
  },
  {
    path: '/location',
    component: LocationView,
    groups: '',
    displayName: 'Location',
    position: 3,
    bottomNavigation: true,
    icon: <LocationIcon />,
  },
  {
    path: '/promoter',
    component: PromoterView,
    groups: '',
    displayName: 'Promoter',
    position: 3,
    bottomNavigation: true,
    icon: <PromoterIcon />,
  },
]

export default routes
