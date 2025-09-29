import React from "react";
import Sidebar from "../components/Sidebar";

const Preferences = ({
  currentPath,
  onNavigate,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
  preferences,
  setPreferences,
}) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar
        currentPath={currentPath}
        onNavigate={onNavigate}
        onLogout={onLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div
        className={`flex-1 ${
          sidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        <div className="p-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">
            Your Design Preferences
          </h1>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-6 border border-purple-100">
            <div>
              <label className="block text-sm font-medium text-purple-900 mb-3">
                Design Style
              </label>
              <select
                value={preferences.style}
                onChange={(e) =>
                  setPreferences({ ...preferences, style: e.target.value })
                }
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="modern">Modern</option>
                <option value="contemporary">Contemporary</option>
                <option value="traditional">Traditional</option>
                <option value="industrial">Industrial</option>
                <option value="minimalist">Minimalist</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-900 mb-3">
                Budget Range
              </label>
              <select
                value={preferences.budget}
                onChange={(e) =>
                  setPreferences({ ...preferences, budget: e.target.value })
                }
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="low">Budget-Friendly</option>
                <option value="medium">Moderate</option>
                <option value="high">Premium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-900 mb-3">
                Number of Rooms
              </label>
              <input
                type="number"
                value={preferences.rooms}
                onChange={(e) =>
                  setPreferences({ ...preferences, rooms: e.target.value })
                }
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                min="1"
              />
            </div>

            <button
              onClick={() => onNavigate("/designs")}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
