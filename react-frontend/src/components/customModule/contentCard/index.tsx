/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {Typography, IconButton} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import NameIcon from '@material-ui/icons/Label'
import CityIcon from '@material-ui/icons/LocationCity'

interface IContentCard {
  onEdit: Function
  onDelete: Function
  Body?: JSX.Element
  title?: string
  type?: 'location'
  content: any
}

const ContentCard = (props: any) => {
  const {title, onEdit, onDelete, Body, type, content} = props
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'flex-start'}
      style={{height: 100, width: '100%'}}>
      {title ? (
        <Box width={1}>
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
        </Box>
      ) : null}
      <Box width={1}>
        <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            {Body ? Body : null}
            {type === 'location' ? (
              <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'} style={{display: 'flex', justifyContent: 'center'}}>
                      <NameIcon color={'primary'} />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography variant="h2"> {content.name}</Typography>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <CityIcon color={'secondary'} />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography variant="h2"> {content.city}</Typography>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ) : null}
          </Box>
          <Box>
            <IconButton onClick={onEdit}>
              <EditIcon> </EditIcon>
            </IconButton>
            <IconButton onClick={onDelete}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
export default ContentCard
