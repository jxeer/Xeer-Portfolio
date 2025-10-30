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
    title: "Harmonia",
    description:
      "Harmonia is a digital health platform that integrates telehealth, wellness data, and community care into a unified experience. It enables patients, practitioners, and organizations to securely share biometric data, track holistic progress, and coordinate care through one interface. Designed for accessibility and trust, Harmonia connects modern healthcare with human-centered design.",
    tags: ["Node.JS", "React", "Typescript", "PostgreSQL"],
    githubUrl: "https://github.com/jxeer/Harmonia",
    images: ["@assets/harmonia-screenshot.png"],
  },
  {
    id: "weather-track",
    title: "Mattereum",
    description:
      "Mattereum is a blockchain-based platform that connects physical assets to digital legal identities, enabling secure ownership, transfer, and provenance verification on-chain. It provides smart contracts that embed real-world legal enforceability into digital transactions. By bridging law and technology, Mattereum helps create a trusted infrastructure for trade in both physical and digital economies.",
    tags: ["Typescript", "GitLab CI/CD", "Solidity", "MySQL", "Node.JS"],
    githubUrl: "https://github.com/mattereum",
    images: ["project-desktop-1", "project-desktop-2"],
  },
  {
    id: "chat",
    title: "Coral8",
    description:
      "Coral8 is a system that records and verifies real-world cultural work, like teaching, art, or community care. It collects proof of this work and sends it to the blockchain so people can earn Cowrie Coins for their contributions. In short, Coral8 connects human effort to digital value, making sure respect and cultural labor are recognized and rewarded fairly.",
    tags: ["Node.JS", "React", "Tailwind CSS", "Typescript"],
    githubUrl: "https://github.com/jxeer/Coral8",
    images: ["project-desktop-3", "project-desktop-4"],
  },
];
