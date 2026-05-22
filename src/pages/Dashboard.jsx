import {
  useContext,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import AddHabitModal from "../components/AddHabitModal";

import { HabitContext } from "../context/HabitContext";

import HabitCard from "../components/HabitCard";
function Dashboard() {
  const {
    habits,
    deleteHabit,
    toggleHabit,
  } = useContext(HabitContext);

  const [showModal, setShowModal] =
    useState(false);

  return (
    
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Let's begin
          </h1>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            + Add Habit
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-5">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">
              Total Habits
            </h2>

            <p className="text-3xl font-bold mt-2">
              {habits.length}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">
              Completed Today
            </h2>

            <p className="text-3xl font-bold mt-2">
              {
                habits.filter(
                  (habit) =>
                    habit.completed
                ).length
              }
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">
              Current Streak
            </h2>

            <p className="text-3xl font-bold mt-2">
              🔥
            </p>
          </div>

        </div>

        {/* HABIT CARDS */}
        {/* HABIT CARDS */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

  {habits.length === 0 ? (

    <div className="col-span-full bg-white p-10 rounded-xl shadow text-center">

      <h2 className="text-2xl font-bold mb-3">
        No Habits Yet
      </h2>

      <p className="text-gray-500">
        Start by adding your first habit.
      </p>

    </div>

  ) : (

    habits.map((habit) => (
      <HabitCard
        key={habit.id}
        habit={habit}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
      />
    ))
  )}
</div>
        {/* MODAL */}
        {showModal && (
          <AddHabitModal
            closeModal={() =>
              setShowModal(false)
            }
          />
        )}

      </div>
    </div>
  );
}

export default Dashboard;