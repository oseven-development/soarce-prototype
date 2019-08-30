/** @format */

import React from 'react'

import {DashboardView} from '../../view'
import SettingsIcon from '@material-ui/icons/Settings'
import HistoryIcon from '@material-ui/icons/History'
import CameraIcon from '@material-ui/icons/AddCircle'

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
    displayName: 'Recognize',
    position: 1,
    bottomNavigation: true,
    icon: <CameraIcon />,
  },
  // {
  //   path: '/project',
  //   component: HistoryView,
  //   groups: '',
  //   displayName: 'Historie',
  //   position: 2,
  //   bottomNavigation: true,
  //   icon: <HistoryIcon />,
  // },
  // {
  //   path: '/user',
  //   component: SettingsView,
  //   groups: '',
  //   displayName: 'Einstellungen',
  //   position: 3,
  //   bottomNavigation: true,
  //   icon: <SettingsIcon />,
  // },
]

export default routes
