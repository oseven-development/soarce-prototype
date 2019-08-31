/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'

const FormContainer = ({children}: any) => {
  children = children.filter((x: any) => !!x)
  return (
    <React.Fragment>
      <Flex
        justifyContent={'center'}
        flex="wrap"
        alignItems={'flex-start'}
        flexDirection={window.innerWidth < 640 ? 'column' : 'row'}>
        {Array.isArray(children) ? (
          <React.Fragment>
            <Box width={[1, 1 / 2, 1 / 2]} mx={[0, '10px', '15px']}>
              {children
                .filter((x: any) => !!x)
                .map((child: JSX.Element) => {
                  return children.indexOf(child) <= children.length / 2 - 1 ? child : null
                })}
            </Box>
            <Box width={[1, 1 / 2, 1 / 2]} mx={[0, '10px', '15px']}>
              {children
                .filter((x: any) => !!x)
                .map((child: JSX.Element) => {
                  return children.indexOf(child) > children.length / 2 - 1 ? child : null
                })}
            </Box>
          </React.Fragment>
        ) : (
          <Box></Box>
        )}
      </Flex>
    </React.Fragment>
  )
}
export default FormContainer
