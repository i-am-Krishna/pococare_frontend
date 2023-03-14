import React from 'react'
import {AppBar, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../Store/index';
const Navbar = () => {
    const dispatch = useDispatch();
    const [value, setvalue] = useState();
    const loggedIn = useSelector((state)=>state.isLoggedIn)

  return (
    <AppBar style={{backgroundColor:"#19191d",position:"sticky"}}>
        <Toolbar>
            <Typography variant='h4'>Pococare Project</Typography>
            {loggedIn &&  <Box display='flex' marginLeft={'auto'} marginRight='auto' >
                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab style={{color:"white"}} label="Home" LinkComponent={Link} to='/home'/>
                
                <Tab style={{color:"white"}} label="Products" LinkComponent={Link} to='/products'/>
                 
                </Tabs>
            </Box> }
            <Box display="flex" marginLeft="auto">
              {!loggedIn && <><Button sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link} to='/'>Login</Button>
                <Button sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link} to='/'>Signup</Button> </>}
                { loggedIn &&
                <Button onClick={()=>dispatch(authAction.logout())} sx={{margin:1,borderRadius:10}} variant="contained" stcolor='warning'  LinkComponent={Link}  to='/'>Logout</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;