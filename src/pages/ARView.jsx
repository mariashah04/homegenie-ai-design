import React from "react";
import { Eye } from "lucide-react";
import Sidebar from "../components/Layout/Sidebar";

const ARView = ({
  currentPath,
  onNavigate,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
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
        <div className="p-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">
            Augmented Reality View
          </h1>

          <div className="bg-white rounded-xl shadow-md p-8 border border-purple-100">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <Eye className="mx-auto mb-4 text-purple-600" size={80} />
                <p className="text-xl font-semibold text-purple-900">
                  AR Camera View
                </p>
                <p className="text-purple-700 mt-2">
                  Point your camera to see designs in your space
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md">
                Start AR Session
              </button>
              <button className="bg-purple-100 text-purple-900 py-3 rounded-lg font-semibold hover:bg-purple-200 transition">
                Upload Room Photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARView;
