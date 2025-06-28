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
            Mentor Connect allows students to easily explore and connect with
            experienced mentors across various domains.
          </span>{" "}
          The platform displays detailed mentor profiles including profession,
          skills, and areas of expertise. This ensures mentees can make informed
          decisions when seeking guidance, fostering a more personalized and
          productive mentorship experience.
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
            The Role-Based Authentication system ensures a secure and tailored
            experience for both Mentors and Mentees.
          </span>{" "}
          Separate login flows and user roles allow the platform to provide
          personalized dashboards, permissions, and interactions. Authentication
          is handled via JWT tokens and stored securely using HTTP-only cookies
          to prevent unauthorized access.
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
            The Discussion Forum is built to foster meaningful interaction
            between mentors and mentees.
          </span>{" "}
          Users can post questions, share insights, and engage in topic-based
          threads across various domains. This feature helps build a
          collaborative learning environment, encourages peer-to-peer support,
          and gives mentors a place to contribute their expertise.
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
            The built-in AI Assistant acts as a personal mentor, offering
            instant responses to queries using GPT-based intelligence.
          </span>{" "}
          Whether you're asking technical questions, seeking project advice, or
          need clarification on a concept, the chatbot is available 24/7. It
          enhances accessibility and ensures users get support even when a human
          mentor isn't available.
        </p>
        <img
          src="https://i.ibb.co/YBpXKYrZ/Screenshot-2025-06-26-152338.png"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-6 rounded-lg outline"
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
            The authentication system uses JSON Web Tokens (JWT) stored in
            HTTP-only cookies to ensure secure, role-based access across the
            platform.
          </span>{" "}
          This prevents token theft via JavaScript and enables persistent login
          sessions for both mentors and mentees. It forms the backbone of
          protected routes, secure chat interactions, and personalized user
          experiences.
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
            The application is built using Vite and Tailwind CSS, delivering a
            modern, fast, and responsive user interface across all devices.
          </span>{" "}
          The frontend is hosted on Vercel, while the backend is deployed
          separately for scalability. With optimized build tools and styling
          utilities, the platform ensures both performance and developer agility
          during development and deployment.
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
    category: "Mentor Discovery",
    title: "Browse and connect with experienced mentors",
    content: <DummyContent1 />,
  },
  {
    category: "Role-Based Authentication",
    title: "Separate login flows for Mentors and Mentees",
    content: <DummyContent2 />,
  },
  {
    category: "Discussion Forum",
    title: "Ask questions and engage with the community",
    content: <DummyContent3 />,
  },
  {
    category: "AI Assistant",
    title: "Chat with an AI bot for guidance and Q&A",
    content: <DummyContent4 />,
  },
  {
    category: "JWT & Secure Cookies",
    title: "Authentication managed securely with tokens",
    content: <DummyContent5 />,
  },
  {
    category: "Modern UI + Deployment",
    title: "Responsive frontend with Vite + Tailwind, deployed via Vercel",
    content: <DummyContent6 />,
  },
];
