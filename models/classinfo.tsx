interface ClassInfo {
  name: string,
  period: number,
  teacher: string,
  lectures: Array<Lecture>
} 

interface Lecture {
  title: string,
  date: Date,
  thumbnailsrc: string,
}

export type {
  ClassInfo, Lecture
}