import { BsCameraVideo } from "react-icons/bs";

import type { Video } from "../models/classinfo";

export interface ThumbnailImageProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  video: Video;
}

const ThumbnailImage = (props: ThumbnailImageProps) => {
  const lecture = props.video;

  return (
    <div
      className="w-64 h-56 text-white bg-dark rounded-lg relative overflow-hidden"
      onClick={props.onClick}
    >
      {lecture.thumbnailsrc ? (
        <img
          className="object-cover object-center w-full h-full"
          src={lecture.thumbnailsrc}
        />
      ) : (
        <div
          className="h-full w-full flex justify-center text-4xl"
          style={{ marginTop: "25%" }}
        >
          <BsCameraVideo />
        </div>
      )}
      <div className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-75 text-center p-2 flex flex-col">
        <div className="text-md font-bold">{lecture.name}</div>
        <div className="text-sm font-medium">
          {new Date(lecture.date).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailImage;
