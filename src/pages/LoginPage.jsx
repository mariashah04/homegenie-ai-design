import React from "react";
import { Sparkles } from "lucide-react";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  onAuth,
  onNavigate,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto mb-4 text-purple-600" size={48} />
          <h2 className="text-3xl font-bold text-purple-900">Welcome Back</h2>
          <p className="text-purple-700 mt-2">Sign in to continue designing</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={onAuth}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Sign In
          </button>
        </div>

        <p className="text-center mt-6 text-purple-700">
          Don't have an account?{" "}
          <button
            onClick={() => onNavigate("/signup")}
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
