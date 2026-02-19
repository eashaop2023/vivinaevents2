import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './headercomponent/Header';
import { Box } from '@mui/material';
import Footer from './footercomponent/Footer';

const App = () => {
  return (
   <>
      <Header/>
      {/* Push content below fixed AppBar */}
      <Box sx={{ mt: "60px", p: 0  }} className="overflow-x-hidden">
        <Outlet />
      </Box>
      {/* <main className="pt-[60px] overflow-x-hidden bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
          <Outlet />
      </main> */}
      <Footer/>
    </>
  )
}

export default App
