import api from "../services/api";
import {
  createContext,
  useEffect,
  useState,
} from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  // FETCH HABITS FROM LARAVEL
  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const response = await api.get("/habits");

      setHabits(response.data);
    } catch (error) {
      console.error(
        "Error fetching habits:",
        error
      );
    }
  };

  // ADD HABIT TO DATABASE
  const addHabit = async (title) => {
    try {
      const response = await api.post("/habits", {
        title,
        description: "",
      });

      setHabits([
        ...habits,
        response.data,
      ]);
    } catch (error) {
      console.error(
        "Error adding habit:",
        error
      );
    }
  };

  // DELETE HABIT
  const deleteHabit = async (id) => {
    try {
      await api.delete(`/habits/${id}`);

      setHabits(
        habits.filter(
          (habit) => habit.id !== id
        )
      );
    } catch (error) {
      console.error(
        "Error deleting habit:",
        error
      );
    }
  };

  const resetHabits = async () => {
  try {
    for (const habit of habits) {
      await api.delete(`/habits/${habit.id}`);
    }

    setHabits([]);

  } catch (error) {
    console.error(
      "Error resetting habits:",
      error
    );
  }
};

  // TEMPORARY TOGGLE (Frontend Only For Now)
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completed: !habit.completed,
            }
          : habit
      )
    );
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        toggleHabit,
        resetHabits,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};