import React from "react";
import {
  Home,
  Settings,
  LogOut,
  Eye,
  Wand2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = ({
  currentPath,
  onNavigate,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white border-r border-purple-200 transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 shadow-lg z-50`}
    >
      <div className="p-4 border-b border-purple-200 flex items-center justify-between">
        {sidebarOpen && (
          <div className="flex items-center gap-2">
            <Sparkles className="text-purple-600" size={28} />
            <span className="text-lg font-bold text-purple-900">HomeGenie</span>
          </div>
        )}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-purple-50 rounded-lg transition"
        >
          {sidebarOpen ? (
            <ChevronLeft size={20} className="text-purple-600" />
          ) : (
            <ChevronRight size={20} className="text-purple-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => onNavigate("/dashboard")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPath === "/dashboard"
              ? "bg-purple-100 text-purple-900"
              : "text-purple-700 hover:bg-purple-50"
          }`}
        >
          <Home size={22} />
          {sidebarOpen && <span className="font-medium">Dashboard</span>}
        </button>

        <button
          onClick={() => onNavigate("/preferences")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPath === "/preferences"
              ? "bg-purple-100 text-purple-900"
              : "text-purple-700 hover:bg-purple-50"
          }`}
        >
          <Settings size={22} />
          {sidebarOpen && <span className="font-medium">Preferences</span>}
        </button>

        <button
          onClick={() => onNavigate("/designs")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPath === "/designs"
              ? "bg-purple-100 text-purple-900"
              : "text-purple-700 hover:bg-purple-50"
          }`}
        >
          <Wand2 size={22} />
          {sidebarOpen && <span className="font-medium">My Designs</span>}
        </button>

        <button
          onClick={() => onNavigate("/ar")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            currentPath === "/ar"
              ? "bg-purple-100 text-purple-900"
              : "text-purple-700 hover:bg-purple-50"
          }`}
        >
          <Eye size={22} />
          {sidebarOpen && <span className="font-medium">AR View</span>}
        </button>
      </nav>

      <div className="p-4 border-t border-purple-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={22} />
          {sidebarOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
