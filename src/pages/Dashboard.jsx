import React from "react";
import { useNavigate } from "react-router-dom";
import { Settings, Eye, Wand2 } from "lucide-react";
import Sidebar from "../components/Layout/Sidebar";

const Dashboard = ({ onLogout, sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar
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
            Welcome to Your Design Studio
          </h1>

          <div className="grid grid-cols-1 gap-6">
            <div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full"
              onClick={() => navigate("/preferences")}
            >
              <div className="flex items-center gap-6">
                <Settings className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Set Preferences
                  </h3>
                  <p className="text-purple-700 text-lg">
                    Tell us about your style, budget, and room requirements
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full"
              onClick={() => navigate("/designs")}
            >
              <div className="flex items-center gap-6">
                <Wand2 className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    Generate Designs
                  </h3>
                  <p className="text-purple-700 text-lg">
                    Get AI-powered personalized design suggestions
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full"
              onClick={() => navigate("/ar")}
            >
              <div className="flex items-center gap-6">
                <Eye className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">
                    View in AR
                  </h3>
                  <p className="text-purple-700 text-lg">
                    See your designs in your actual space using AR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
