import React, { useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../../main";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

const AstrologerCreateZoomMeetingByZego = () => {
  const { meetingId } = useParams();
  const [meetingTimeLeft, setMeetingTimeLeft] = useState("");


  const navigate=useNavigate()




  const { astrologer } = useSelector((state) => state.astrologerContainer);

  // Meeting duration in milliseconds (e.g., 30 minutes)
  const meetingDuration = 30 * 60 * 1000;

  // Function to notify backend when the meeting ends
  const notifyMeetingEnd = async () => {
    try {
      alert('notifyMeetingEnd')
     const {data}= await axios.get(`${server}/astrologer/meeting/end/${meetingId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      navigate('/astrologerprofile')
      alert(data?.message)

    } catch (error) {
      console.error("Error notifying backend about meeting end", error);
    }
  };

  // const roomId=meetingId

  const myMeeting = async (element) => {
      
      const { data } = await axios.get(
        `${server}/astrologer/create/meeting/${meetingId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      //generateKitTokenForProduction is here
      data.appID,
      data.serverSecret,
      data.roomId,
      // Date.now().toString(),  //id userId
      meetingId,
      astrologer?.name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "copy Link",
          url: `http://localhost:5173/usermeetingjoin/${data.roomId}`,
        },
      ],
      showRoomTimer: true,
      maxUsers: 2,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false, //more option like no screen sharing or record etc
      showLeavingView: false,
      showLeaveRoomConfirmDialog: false,

      branding: {
        logoURL: astrologer?.avatar?.url, // The branding LOGO URL.
      },

  // Automatically end the meeting after the specified duration
  onJoinRoom: () => {
    console.log("Meeting started");
  },

      onLeaveRoom: () => {
        notifyMeetingEnd();
      }, 
      onUserLeave: () => {
        notifyMeetingEnd();
      },
      onLiveEnd: () => {
        notifyMeetingEnd();
      },
      

    });

  };
  // Automatically end the meeting after the specified duration

  return (
    <>
      <div ref={myMeeting}>
      </div>
      <Button children={meetingTimeLeft} colorScheme={"red"} pos={'absolute'} left={'50%'} top={'50%'} />
    </>
  );
};

export default AstrologerCreateZoomMeetingByZego;
