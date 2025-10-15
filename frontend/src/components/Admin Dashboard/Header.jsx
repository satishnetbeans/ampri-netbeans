// @ts-nocheck
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-3 sticky top-0 z-10">
      <h2 className="text-xl font-bold text-gray-900">Admin Dashboard</h2>
      <div className="flex items-center gap-4">
        <span className="text-blue-900 text-sm">Welcome, <span className="font-semibold">Admin</span></span>
        <img
          src="https://ui-avatars.com/api/?name=Admin&background=random"
          alt="Admin"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;
