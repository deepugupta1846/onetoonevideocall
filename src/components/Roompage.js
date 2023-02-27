import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Roompage = () => {
  const { roomid } = useParams();
  const myMeeting = async (element) => {
    const appId = 1468085539;
    const serverSecrete = "a21c77a4c4007f46ee000f4b2602826a";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecrete,
      roomid,
      Date.now().toString(),
      "Deepu"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        node: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <>
      <div ref={myMeeting}></div>
    </>
  );
};
export default Roompage;
