function HabitCard({
  habit,
  toggleHabit,
  deleteHabit,
}) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          {habit.title}
        </h2>

        <button
          onClick={() =>
            deleteHabit(habit.id)
          }
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>

      </div>

      <p className="mb-4 text-gray-500">
        {habit.completed
          ? "Completed Today"
          : "Not Completed"}
      </p>

      <button
        onClick={() =>
          toggleHabit(habit.id)
        }
        className={`px-4 py-2 rounded-xl text-white ${
          habit.completed
            ? "bg-green-500"
            : "bg-gray-800"
        }`}
      >
        {habit.completed
          ? "Completed"
          : "Mark Complete"}
      </button>

    </div>
  );
}

export default HabitCard;