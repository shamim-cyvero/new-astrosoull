import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { server } from "../../../main";
import axios from "axios";

const UserMeetingJoin = () => {
  const meetingRef = useRef(null);
  const location = useLocation();
  const {roomId}=useParams()
  const navigate=useNavigate()


  const {  user } = useSelector(
    state => state.userContainer
);

 // Function to notify backend when the meeting ends
 const notifyMeetingEnd = async () => {
    //  navigate('/userprofile')
    try {
      alert('notifyMeetingEnd')
      await axios.get(`${server}/user/meeting/end/${roomId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      alert('end')
      navigate('/userprofile')


    } catch (error) {
      console.error("Error notifying backend about meeting end", error);
    }
  };

  // Utility to extract query parameters from the URL
  const params = new URLSearchParams(location.search);
  // Function to notify backend when the meeting ends
//   const notifyMeetingEnd = async () => {
//     try {
//       alert('notifyMeetingEnd')
//       await axios.get(`${server}/astrologer/meeting/end/${meetingId}`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       console.log("Meeting ended and backend notified");
//     } catch (error) {
//       console.error("Error notifying backend about meeting end", error);
//     }
//   };


 

  //   useEffect(() => {
  //     const { appID, serverSecret, roomId, meetingId } = getQueryParams();

  //     if (appID && serverSecret && roomId && meetingId) {
  //       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
  //         appID,
  //         serverSecret,
  //         roomId,
  //         meetingId,
  //         "userName" // Replace 'userName' with the actual user's name
  //       );

  //       const zc = ZegoUIKitPrebuilt.create(kitToken);

  //       zc.joinRoom({
  //         container: meetingRef.current,
  //         showRoomTimer: true,
  //         maxUsers: 2,
  //         scenario: {
  //           mode: ZegoUIKitPrebuilt.OneONoneCall,
  //         },
  //         showScreenSharingButton: false,
  //       });
  //     }
  //   }, [location]);

  const myMeeting = async (element) => {
    const appID = 2032305679;
    const serverSecret = "e951c7bf1fb9926b87dd2a1f9345a7b2"; 
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      //   params.get("appID"),
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),  //id userId  
      user?.name
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    zc.joinRoom({
      container: element,
      showRoomTimer: true,
      maxUsers: 2,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false, //more option like no screen sharing or record etc
      showLeavingView: false,
      showLeaveRoomConfirmDialog: false,
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
  return (
    <>
      <div ref={myMeeting}></div>
    </>
  );
};

export default UserMeetingJoin;
