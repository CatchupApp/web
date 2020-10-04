import React from 'react';
import { Lecture } from '../models/classinfo';
import ThumbnailImage from '../components/ThumbnailImage';

interface VideoProps {
  lectures: Array<Lecture>
}


class VideoPage extends React.Component<VideoProps> {
  render() {
    const lectures: Array<Lecture> = this.props.lectures;

    const lectureGrid = lectures.map((value, index) => {
      return <div className="p-4"><ThumbnailImage lecture={value}/ ></div>
    })

    return (
      <div className="flex flex-wrap m-auto">
        {lectureGrid}
      </div>
    );
  }
}

export default VideoPage;