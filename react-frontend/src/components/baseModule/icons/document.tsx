/** @format */

import SvgIcon from '@material-ui/core/SvgIcon'
import {IIcon, EStandardColor} from './types'
import React from 'react'

export default ({color, fontSize, style}: IIcon) => {
  let defColor: any = undefined
  let custColor: string = ''
  color && color in EStandardColor ? (defColor = color) : (custColor = color)
  return (
    <SvgIcon fontSize={fontSize || 'default'} color={defColor} style={style}>
      <path
        fill={custColor}
        d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z"
      />
    </SvgIcon>
  )
}
