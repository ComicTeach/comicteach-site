/**
 * Central place for site-wide constants. Edit these to rebrand or swap
 * GitHub/Discord URLs without hunting through every page.
 */
export const site = {
  name: "ComicTeach",
  domain: "comicteach.com",
  url: "https://comicteach.com",
  tagline: "Turn your lessons into Manga.",
  description:
    "ComicTeach is an open-source AI agent that turns any lesson — from AP Calculus to 7th-grade history — into a 6-page manga that students will actually finish.",
  author: {
    name: "Andy Wang",
    handle: "@xw2871",
    bio:
      "Founder of ComicTeach. NYU. Building tools that make hard ideas feel like Saturday morning cartoons.",
    photo: "/founder.svg" // drop a square JPG/PNG in public/founder.jpg and update this path
  },
  // Swap these in after you create the repo + Discord.
  links: {
    github: "https://github.com/comicteach/comicteach",
    discord: "https://discord.gg/sUZPnP7P",
    twitter: "https://twitter.com/comicteach",
    email: "xw2871@nyu.edu"
  },
  // Showcase assets live in public/showcase/.
  showcase: {
    unit1: {
      title: "AP Calculus AB · Unit 1.1 — Limits",
      pages: Array.from({ length: 6 }, (_, i) => `/showcase/unit_1_1/page${i + 1}.png`)
    },
    unit2: {
      title: "AP Calculus AB · Unit 1.2 — Derivatives",
      pages: Array.from({ length: 6 }, (_, i) => `/showcase/unit_1_2/page${i + 1}.png`)
    },
    demoVideo: "/showcase/Doraemon_Lesson1_Limit_Demo.mp4"
  }
};

export type SiteConfig = typeof site;
