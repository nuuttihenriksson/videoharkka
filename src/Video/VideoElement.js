import React from 'react'
import Video from "../materials/VJP_VideoHarkka_V3.mp4";
import Poster from "../materials/videoposter.png"

const VideoElement = () => {
  return(
    <div>
      <video width="50%" maxHeight="50%" controls="controls" poster={Poster}>
        <source src={Video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoElement;
