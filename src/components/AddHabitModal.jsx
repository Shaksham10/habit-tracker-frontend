import {
  useContext,
  useState,
} from "react";

import { HabitContext } from "../context/HabitContext";

function AddHabitModal({ closeModal }) {
  const { addHabit } = useContext(HabitContext);

  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title) return;

    addHabit(title);

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl w-[400px]">
        <h2 className="text-2xl font-bold mb-5">
          Add Habit
        </h2>

        <input
          type="text"
          placeholder="Habit Name"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-5"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="px-5 py-2 bg-gray-300 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-indigo-600 text-white rounded-xl"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddHabitModal;