import type { Lecture } from "../models/classinfo";

export interface ThumbnailImageProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  lecture: Lecture;
}

const ThumbnailImage = (props: ThumbnailImageProps) => {
  const lecture = props.lecture;

  return (
    <div
      className="w-64 h-56 text-white bg-dark rounded-lg relative overflow-hidden"
      onClick={props.onClick}
    >
      <img
        className="object-cover object-center w-full h-full"
        src={lecture.thumbnailsrc}
      ></img>
      <div className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-75 text-center p-2 flex flex-col">
        <div className="text-md font-bold">{lecture.title}</div>
        <div className="text-sm font-medium">
          {lecture.date.toLocaleDateString("en-US")}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailImage;
