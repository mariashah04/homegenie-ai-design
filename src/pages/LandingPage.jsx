import React from "react";
import { Sparkles, Wand2, Eye } from "lucide-react";

const Landing = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="text-purple-600" size={32} />
          <span className="text-purple-900 text-2xl font-bold">HomeGenie</span>
        </div>
        <button
          onClick={() => onNavigate("/login")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
        >
          Get Started
        </button>
      </nav>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-purple-900">
            AI-Enhanced Home Design with Augmented Reality
          </h1>
          <p className="text-xl mb-12 text-purple-700">
            Transform your space with intelligent design suggestions and
            immersive AR visualization
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Wand2 className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">
                AI-Powered Design
              </h3>
              <p className="text-sm text-purple-700">
                Personalized suggestions based on your preferences
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Eye className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">
                AR Visualization
              </h3>
              <p className="text-sm text-purple-700">
                See designs in your actual space
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Sparkles className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">
                3D Preview
              </h3>
              <p className="text-sm text-purple-700">
                Interactive realistic previews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
