import { Button, Heading, HStack, Input, VStack } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MeetingRoom = () => {
    const {meetingId}=useParams()
//   const [roomId, setValue] = useState(meetingId);

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/astrologermeeting/${meetingId}`);
  }, [navigate, meetingId]);

  return (
    <>
      <VStack spacing={4} w={'100%'} h={'70vh'} justifyContent={'center'} alignItems={'center'} >
        <Heading children={'Create Meeting Here'} />
        <VStack spacing={4}>
          {/* <Input
            value={roomId}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="enter room id"
            /> */}
            <Heading children={meetingId} />
          <Button
            onClick={() => handleJoinRoom()}
            children={"Create Meeting Room"}
            colorScheme={"red"}
          />
        </VStack>
      </VStack>
    </>
  );
};

export default MeetingRoom;
