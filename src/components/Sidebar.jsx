// import {
//   LayoutDashboard,
//   BarChart3,
//   Settings,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gray-900 text-white p-5">
//       <h1 className="text-2xl font-bold mb-10">
//         HabitTracker
//       </h1>

//       <nav className="flex flex-col gap-6">
//         <Link
//           to="/"
//           className="flex items-center gap-3 hover:text-gray-300"
//         >
//           <LayoutDashboard size={20} />
//           <span>Dashboard</span>
//         </Link>

//         <Link
//           to="/analytics"
//           className="flex items-center gap-3 hover:text-gray-300"
//         >
//           <BarChart3 size={20} />
//           <span>Analytics</span>
//         </Link>

//         <Link
//           to="/settings"
//           className="flex items-center gap-3 hover:text-gray-300"
//         >
//           <Settings size={20} />
//           <span>Settings</span>
//         </Link>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
         My Habit Tracker
      </h1>

      <nav className="flex flex-col gap-6">
        <Link to="/">Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;