import React from 'react'
import './Recommendation.css'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'


import Navbar from '../navbar/Navbar'

function Recommendation() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <h1>Recommendations</h1>
        <List sx={{width: '100%', maxWidth: 360}}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='rec' src="https://cdns-images.dzcdn.net/images/cover/a968ed3814acb2ef8f3929b1bebcb42d/500x500.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary='Losing My Religion'
              secondary={
                <React.Fragment>
                  <Typography
                     sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="white"
                  >
                    REM
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant='inset' component='li' />

          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='rec' src="https://i1.sndcdn.com/artworks-g23acOZ1xZX7gCAr-7nTohA-t500x500.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary='Beggin'
              secondary={
                <React.Fragment>
                  <Typography
                     sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="white"
                  >
                    Maneskin
                  </Typography>
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
          <Divider variant='inset' component='li' />

        </List>
      </div>
    </div>
  )
}

export default Recommendation