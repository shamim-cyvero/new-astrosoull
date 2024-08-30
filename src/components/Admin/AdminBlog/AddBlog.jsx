import React, { useState } from 'react'
import AdminHeader from '../AdminHeader/AdminHeader'
import { Box, Button, FormControl, FormLabel, Grid, Heading, Input, Textarea } from '@chakra-ui/react'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import { Form, Link, useNavigate } from 'react-router-dom'

function AddBlog() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [banner, setBanner] = useState('')

    const navigate=useNavigate() 

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(description)
        console.log(banner)
        navigate('/admin/blog/addblog/newblog')

    }
    return (
        <>
            <AdminHeader />
            <Grid
                w={"100%"}
                height={"100vh"}
                bgColor={"rgb(247, 247, 247)"}
                gridTemplateColumns={{ base: "1fr", md: "1fr", lg: "1fr 4fr" }}
                gap={"2rem"}
            >
                <AdminSideBar />
                <Box border={"1px solid red"} overflowY={"auto"} p={3}>
                <Heading children={'Add new Blog'} size={'lg'} m={5} textAlign={'center'} textTransform={'uppercase'}/>

                    <form style={{ width: "80%" }} onSubmit={formSubmit}>
                        <FormControl mb={5}>
                            <FormLabel fontSize={'lg'}>Title</FormLabel>
                            <Input type='name' required onChange={(e) => setName(e.target.value)} />
                        </FormControl>
                        <FormControl mb={5}>
                            <FormLabel fontSize={'lg'}>Content</FormLabel>
                            <Textarea rows={4} cols={3} required onChange={(e) => setDescription(e.target.value)} />
                        </FormControl>
                        
                        <FormControl mb={5}>
                            <FormLabel fontSize={'lg'}>Banner</FormLabel>
                            <Input id="img" name="img" accept="image/*" type='file' required onChange={(e) => setBanner(e.target.value)} />
                        </FormControl>

                            <Button type='submit' colorScheme='whatsapp' size={'sm'} p={2} w={['100%', '50%', '20%']} fontSize={'md'}>
                                Add Now
                            </Button>
                    </form>
                </Box>
            </Grid ></>
    )
}

export default AddBlog