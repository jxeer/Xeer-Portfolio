export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "arcade-atlas",
    title: "Arcade Atlas",
    description:
      "Android project for a game and stream search app. The goal of the project is to build a data visualizer for games. The app allows you to query data about games, search for games, and view the top Twitch streams for a given game. The data is obtained through the Twitch and IGDB APIs.",
    tags: ["Kotlin", "Android", "Jetpack Compose"],
    githubUrl: "https://github.com/julianxeer/arcade-atlas",
    images: ["project-mobile-1", "project-mobile-2", "project-mobile-3"],
  },
  {
    id: "weather-track",
    title: "Mattereum",
    description:
      "Full-stack project of a data viewer for information collected from various weather stations. This study project is built using Angular 18 for the front-end, .NET for the back-end, and MySQL and MongoDB as databases.",
    tags: ["C#", "Angular", "Bootstrap", "MySQL", "MongoDB"],
    githubUrl: "https://github.com/julianxeer/weather-track",
    images: ["project-desktop-1", "project-desktop-2"],
  },
  {
    id: "chat",
    title: "Harmonia",
    description:
      "Chat system with the functionality of creating chat rooms, inputting names, ages and choosing colors in the chat. This project does not use a database and it's a demo of the use of socket.io in projects using Node.JS on server-side and client-side.",
    tags: ["Node.JS", "Socket.IO"],
    githubUrl: "https://github.com/julianxeer/chat",
    images: ["project-desktop-3", "project-desktop-4"],
  },
];
