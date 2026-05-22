function Navbar({ openModal }) {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center rounded-xl">
      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <button
        onClick={openModal}
        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
      >
        Add Habit
      </button>
    </div>
  );
}

export default Navbar;