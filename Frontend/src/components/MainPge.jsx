import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Main_page_carousal } from "./Main_page_carousal";
import axios from "axios";

export default function MainPage() {
  const [showLogin, setShowLogin] = useState("");
  const [showProfileSymbol, setshowProfileSymbol] = useState("");
  const [showDashboardSymbol, setshowDashboardSymbol] = useState("");

  const navItems = [
    { title: "Our Mentors", href: "/mentors" },
    {
      title: "About",
      href: "/",
      dropdown: [
        { title: "Our Mission", href: "/" },
        { title: "Our Vision", href: "/" },
        { title: "How It Works", href: "/workings" },
      ],
    },
    { title: "Discussion Forum", href: "/discussion-forum" },
    showProfileSymbol
      ? showProfileSymbol
        ? {
            title: <i className="bi bi-person-circle text-xl" />,
            href: "/mentee-profile  ",
          }
        : {
            title: "Login",
            href: "#",
            dropdown: [
              { title: "Login as Mentor", href: "/teacher-login" },
              { title: "Login as Mentee", href: "/student-login" },
            ],
          }
      : showDashboardSymbol
      ? {
          title: "Teachers dashboard",
          href: "/teacher-dashboard  ",
        }
      : {
          title: "Login",
          href: "#",
          dropdown: [
            { title: "Login as Mentor", href: "/teacher-login" },
            { title: "Login as Mentee", href: "/student-login" },
          ],
        },
  ];

  useEffect(() => {
    const cookie_check = async () => {
      const response = await axios.get(
        "https://mentors-connect-2.onrender.com/check-student-cookie",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setshowProfileSymbol(response.data);
    };
    cookie_check();
  }, []);

  useEffect(() => {
    const cookie_check = async () => {
      const response = await axios.get(
        "https://mentors-connect-2.onrender.com/check-teacher-cookie",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setshowDashboardSymbol(response.data);
    };
    cookie_check();
  }, []);

  return (
    <>
      {/* is code ka database se koi lena dena nahi hai  */}
      <div className={showLogin ? "blur-sm" : ""}>
        <nav className="bg-blue-600 to-indigo-700 text-white py-4 px-8 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="mr-2">🔗</span> Mentor Connect
          </h1>
          <ul className="flex gap-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.href}
                  className="hover:bg-white hover:text-indigo-700 transition-all px-4 py-2 rounded-lg font-medium"
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ul className="absolute -left-10 mt-2 bg-white text-gray-800 shadow-xl rounded-lg hidden group-hover:block w-48 border-t-4 border-indigo-500 overflow-hidden z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-indigo-50">
                        <Link
                          to={subItem.href}
                          className="block w-full py-3 px-4 text-left hover:text-indigo-700 transition-all"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* yaha section use hua hai  */}
        <section className="dark:bg-gray-900 min-h-[200px] flex items-center justify-center flex-col px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
              Connecting Mentors and Mentees{" "}
              <span className="text-indigo-600"></span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              magnam dicta dolorem architecto? Placeat obcaecati sed commodi
              minima, eum deserunt!
            </p>
            {showProfileSymbol || showDashboardSymbol ? null : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/sign-up-student">
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x "
                  >
                    <span>Sign up for free</span>
                  </HoverBorderGradient>
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className=" bg-gray-700">
          <div className=" text-center">
            <Main_page_carousal />
          </div>
        </section>

        {/* ye link chatbot ke liye hai  */}
        <Link
          to="/chat-bot"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-pulse hover:animate-none"
        >
          <span className="mr-2 group-hover:mr-3 transition-all">💬</span>
          <span className="hidden group-hover:inline transition-all">
            AI Assistant
          </span>
        </Link>
      </div>
    </>
  );
}

const features = [
  {
    title: "Smart Calendar Booking",
    description: "AI finds the best meeting times.",
  },
  {
    title: "",
    description: "Auto-transcriptions & key points.",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];
