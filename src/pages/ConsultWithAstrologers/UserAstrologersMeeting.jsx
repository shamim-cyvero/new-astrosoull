import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, InputGroup, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GetMeetingPaymentKey } from '../../redux/action/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { server } from '../../main';
const UserAstrologersMeeting = ({chargePerMin,SingleAstrologer}) => {

    // for meeting form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [value, setValue] = useState(new Date());
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [duration, setDuration] = useState();
    const [showmeetingForm, setShowMeetingForm] = useState(false);
    const [price, setPrice] = useState(0);

const {  MeetingPaymentkey,user} = useSelector( (state) => state.userContainer);

const dispatch=useDispatch()

    const formattedDate = `${value.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })} `;
    const handleDateChange = (date) => {
        setValue(date);
        setDate(date);
        setShowMeetingForm(true)
    }
    const MeetingHandler = (e) => {
        e.preventDefault();
        payHandler()
        setName('')
        setEmail('')
        setContact('')
        // alert('Meeting details submitted successfully!');
    };

    const handleClickTime = (time) => {
        setTime(time)
        // console.log(time)
    }
    const handleClickMinutes = (min) => {
        setDuration(min)
        setPrice(min*chargePerMin)
        // console.log(min)
    }

    const payHandler = async () => {
        await dispatch(GetMeetingPaymentKey())
        const { data } = await axios.post(
            `${server}/user/meeting/payment/process`,
            { price },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
        
        if(data){
            const option = {
               key: MeetingPaymentkey,
               amount: data.order.amount,
               currency: 'INR',
               name: SingleAstrologer?.name,
               description: SingleAstrologer?.description,
               image:  SingleAstrologer?.avatar?.url ,
               order_id: data.order.id,
               callback_url: `${server}/user/meeting/payment/verfication/${SingleAstrologer._id}?price=${price}&duration=${duration}&date=${date}&time=${time}`,
               
               prefill: {               //user details who is logined
                   name: user.name,
                   email: user.email,
                   contact: user.phone

               },
               notes: {
                   duration,  
                   date,  
                   time,  
                   price
               },
               theme: {
                   color: '#939182'
               } 
           };
        
           const razor = new window.Razorpay(option);
           razor.open()      
    
        }else{
            return alert('click again')
        }     
    
    }

    return (
        <>
            <VStack justifyContent={"center"} alignItems={"center"}>
                <Text
                    children={`
                  Instructor is not available for meetings...
                `}
                />
                {/* date picker */}

                <Box
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Heading
                        textAlign={"center"}
                        fontSize={["1.1rem", "1.2rem"]}
                        children={"Select Time Slot"}
                    />
                    <HStack
                        mt={5}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Button
                            boxShadow={"md"}
                            colorScheme={duration === 30  ? 'whatsapp' : 'gray'}
                            borderRadius={"15px"}
                            size={["sm", "md"]}
                            onClick={() => handleClickMinutes(30)}
                        >
                            30 Min
                        </Button>
                        <Button
                            colorScheme={duration === 15 ? 'whatsapp' : 'gray'}
                            boxShadow={"md"}
                            borderRadius={"15px"}
                            size={["sm", "md"]}
                            onClick={() => handleClickMinutes(15)}
                        >
                            15 Min
                        </Button>
                    </HStack>
                    <Heading
                        textAlign={"center"}
                        mt={10}
                        fontSize={["1rem", "1.1rem"]}
                        children={"Check available Date"}
                    />

                    {/* calender */}

                    <HStack
                        m={"30px 0px"}
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Calendar
                            onChange={handleDateChange}
                            value={value}
                        />
                        {/* <p>Selected Date: {formattedDate}</p> */}
                    </HStack>
                </Box>

                {/* bottom form */}
                <Box w={"100%"} alignItems={"flex-start"}>
                    <Heading
                        fontSize={["1rem", "1.2rem"]}
                        children={"Please validate any coupon code before use"}
                    />
                    <HStack mt={4}>
                        <InputGroup
                            w={["90%", "90%", "40%"]}
                            borderRadius={"10px"}
                            bg={"white"}
                            color={"black"}
                        >
                            <Input
                                required
                                type="email"
                                placeholder="Enter coupon code here"
                                fontSize={"18x"}
                                w={"100%"}
                            />
                        </InputGroup>
                        <Button
                            colorScheme="whatsapp"
                            // size={['sm','md']}
                            borderRadius={"10px"}
                        >
                            Apply
                        </Button>
                    </HStack>


                    {showmeetingForm && showmeetingForm ? (
                        <>
                            <Heading mt={8} fontSize={["1rem", "1.2rem"]}>
                                Selected date: <span style={{ fontSize: '1rem', color: '#f37110' }}> {formattedDate}</span>
                            </Heading>
                            <HStack mt={4}>
                                <Button
                                    boxShadow={"md"}
                                    colorScheme={time === '07:30PM' ? 'whatsapp' : 'gray'}
                                    borderRadius={"30px"}
                                    size={["sm", "md"]}
                                    onClick={() => handleClickTime('07:30PM')}
                                >
                                    07:30PM
                                </Button>
                                <Button
                                    boxShadow={"md"}
                                    colorScheme={time === '08:00PM' ? 'whatsapp' : 'gray'}
                                    borderRadius={"30px"}
                                    size={["sm", "md"]}
                                    onClick={() => handleClickTime('08:00PM')}
                                >
                                    08:00PM
                                </Button>
                                <Button
                                    boxShadow={"md"}
                                    colorScheme={time === '08:30PM' ? 'whatsapp' : 'gray'}
                                    borderRadius={"30px"}
                                    size={["sm", "md"]}
                                    onClick={() => handleClickTime('08:30PM')}
                                >
                                    08:30PM
                                </Button>
                            </HStack>

                            <Heading
                                mt={8}
                                fontSize={["1rem", "1.2rem"]}
                                children={"Finalize your meeting"}
                            />
                            <Text
                                fontWeight={"500"}
                                fontSize={"1rem"} color={'#1f3b64'}
                            >Meeting Time: {formattedDate} {time}  Duration: {`${duration} Min`} </Text>

                            <form
                                style={{ marginTop: "15px" }}
                                onSubmit={MeetingHandler}
                            >
                                <FormControl mt={4}>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        fontSize={[".9rem", "1rem"]}
                                        fontWeight={"500"}
                                        required
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        fontSize={[".9rem", "1rem"]}
                                        fontWeight={"500"}
                                        required
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Contact</FormLabel>
                                    <Input
                                        fontSize={[".9rem", "1rem"]}
                                        fontWeight={"500"}
                                        required
                                        type="number"
                                        name="contact"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                </FormControl>

                                <Button
                                    mt={5}
                                    colorScheme="whatsapp"
                                    size={["sm", "md"]}
                                    type="submit"
                                >
                                    Book Consultation
                                </Button>
                            </form>
                        </>
                    ) : (null)}

                </Box>
            </VStack>
        </>
    )
}

export default UserAstrologersMeeting