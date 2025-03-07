import React, { useState } from "react";

const TeacherDashboard = ({ username }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const upcomingSessions = [
    {
      id: 1,
      studentName: "Alex Johnson",
      topic: "Web Development",
      time: "10:00 AM",
      date: "Mar 1, 2025",
      duration: "45 min",
    },
    {
      id: 2,
      studentName: "Maya Patel",
      topic: "Data Structures",
      time: "2:30 PM",
      date: "Mar 1, 2025",
      duration: "60 min",
    },
    {
      id: 3,
      studentName: "Sam Wilson",
      topic: "Career Guidance",
      time: "11:15 AM",
      date: "Mar 2, 2025",
      duration: "30 min",
    },
  ];

  const stats = {
    totalSessions: 145,
    totalStudents: 78,
    avgRating: 4.8,
    hoursThisMonth: 42,
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              icon="📹"
              title="Total Sessions"
              value={stats.totalSessions}
            />
            <StatCard
              icon="👥"
              title="Total Students"
              value={stats.totalStudents}
            />
            <StatCard
              icon="🏆"
              title="Average Rating"
              value={stats.avgRating}
            />
            <StatCard
              icon="⏳"
              title="Hours This Month"
              value={stats.hoursThisMonth}
            />
          </div>
        );
      case "calendar":
        return (
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-medium text-lg mb-4">
              Calendar & Availability
            </h3>
            <div className="text-center p-12 border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">
                Calendar integration would be implemented here
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Sync with Calendly, Google Calendar, etc.
              </p>
            </div>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    /* code upload krne ke liye  */
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-16 lg:w-64 bg-blue-800 text-white">
        <div className="p-4 flex items-center justify-center lg:justify-start">
          <h1 className="hidden lg:block text-xl font-bold">MentorConnect</h1>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 py-3">
            <div>
              <h2 className="text-xl font-semibold">Teacher Dashboard</h2>
              <p className="text-sm text-gray-600">Welcome back, {username}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100">
                🔔
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  👤
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4">
          {renderTab()}
          <div className="">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&showPrint=0&src=cmFodWw4MDhkdWJleUBnbWFpbC5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%230B8043"
              width="800"
              height="600"
              className="m-auto"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-2">
        <span>{icon}</span>
        <h3 className="ml-2 font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default TeacherDashboard;
