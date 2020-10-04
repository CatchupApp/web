interface ClassInfo {
  name: string;
  period: number;
  teacher: string;
  videos: Array<Video>;
}

interface Video {
  name: string;
  date: Date;
  thumbnailsrc: string;
}

export type { ClassInfo, Video };
