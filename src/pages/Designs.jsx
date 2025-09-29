import React from "react";
import { Wand2 } from "lucide-react";
import Sidebar from "../components/Layout/Sidebar";

const Designs = ({
  currentPath,
  onNavigate,
  onLogout,
  sidebarOpen,
  setSidebarOpen,
  designOptions,
  generateDesigns,
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
            Your Design Options
          </h1>

          {designOptions.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-purple-100">
              <Wand2 className="mx-auto mb-6 text-purple-600" size={60} />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Generate Your Designs
              </h3>
              <p className="text-purple-700 mb-8">
                Click below to get AI-powered design suggestions
              </p>
              <button
                onClick={generateDesigns}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
              >
                Generate Designs
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {designOptions.map((design) => (
                <div
                  key={design.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-purple-100"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
                    {design.img}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">
                      {design.name}
                    </h3>
                    <p className="text-purple-700 mb-4">{design.style}</p>
                    <button
                      onClick={() => onNavigate("/ar")}
                      className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
                    >
                      View in AR
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Designs;
