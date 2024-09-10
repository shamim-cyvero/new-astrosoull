import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, InputGroup, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const UserAstrologersMeeting = () => {

    // for meeting form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [value, setValue] = useState(new Date());
    const [selectdate, setSelectdate] = useState();
    const [selectedtime, setSelectedTime] = useState();
    const [selectedminutes, setSelectedMinutes] = useState();
    const [showmeetingForm, setShowMeetingForm] = useState(false);

    const formattedDate = `${value.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })} `;
    const handleDateChange = (date) => {
        setValue(date);
        setSelectdate(date);
        setShowMeetingForm(true)
        console.log(selectdate)
    }
    const MeetingHandler = (e) => {
        e.preventDefault();
        console.log({ name, email, contact });
        setName('')
        setEmail('')
        setContact('')
        alert('Meeting details submitted successfully!');
    };

    const handleClickTime = (time) => {
        setSelectedTime(time)
        console.log(time)
    }
    const handleClickMinutes = (min) => {
        setSelectedMinutes(min)
        console.log(min)
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
                            colorScheme={selectedminutes === '30 Min' ? 'whatsapp' : 'gray'}
                            borderRadius={"15px"}
                            size={["sm", "md"]}
                            onClick={() => handleClickMinutes('30 Min')}
                        >
                            30 Min
                        </Button>
                        <Button
                            colorScheme={selectedminutes === '15 Min' ? 'whatsapp' : 'gray'}
                            boxShadow={"md"}
                            borderRadius={"15px"}
                            size={["sm", "md"]}
                            onClick={() => handleClickMinutes('15 Min')}
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
                                    colorScheme={selectedtime === '07:30PM' ? 'whatsapp' : 'gray'}
                                    borderRadius={"30px"}
                                    size={["sm", "md"]}
                                    onClick={() => handleClickTime('07:30PM')}
                                >
                                    07:30PM
                                </Button>
                                <Button
                                    boxShadow={"md"}
                                    colorScheme={selectedtime === '08:00PM' ? 'whatsapp' : 'gray'}
                                    borderRadius={"30px"}
                                    size={["sm", "md"]}
                                    onClick={() => handleClickTime('08:00PM')}
                                >
                                    08:00PM
                                </Button>
                                <Button
                                    boxShadow={"md"}
                                    colorScheme={selectedtime === '08:30PM' ? 'whatsapp' : 'gray'}
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
                            >Meeting Time: {formattedDate} {selectedtime}  Duration: {selectedminutes}</Text>

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