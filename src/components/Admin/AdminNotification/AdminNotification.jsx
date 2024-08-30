import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../AdminSideBar/AdminSideBar'
import Header from '../AdminHeader/AdminHeader'

const AdminNotification = () => {
    return (
        <>
            <Header /> 
            <Grid
                w={"100%"}
                height={"100vh"}
                bgColor={"rgb(247, 247, 247)"}
                gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
                gap={"2rem"}
            >
                <SideBar />
                <Box border={"1px solid red"} overflowY={"auto"} p={3}>
                <Heading children={'Notification'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'}/>
                </Box>
            </Grid></>
    )
}

export default AdminNotification