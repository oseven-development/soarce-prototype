/** @format */

import React from 'react'
import {Flex} from 'rebass'

const SiteContainer = (props: any) => {
  const {children} = props
  return (
    <Flex
      flexWrap="wrap"
      style={{margin: window.innerWidth < 768 ? '56px 0px 55px 0px' : '120px auto'}}
      justifyContent={'center'}
      alignItems={'flex-start'}>
      {children}
    </Flex>
  )
}
export default SiteContainer
