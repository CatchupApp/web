import * as React from 'react';
import { BsTextLeft, BsSearch } from 'react-icons/bs';

const TabBar = (props) => {
  const isFirstTab = props.isFirstTab;

  const analysisColors = isFirstTab ? "bg-white text-black" : "bg-dark text-white";
  const transcriptColors = isFirstTab ? "bg-dark text-white" : "bg-white text-black";

  return (
    <div className="w-full h-10 bg-medium rounded-lg relative">
      <style global jsx>{`
        .second-tab {
          left: 8rem
        }
      `}</style>
      <div className={`flex items-center p-3 w-48 rounded-t-lg h-full font-bold absolute left-40 second-tab ${transcriptColors}`} onClick={props.onAnalysisClick}>
        <BsSearch className="mr-3 ml-10"/>
        Analysis
      </div>
      <div className={`flex items-center p-3 w-40 rounded-t-lg h-full font-bold absolute top-0 left-0 ${analysisColors}`} onClick={props.onTranscriptClick}>
        <BsTextLeft className="mr-3 ml-1"/>
        Transcript
      </div>
    </div>
  )
}



class LeftPage extends React.Component {
  render() {
    return (
      <div className="mr-2 bg-white rounded-lg flex-1 w-full h-full">
        {/* <TabBar isFirstTab={onTranscript} /> */}
      </div>
    )
  }
}

interface VideoState {
  onTranscript: boolean,
}

interface VideoProps {

}

class Video extends React.Component<VideoProps, VideoState> {
  constructor(props) {
    super(props);

    this.state = {
      onTranscript: true,
    }
  }

  render() {
    return (
      <div className="w-full h-full p-4 bg-light flex flex-row">
        {/* <LeftPage onTranscript={this.state.onTranscript}/> */}
        <div className="ml-2 bg-white rounded-lg flex-1 w-full h-full overflow-hidden">
          
        </div>
      </div>
    )
  }
}

export default Video;