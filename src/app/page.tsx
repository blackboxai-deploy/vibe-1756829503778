"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hello World
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
          Welcome to your new Next.js application
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed">
          This is a simple Hello World page built with Next.js, TypeScript, and Tailwind CSS. 
          Ready to start building something amazing!
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Started</h3>
            <p className="text-gray-600">
              Begin your development journey with this clean foundation.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="text-purple-600 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modern Stack</h3>
            <p className="text-gray-600">
              Built with the latest technologies for optimal performance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-gray-500">
          <p>Powered by Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}