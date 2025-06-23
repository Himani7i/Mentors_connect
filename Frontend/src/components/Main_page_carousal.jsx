"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";

export function Main_page_carousal() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-20">
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Features
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The Smart Calendar Booking system is designed to streamline and automate the process of scheduling meetings and events
          </span>{" "}
           It leverages intelligent algorithms to find optimal time slots by analyzing participants’ availability, preferences, and time zones. The core idea is to reduce the back-and-forth communication traditionally involved in booking, thus saving time and increasing productivity. 
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};
const DummyContent2 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The Auto-transcriptions & Key Points system is built to enhance video calls by delivering real-time transcription and intelligent summarization.
          </span>{" "}
          Using Socket.IO, it captures live audio, transmits it instantly, and processes it through AI to generate accurate transcriptions and extract key discussion points.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};
const DummyContent3 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};
const DummyContent4 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Live forums offer a space to ask questions, share ideas, and get real-time help from mentors and peers.
          </span>{" "}
           They build a learning community where you not only solve problems faster but also gain deeper insights through collaboration.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};
const DummyContent5 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The AI-generated Career Roadmaps system personalizes learning by analyzing a user’s skills, goals, and industry trends to build a step-by-step path toward their desired career.
          </span>{" "}
          Powered by AI, it recommends courses, certifications, and milestones tailored to individual progress and market demand. This ensures learners stay focused, motivated, and aligned with real-world opportunities.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};
const DummyContent6 = () => {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const data = [
  {
        category: "Calendar",
        title: "Smart Calendar Booking",
    content: <DummyContent1 />,
  },
  {
    category: "Video Calls & AI Summaries",
    title: "Auto-transcriptions & key points.",
    content: <DummyContent2 />,
  },
  {
    category: "AI Mock Interviews",
    title: "Get industry-specific feedback.",
    content: <DummyContent3 />,
  },

  {
    category: "Live Discussion Forums",
    title: "Engage with peers & mentors.",
    content: <DummyContent4 />,
  },
  {
    category: "Personalized Learning Paths",
    title: "AI-generated career roadmaps.",
    content: <DummyContent5 />,
  },
  {
    category: "Web3 Rewards",
    title: "Earn tokens for participation.",
    content: <DummyContent6 />,
  },
];
