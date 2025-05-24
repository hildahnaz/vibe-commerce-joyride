
import React from 'react';
import { Sparkles, TrendingUp, Star } from 'lucide-react';

const ProfitCelebration = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="relative">
        {/* Confetti Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
          ))}
        </div>

        {/* Main Celebration Card */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-8 rounded-3xl text-white text-center animate-profit-celebration shadow-2xl">
          <TrendingUp className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h2 className="text-3xl font-bold mb-2">🎉 Profit Milestone! 🎉</h2>
          <p className="text-xl opacity-90 mb-4">
            You're absolutely crushing it!
          </p>
          <div className="flex justify-center gap-2">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-medium">Keep the momentum going!</span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCelebration;
