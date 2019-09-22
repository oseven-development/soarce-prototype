/** @format */

import React from 'react'
import {Flex, Box} from 'rebass'
import {Typography, IconButton, Fab} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import NameIcon from '@material-ui/icons/Label'
import CityIcon from '@material-ui/icons/LocationCity'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import BudgetIcon from '@material-ui/icons/AttachMoney'
import StateIcon from '@material-ui/icons/CheckBox'
import PromoterIcon from '@material-ui/icons/SupervisorAccount'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import {getData} from '../../../api/custom/queries/get'
import {getPromoter} from '../../../api/amplify/graphql/queries'

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
  const [promoter, setPromoter]: any = React.useState({})

  React.useEffect(() => {
    const LoadData = async () => {
      // const res = await getData(getPromoter, 'getPromoter', content.promoter[0]).then((res: any) => {
      //   return res
      // })
      // setPromoter(res)
    }
    LoadData()
  }, [])
  return (
    <Flex flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-start'} style={{width: '100%'}}>
      {title ? (
        <Box m={'10px'} width={1}>
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
        </Box>
      ) : null}
      <Box width={1}>
        <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
          <Box>
            {Body ? Body : null}
            {type === 'location' ? (
              <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'} style={{display: 'flex', justifyContent: 'center'}}>
                      <NameIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.name}</Typography>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <CityIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.city}</Typography>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ) : null}
            {type === 'promoter' ? (
              <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'} style={{display: 'flex', justifyContent: 'center'}}>
                      <MailIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.email}</Typography>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <PhoneIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.phoneNumber}</Typography>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ) : null}
            {type === 'project' ? (
              <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'}>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <NameIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.description}</Typography>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <Typography> {content.startDate}</Typography>
                    </Box>
                    <Box mx={'10px'}>
                      <ArrowForwardIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.endDate}</Typography>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <BudgetIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.budget}</Typography>
                    </Box>
                  </Flex>
                </Box>

                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <CityIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.location.name}</Typography>
                    </Box>
                    <Box mx={'10px'}>
                      <PromoterIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography>{promoter !== {} ? promoter.name : null}</Typography>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex justifyContent={'center'} alignItems={'flex-start'}>
                    <Box mx={'10px'}>
                      <StateIcon />
                    </Box>
                    <Box mx={'10px'}>
                      <Typography> {content.state}</Typography>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ) : null}
          </Box>
        </Flex>
      </Box>
      <Box>
        <Fab aria-label="edit" onClick={onEdit} color={'default'} style={{margin: '5px 5px', boxShadow: 'none'}}>
          <EditIcon> </EditIcon>
        </Fab>
        <Fab aria-label="delete" onClick={onDelete} color={'secondary'} style={{margin: '5px 5px', boxShadow: 'none'}}>
          <DeleteIcon />
        </Fab>
      </Box>
    </Flex>
  )
}
export default ContentCard
