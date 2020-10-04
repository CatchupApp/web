import type { ClassInfo, Video } from "../models/classinfo";

const ClassCard = (props) => {
  const classInfo = props.classInfo;

  return (
    <div
      className="w-64 h-48 text-white bg-dark rounded-lg relative"
      onClick={props.onClassClick}
    >
      <div className="p-6">
        <div className="font-extrabold text-2xl">{classInfo.name}</div>
      </div>
    </div>
  );
};

export default ClassCard;
