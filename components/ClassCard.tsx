import type { ClassInfo, Lecture } from "../models/classinfo";

export interface ClassCardProps {
  onClassClick?: React.MouseEventHandler<HTMLDivElement>;
  onLastLectureClick?: React.MouseEventHandler<HTMLDivElement>;
  onTeacherClick?: React.MouseEventHandler<HTMLDivElement>;
  classInfo: ClassInfo;
}

const ClassCard = (props: ClassCardProps) => {
  const classInfo = props.classInfo;
  const lectures: Array<Lecture> = classInfo.lectures;

  return (
    <div
      className="w-64 h-48 text-white bg-dark rounded-lg relative"
      onClick={props.onClassClick}
    >
      <div className="p-6">
        <div className="font-extrabold text-2xl">{classInfo.name}</div>
        <div className="font-semibold">{`Period ${classInfo.period}`}</div>
        <div className="font-bold text-xl" onClick={props.onTeacherClick}>
          {classInfo.teacher}
        </div>
      </div>
      {lectures && lectures.length > 0 && (
        <div
          className="absolute bottom-0 w-full rounded-lg bg-black font-bold text-center p-2 text-sm"
          onClick={props.onLastLectureClick}
        >
          {lectures[lectures.length - 1].title}
        </div>
      )}
    </div>
  );
};

export default ClassCard;
