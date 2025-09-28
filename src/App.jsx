import React, { useState } from 'react';
import { Home, User, Settings, LogOut, Upload, Eye, Wand2, Sparkles, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const App = () => {
  const [page, setPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState({
    style: 'modern',
    budget: 'medium',
    rooms: '3'
  });
  const [designOptions, setDesignOptions] = useState([]);

  const handleAuth = () => {
    setIsLoggedIn(true);
    setPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('landing');
    setEmail('');
    setPassword('');
    setName('');
  };

  const generateDesigns = () => {
    const designs = [
      { id: 1, name: 'Modern Minimalist', style: 'Clean lines, neutral tones', img: '🏠' },
      { id: 2, name: 'Cozy Contemporary', style: 'Warm colors, comfortable', img: '🏡' },
      { id: 3, name: 'Industrial Chic', style: 'Exposed brick, metal accents', img: '🏢' }
    ];
    setDesignOptions(designs);
  };

  const Sidebar = () => (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-purple-200 transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 shadow-lg z-50`}>
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
          {sidebarOpen ? <ChevronLeft size={20} className="text-purple-600" /> : <ChevronRight size={20} className="text-purple-600" />}
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => setPage('dashboard')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${page === 'dashboard' ? 'bg-purple-100 text-purple-900' : 'text-purple-700 hover:bg-purple-50'}`}
        >
          <Home size={22} />
          {sidebarOpen && <span className="font-medium">Dashboard</span>}
        </button>
        
        <button
          onClick={() => setPage('preferences')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${page === 'preferences' ? 'bg-purple-100 text-purple-900' : 'text-purple-700 hover:bg-purple-50'}`}
        >
          <Settings size={22} />
          {sidebarOpen && <span className="font-medium">Preferences</span>}
        </button>
        
        <button
          onClick={() => setPage('designs')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${page === 'designs' ? 'bg-purple-100 text-purple-900' : 'text-purple-700 hover:bg-purple-50'}`}
        >
          <Wand2 size={22} />
          {sidebarOpen && <span className="font-medium">My Designs</span>}
        </button>
        
        <button
          onClick={() => setPage('ar')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${page === 'ar' ? 'bg-purple-100 text-purple-900' : 'text-purple-700 hover:bg-purple-50'}`}
        >
          <Eye size={22} />
          {sidebarOpen && <span className="font-medium">AR View</span>}
        </button>
      </nav>
      
      <div className="p-4 border-t border-purple-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={22} />
          {sidebarOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
      <nav className="p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="text-purple-600" size={32} />
          <span className="text-purple-900 text-2xl font-bold">HomeGenie</span>
        </div>
        <button
          onClick={() => setPage('login')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
        >
          Get Started
        </button>
      </nav>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-purple-900">AI-Enhanced Home Design with Augmented Reality</h1>
          <p className="text-xl mb-12 text-purple-700">Transform your space with intelligent design suggestions and immersive AR visualization</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Wand2 className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">AI-Powered Design</h3>
              <p className="text-sm text-purple-700">Personalized suggestions based on your preferences</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Eye className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">AR Visualization</h3>
              <p className="text-sm text-purple-700">See designs in your actual space</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <Sparkles className="mx-auto mb-4 text-purple-600" size={40} />
              <h3 className="text-lg font-semibold mb-2 text-purple-900">3D Preview</h3>
              <p className="text-sm text-purple-700">Interactive realistic previews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto mb-4 text-purple-600" size={48} />
          <h2 className="text-3xl font-bold text-purple-900">Welcome Back</h2>
          <p className="text-purple-700 mt-2">Sign in to continue designing</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleAuth}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Sign In
          </button>
        </div>
        
        <p className="text-center mt-6 text-purple-700">
          Don't have an account?{' '}
          <button onClick={() => setPage('signup')} className="text-purple-600 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );

  const SignupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto mb-4 text-purple-600" size={48} />
          <h2 className="text-3xl font-bold text-purple-900">Create Account</h2>
          <p className="text-purple-700 mt-2">Start your design journey</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-900 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <button
            onClick={handleAuth}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
          >
            Create Account
          </button>
        </div>
        
        <p className="text-center mt-6 text-purple-700">
          Already have an account?{' '}
          <button onClick={() => setPage('login')} className="text-purple-600 font-semibold hover:underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">Welcome to Your Design Studio</h1>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full" onClick={() => setPage('preferences')}>
              <div className="flex items-center gap-6">
                <Settings className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Set Preferences</h3>
                  <p className="text-purple-700 text-lg">Tell us about your style, budget, and room requirements to get personalized design suggestions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full" onClick={() => setPage('designs')}>
              <div className="flex items-center gap-6">
                <Wand2 className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Generate Designs</h3>
                  <p className="text-purple-700 text-lg">Get AI-powered personalized design suggestions based on your unique preferences and space</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer border border-purple-100 w-full" onClick={() => setPage('ar')}>
              <div className="flex items-center gap-6">
                <Eye className="text-purple-600 flex-shrink-0" size={48} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">View in AR</h3>
                  <p className="text-purple-700 text-lg">See your chosen designs overlaid in your actual space using augmented reality technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PreferencesPage = () => (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-8 max-w-3xl">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">Your Design Preferences</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6 border border-purple-100">
            <div>
              <label className="block text-sm font-medium text-purple-900 mb-3">Design Style</label>
              <select
                value={preferences.style}
                onChange={(e) => setPreferences({...preferences, style: e.target.value})}
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
              <label className="block text-sm font-medium text-purple-900 mb-3">Budget Range</label>
              <select
                value={preferences.budget}
                onChange={(e) => setPreferences({...preferences, budget: e.target.value})}
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="low">Budget-Friendly</option>
                <option value="medium">Moderate</option>
                <option value="high">Premium</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-purple-900 mb-3">Number of Rooms</label>
              <input
                type="number"
                value={preferences.rooms}
                onChange={(e) => setPreferences({...preferences, rooms: e.target.value})}
                className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                min="1"
              />
            </div>
            
            <button
              onClick={() => setPage('designs')}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-md"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const DesignsPage = () => (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">Your Design Options</h1>
          
          {designOptions.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center border border-purple-100">
              <Wand2 className="mx-auto mb-6 text-purple-600" size={60} />
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Generate Your Designs</h3>
              <p className="text-purple-700 mb-8">Click below to get AI-powered design suggestions based on your preferences</p>
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
                <div key={design.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-purple-100">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-6xl">
                    {design.img}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{design.name}</h3>
                    <p className="text-purple-700 mb-4">{design.style}</p>
                    <button
                      onClick={() => setPage('ar')}
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

  const ARViewPage = () => (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar />
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-8">Augmented Reality View</h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 border border-purple-100">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg h-96 flex items-center justify-center mb-6">
              <div className="text-center">
                <Eye className="mx-auto mb-4 text-purple-600" size={80} />
                <p className="text-xl font-semibold text-purple-900">AR Camera View</p>
                <p className="text-purple-700 mt-2">Point your camera to see designs in your space</p>
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

  return (
    <div>
      {!isLoggedIn && page === 'landing' && <LandingPage />}
      {!isLoggedIn && page === 'login' && <LoginPage />}
      {!isLoggedIn && page === 'signup' && <SignupPage />}
      {isLoggedIn && page === 'dashboard' && <Dashboard />}
      {isLoggedIn && page === 'preferences' && <PreferencesPage />}
      {isLoggedIn && page === 'designs' && <DesignsPage />}
      {isLoggedIn && page === 'ar' && <ARViewPage />}
    </div>
  );
};

export default App;