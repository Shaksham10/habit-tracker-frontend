// import Sidebar from "../components/Sidebar";

// function Analytics() {
//   return (
//     <div className="flex bg-[#f5f7fb] min-h-screen">
//       <Sidebar />

//       <div className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-800">
//               Analytics
//             </h1>

//             <p className="text-gray-500 mt-2">
//               Track your progress and productivity
//             </p>
//           </div>

//           <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
//             Export Report
//           </button>
//         </div>

//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-gray-500 mb-3">
//               Weekly Completion
//             </h2>

//             <p className="text-4xl font-bold text-indigo-600">
//               78%
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-gray-500 mb-3">
//               Best Streak
//             </h2>

//             <p className="text-4xl font-bold text-orange-500">
//               24 🔥
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-gray-500 mb-3">
//               Total Habits
//             </h2>

//             <p className="text-4xl font-bold text-green-500">
//               12
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-gray-500 mb-3">
//               Productivity Score
//             </h2>

//             <p className="text-4xl font-bold text-pink-500">
//               89%
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl shadow p-6 h-[350px]">
//             <h2 className="text-2xl font-bold mb-6">
//               Weekly Performance
//             </h2>

//             <div className="flex items-end gap-5 h-[220px]">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-32 rounded-t-xl"></div>
//                 <span>Mon</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-44 rounded-t-xl"></div>
//                 <span>Tue</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-24 rounded-t-xl"></div>
//                 <span>Wed</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-52 rounded-t-xl"></div>
//                 <span>Thu</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-36 rounded-t-xl"></div>
//                 <span>Fri</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-48 rounded-t-xl"></div>
//                 <span>Sat</span>
//               </div>

//               <div className="flex flex-col items-center gap-2">
//                 <div className="bg-indigo-500 w-10 h-28 rounded-t-xl"></div>
//                 <span>Sun</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow p-6">
//             <h2 className="text-2xl font-bold mb-6">
//               Habit Progress
//             </h2>

//             <div className="space-y-6">
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span>Exercise</span>
//                   <span>90%</span>
//                 </div>

//                 <div className="bg-gray-200 h-3 rounded-full">
//                   <div className="bg-green-500 h-3 rounded-full w-[90%]"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span>Reading</span>
//                   <span>65%</span>
//                 </div>

//                 <div className="bg-gray-200 h-3 rounded-full">
//                   <div className="bg-indigo-500 h-3 rounded-full w-[65%]"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span>Meditation</span>
//                   <span>80%</span>
//                 </div>

//                 <div className="bg-gray-200 h-3 rounded-full">
//                   <div className="bg-orange-500 h-3 rounded-full w-[80%]"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span>Diet</span>
//                   <span>50%</span>
//                 </div>

//                 <div className="bg-gray-200 h-3 rounded-full">
//                   <div className="bg-pink-500 h-3 rounded-full w-[50%]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Analytics;

import {
  useContext,
} from "react";

import Sidebar from "../components/Sidebar";

import { HabitContext } from "../context/HabitContext";

function Analytics() {

  const { habits } =
    useContext(HabitContext);

  const totalHabits =
    habits.length;

  const completedHabits =
    habits.filter(
      (habit) => habit.completed
    ).length;

  const completionRate =
    totalHabits > 0
      ? Math.round(
          (completedHabits /
            totalHabits) *
            100
        )
      : 0;

  // TEMPORARY STREAK LOGIC
  const totalStreak =
    completedHabits * 1;

  // TEMPORARY WEEKLY DATA
  const weeklyData = [
    { day: "Mon", value: 70 },
    { day: "Tue", value: 90 },
    { day: "Wed", value: 50 },
    { day: "Thu", value: 100 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 85 },
    { day: "Sun", value: 40 },
  ];

  return (
    <div className="flex bg-[#f5f7fb] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Analytics
          </h1>

          <p className="text-gray-500 mt-2">
            Track your habit progress
          </p>

        </div>

        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-gray-500 mb-3">
              Total Habits
            </h2>

            <p className="text-4xl font-bold text-indigo-600">
              {totalHabits}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-gray-500 mb-3">
              Completed
            </h2>

            <p className="text-4xl font-bold text-green-500">
              {completedHabits}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-gray-500 mb-3">
              Total Streak
            </h2>

            <p className="text-4xl font-bold text-orange-500">
              🔥 {totalStreak}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-gray-500 mb-3">
              Completion Rate
            </h2>

            <p className="text-4xl font-bold text-pink-500">
              {completionRate}%
            </p>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* WEEKLY PRODUCTIVITY */}
          <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-2xl font-bold mb-8">
              Weekly Productivity
            </h2>

            <div className="flex items-end justify-between h-[300px]">

              {weeklyData.map((item) => (

                <div
                  key={item.day}
                  className="flex flex-col items-center gap-3"
                >

                  <div
                    className="bg-indigo-500 w-12 rounded-t-xl transition-all"
                    style={{
                      height: `${item.value * 2}px`,
                    }}
                  ></div>

                  <span className="text-gray-600">
                    {item.day}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* HABIT PROGRESS */}
          <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Habit Progress
            </h2>

            {habits.length === 0 ? (

              <p className="text-gray-500">
                No habits available.
              </p>

            ) : (

              <div className="space-y-6">

                {habits.map((habit) => (

                  <div key={habit.id}>

                    <div className="flex justify-between mb-2">

                      <span>
                        {habit.title}
                      </span>

                      <span>
                        {habit.completed
                          ? "100%"
                          : "0%"}
                      </span>

                    </div>

                    <div className="bg-gray-200 h-3 rounded-full">

                      <div
                        className={`h-3 rounded-full ${
                          habit.completed
                            ? "bg-green-500 w-full"
                            : "bg-gray-400 w-0"
                        }`}
                      ></div>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;