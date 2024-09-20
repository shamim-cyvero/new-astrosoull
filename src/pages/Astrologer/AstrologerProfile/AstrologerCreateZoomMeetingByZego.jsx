import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../../main";

const AstrologerCreateZoomMeetingByZego = () => {

    const {meetingId}=useParams()
    // alert(roomId)

    // const roomId=meetingId


  const myMeeting =async (element) => {

    // appId , serverSecret,roomId,uniqueId,name-- come form backend
    // const appID = 2032305679;
    // const serverSecret = "e951c7bf1fb9926b87dd2a1f9345a7b2";

    const { data } = await axios.get(`${server}/astrologer/create/meeting/${meetingId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(   //generateKitTokenForProduction is here
      data.appID,
      data.serverSecret,
      data.roomId,
      // Date.now().toString(),  //id userId  
      meetingId,
      'name'
    );

    const zc=ZegoUIKitPrebuilt.create(kitToken)

    zc.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'copy Link',
                url:`http://localhost:5173/astrologermeeting/${meetingId}`
            }
        ],
        showRoomTimer:true,
        maxUsers:2,
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton:false //more option like no screen sharing or record etc
    })

  };
  return (
    <>
<div  ref={myMeeting}>

</div>
    </>
  );
};

export default AstrologerCreateZoomMeetingByZego;
