import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => (
    
  <div className="min-h-screen flex bg-[#f3f4f6] w-10/12 mx-auto">
    {/* Sidebar */}
    <aside className="w-64 bg-[#232B3A] text-white p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <NavLink to="/dashboard" end className="mb-2">Overview</NavLink>
      <NavLink to="/dashboard/all-groups" className="mb-2">All Groups</NavLink>
      <NavLink to="/dashboard/create-group" className="mb-2">Create Group</NavLink>
      <NavLink to="/dashboard/my-groups" className="mb-2">My Groups</NavLink>
    </aside>
    {/* Main Content */}
    <main className="flex-1 p-8">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;