/** @format */

import React from 'react'
import {Flex} from 'rebass'

const SiteContainer = (props: any) => {
  const {children} = props
  return (
    <Flex flexWrap="wrap" style={{margin: '95px 15px 70px 15px'}} justifyContent={'center'} alignItems={'flex-start'}>
      {children}
    </Flex>
  )
}
export default SiteContainer
