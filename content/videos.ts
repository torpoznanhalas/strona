export type VideoItem = {
  title: string;
  description: string;
  youtubeId: string;
  date?: string;
  location?: string;
};

// Wklej wyłącznie identyfikatory filmów, np. dla
// https://www.youtube.com/watch?v=dQw4w9WgXcQ wpisz: dQw4w9WgXcQ
export const videos: VideoItem[] = [
  // {
  //   title: "Hałas słyszany w domu mieszkańców",
  //   description: "Nagranie wykonane przy zamkniętych oknach.",
  //   youtubeId: "WSTAW_ID_FILMU",
  //   date: "2026-08-01",
  //   location: "Poznań, Ławica"
  // }
];
