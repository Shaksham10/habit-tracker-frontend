// import Sidebar from "../components/Sidebar";

// function Settings() {
//   return (
//     <div className="flex bg-[#f5f7fb] min-h-screen">
//       <Sidebar />

//       <div className="flex-1 p-8">
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-800">
//             Settings
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Customize your habit tracker experience
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-8">
//           <div className="bg-white rounded-2xl shadow p-8">
//             <h2 className="text-2xl font-bold mb-6">
//               Profile Settings
//             </h2>

//             <div className="space-y-5">
//               <div>
//                 <label className="block mb-2 text-gray-600">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="John Doe"
//                   className="w-full border p-4 rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-gray-600">
//                   Email
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="john@example.com"
//                   className="w-full border p-4 rounded-xl"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 text-gray-600">
//                   Daily Goal
//                 </label>

//                 <input
//                   type="number"
//                   placeholder="5 habits"
//                   className="w-full border p-4 rounded-xl"
//                 />
//               </div>

//               <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl mt-4 hover:bg-indigo-700 transition">
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl shadow p-8">
//               <h2 className="text-2xl font-bold mb-6">
//                 Preferences
//               </h2>

//               <div className="space-y-5">
//                 <div className="flex justify-between items-center">
//                   <span>Dark Mode</span>

//                   <div className="w-14 h-7 bg-indigo-500 rounded-full flex items-center px-1">
//                     <div className="bg-white w-5 h-5 rounded-full ml-auto"></div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span>Email Notifications</span>

//                   <div className="w-14 h-7 bg-gray-300 rounded-full flex items-center px-1">
//                     <div className="bg-white w-5 h-5 rounded-full"></div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <span>Reminder Alerts</span>

//                   <div className="w-14 h-7 bg-indigo-500 rounded-full flex items-center px-1">
//                     <div className="bg-white w-5 h-5 rounded-full ml-auto"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow p-8">
//               <h2 className="text-2xl font-bold mb-6 text-red-500">
//                 Danger Zone
//               </h2>

//               <p className="text-gray-500 mb-5">
//                 Permanently delete your account and habits
//               </p>

//               <button className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition">
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;
import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import api from "../services/api";

function Settings() {

  const [settings, setSettings] =
    useState({
      full_name: "",
      email: "",
      daily_goal: 1,
      dark_mode: false,
      email_notifications: false,
      reminder_alerts: true,
    });

  const [loading, setLoading] =
    useState(true);

  // FETCH SETTINGS
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {

      const response =
        await api.get("/settings");

      setSettings(response.data);

      setLoading(false);

    } catch (error) {

      console.error(
        "Error fetching settings:",
        error
      );
    }
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setSettings({
      ...settings,
      [name]: value,
    });
  };

  // HANDLE TOGGLE
  const handleToggle = (field) => {

    setSettings({
      ...settings,
      [field]: !settings[field],
    });
  };

  // SAVE SETTINGS
  const saveSettings = async () => {

    try {

      await api.post(
        "/settings",
        settings
      );

      alert(
        "Settings saved successfully!"
      );

    } catch (error) {

      console.error(
        "Error saving settings:",
        error
      );
    }
  };

  if (loading) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex bg-[#f5f7fb] min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Customize your habit tracker experience
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* PROFILE SETTINGS */}
          <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-2xl font-bold mb-6">
              Profile Settings
            </h2>

            <div className="space-y-5">

              {/* FULL NAME */}
              <div>

                <label className="block mb-2 text-gray-600">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  value={settings.full_name}
                  onChange={handleChange}
                  className="w-full border p-4 rounded-xl"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-2 text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full border p-4 rounded-xl"
                />

              </div>

              {/* DAILY GOAL */}
              <div>

                <label className="block mb-2 text-gray-600">
                  Daily Goal
                </label>

                <input
                  type="number"
                  name="daily_goal"
                  value={settings.daily_goal}
                  onChange={handleChange}
                  className="w-full border p-4 rounded-xl"
                />

              </div>

              <button
                onClick={saveSettings}
                className="bg-indigo-600 text-white px-5 py-3 rounded-xl mt-4 hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>

            </div>
          </div>

          {/* PREFERENCES */}
          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6">
                Preferences
              </h2>

              <div className="space-y-5">

                {/* DARK MODE */}
                <div className="flex justify-between items-center">

                  <span>
                    Dark Mode
                  </span>

                  <button
                    onClick={() =>
                      handleToggle(
                        "dark_mode"
                      )
                    }
                    className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
                      settings.dark_mode
                        ? "bg-indigo-500"
                        : "bg-gray-300"
                    }`}
                  >

                    <div
                      className={`bg-white w-5 h-5 rounded-full transition ${
                        settings.dark_mode
                          ? "ml-auto"
                          : ""
                      }`}
                    ></div>

                  </button>

                </div>

                {/* EMAIL NOTIFICATIONS */}
                <div className="flex justify-between items-center">

                  <span>
                    Email Notifications
                  </span>

                  <button
                    onClick={() =>
                      handleToggle(
                        "email_notifications"
                      )
                    }
                    className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
                      settings.email_notifications
                        ? "bg-indigo-500"
                        : "bg-gray-300"
                    }`}
                  >

                    <div
                      className={`bg-white w-5 h-5 rounded-full transition ${
                        settings.email_notifications
                          ? "ml-auto"
                          : ""
                      }`}
                    ></div>

                  </button>

                </div>

                {/* REMINDER ALERTS */}
                <div className="flex justify-between items-center">

                  <span>
                    Reminder Alerts
                  </span>

                  <button
                    onClick={() =>
                      handleToggle(
                        "reminder_alerts"
                      )
                    }
                    className={`w-14 h-7 rounded-full flex items-center px-1 transition ${
                      settings.reminder_alerts
                        ? "bg-indigo-500"
                        : "bg-gray-300"
                    }`}
                  >

                    <div
                      className={`bg-white w-5 h-5 rounded-full transition ${
                        settings.reminder_alerts
                          ? "ml-auto"
                          : ""
                      }`}
                    ></div>

                  </button>

                </div>

              </div>

            </div>

            {/* DANGER ZONE */}
            <div className="bg-white rounded-2xl shadow p-8">

              <h2 className="text-2xl font-bold mb-6 text-red-500">
                Danger Zone
              </h2>

              <p className="text-gray-500 mb-5">
                Reset your settings and preferences
              </p>

              <button
                className="bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
              >
                Reset Settings
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Settings;