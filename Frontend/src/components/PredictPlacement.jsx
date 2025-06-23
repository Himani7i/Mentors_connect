// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [cgpa, setCgpa] = useState("");
//   const [skills, setSkills] = useState([]);
//   const [internship, setInternship] = useState("No");
//   const [result, setResult] = useState("");

//   const skillsList = [
//     "Python", "Java", "C++", "JavaScript", "SQL", "AI", "ML", "FullStack",
//     "DSA", "React", "Tailwind", "Backend", "Frontend", "Express", "Node.js",
//     "Angular", "Vue.js", "Ruby", "Swift", "PHP", "Go", "Rust", "Kotlin",
//     "TypeScript", "MongoDB"
//   ];

//   const handleSkillChange = (skill) => {
//     setSkills(prev =>
//       prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios("http://127.0.0.1:5000/predict-placement", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ cgpa, skills, internship }),
//     });
//     const data = await response.json();
//     setResult(data.placement_chance);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-indigo-600">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-indigo-600 text-center mb-4">
//           Placement Predictor
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="block">
//             <span className="text-indigo-600 font-medium">CGPA:</span>
//             <input
//               type="number"
//               step="0.1"
//               value={cgpa}
//               onChange={(e) => setCgpa(e.target.value)}
//               required
//               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </label>

//           <div>
//             <span className="text-indigo-600 font-medium">Skills:</span>
//             <div className="grid grid-cols-2 gap-2 mt-2">
//               {skillsList.map((skill, idx) => (
//                 <label key={idx} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     value={skill}
//                     checked={skills.includes(skill)}
//                     onChange={() => handleSkillChange(skill)}
//                     className="accent-indigo-600"
//                   />
//                   <span>{skill}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <label className="block">
//             <span className="text-indigo-600 font-medium">Internship:</span>
//             <select
//               value={internship}
//               onChange={(e) => setInternship(e.target.value)}
//               className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             >
//               <option value="Yes">Yes</option>
//               <option value="No">No</option>
//             </select>
//           </label>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
//           >
//             Predict Placement
//           </button>
//         </form>

//         {result && (
//           <div className="mt-4 p-4 bg-indigo-100 text-indigo-700 rounded-md text-center">
//             <h2 className="text-xl font-semibold">Placement Probability:</h2>
//             <p className="text-2xl font-bold">{result}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
