import * as React from 'react';
import { BsTextLeft, BsSearch, BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { TagButton } from '../../../components/Button';

const TabBar = (props) => {
  const isFirstTab = props.onTranscript;

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

interface AnalyticsParagraphProps {
  paragraphInfo: ParagraphAnalysis,
  className?: string
}

const AnalysisParagraph = (props: AnalyticsParagraphProps) => {
  const paraInfo: ParagraphAnalysis = props.paragraphInfo;
  const [textOpen, toggleText] = React.useState(false);

  return (
    <div className={`w-full ${props.className}`}>
      <div className="text-xl font-bold">{`Paragraph ${paraInfo.paragraphnum}`}</div>
      <div className="flex flex-row items-center mt-2">
        {paraInfo.keywords.slice(0, Math.min(paraInfo.keywords.length, 4)).map((value, index) => (
          <TagButton text={`#${value}`} className="mr-2"/>
        ))}
      </div>
      <div className="flex flex-row items-center mt-2 text-sm" onClick={() => {toggleText(!textOpen)}}>
        {textOpen && <BsArrowDown className="mr-2"/>}
        {!textOpen && <BsArrowUp className="mr-2"/>}
        Show Text
      </div>
      {textOpen && <div className="mt-2 text-xs">
          {paraInfo.transcript}
      </div>}
    </div>
  )
}

const Transcript = (props) => {
  return (
    <div className="text-xs overflow-scroll">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et odio dapibus, faucibus mauris eget, porta nisl. Ut sodales, lorem nec mattis aliquam, odio odio varius purus, a luctus leo urna ut massa. Maecenas placerat semper orci. Mauris porttitor fermentum ipsum eget finibus. Curabitur sit amet maximus erat, nec fermentum nisi. Fusce ut fermentum nunc, ut mattis elit. Integer lectus nulla, bibendum quis ultricies id, consequat in eros. Nullam aliquet nibh ipsum, a laoreet felis molestie id. Pellentesque ultricies orci ligula, eget varius felis maximus a. In efficitur neque vitae odio luctus porta. 
    </div>
  )
}

interface LeftPageState {
  onTranscript: boolean,
}

interface LeftPageProps {
  
}

class LeftPage extends React.Component<LeftPageProps, LeftPageState> {
  constructor(props) {
    super(props);
    this.state = {
      onTranscript: true
    }

    this.onTranscriptClick = this.onTranscriptClick.bind(this);
    this.onAnalysisClick = this.onAnalysisClick.bind(this);
  }

  onTranscriptClick() {
    this.setState({
      onTranscript: true
    })
  }
  
  onAnalysisClick() {
    this.setState({
      onTranscript: false
    })
  }

  render() {
    const paraInfo: ParagraphAnalysis = {
      transcript: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et odio dapibus, faucibus mauris eget, porta nisl. Ut sodales, lorem nec mattis aliquam, odio odio varius purus, a luctus leo urna ut massa. Maecenas placerat semper orci. Mauris porttitor fermentum ipsum eget finibus. Curabitur sit amet maximus erat, nec fermentum nisi. Fusce ut fermentum nunc, ut mattis elit. Integer lectus nulla, bibendum quis ultricies id, consequat in eros. Nullam aliquet nibh ipsum, a laoreet felis molestie id. Pellentesque ultricies orci ligula, eget varius felis maximus a. In efficitur neque vitae odio luctus porta. ",
      paragraphnum: 1,
      keywords: ["lorem", "ipsum", "dolor", "sit"]
    }

    return (
      <div className="mr-2 bg-white rounded-lg flex-1 w-full h-full">
        <TabBar onTranscript={this.state.onTranscript} onTranscriptClick={this.onTranscriptClick} onAnalysisClick={this.onAnalysisClick} />
        <div className="p-4">
          {this.state.onTranscript && <Transcript />}
          {!this.state.onTranscript && <AnalysisParagraph paragraphInfo={paraInfo}/>}
        </div>
      </div>
    )
  }
}

class Video extends React.Component {

  render() {
    return (
      <div className="w-full h-full p-4 bg-light flex flex-row">
        <LeftPage />
        <div className="ml-2 bg-white rounded-lg flex-1 w-full h-full overflow-hidden">
          
        </div>
      </div>
    )
  }
}

export default Video;