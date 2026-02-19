import React from 'react'
import SecondNavbar from '../SecondNavbar';
import { Outlet } from 'react-router-dom';

const VivinaEventsVideos = () => {
  return (
    <>
    <SecondNavbar/>
    <Outlet/>
    </>
  )
}

export default VivinaEventsVideos