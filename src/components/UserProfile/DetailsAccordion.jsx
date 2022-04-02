import { Accordion, AccordionSummary, /*Switch*/ Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const DetailsAccordion = () => {

  const user = useSelector(state => state.users.users)
  
  return (
    <Box>
    <Accordion className='user-data' disabled>
        <AccordionSummary className='no-opacity'>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Full Name
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{user.name}</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion className='user-data' disabled>
      <AccordionSummary className='no-opacity'>
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Email
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{user.email}</Typography>
      </AccordionSummary>
    </Accordion>

    <Accordion className='user-data' disabled>
    <AccordionSummary className='no-opacity'>
      <Typography sx={{ width: '33%', flexShrink: 0 }} >
        Phone
      </Typography>
    <Typography sx={{ color: 'text.secondary' }}>
        {user.phone}
    </Typography>
    </AccordionSummary>
  </Accordion>

  <Accordion className='user-data' disabled>
  <AccordionSummary className='no-opacity' >
    <Typography sx={{ width: '33%', flexShrink: 0 }}>
      Address
    </Typography>
    <Typography sx={{ color: 'text.secondary' }}>
         {
            user?.address?.street + ', ' + user?.address?.city + ', ' + user?.address?.zipcode
        }   
  </Typography>

  </AccordionSummary>
</Accordion>
{/* <Switch checked={check} onChange={(e) => setChecked(e.target.checked)}
  inputProps={{ 'aria-label': 'controlled' }}
  /> */}
</Box>
  )
}

export default DetailsAccordion