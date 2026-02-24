import { useState } from 'react';
import { themes } from './themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <div
      style={{
        backgroundColor: currentTheme.colors.background,
        color: currentTheme.colors.text,
      }}
      className="min-h-screen p-6 transition-all duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">Theme Changer App</h1>
        <p className="text-lg mb-8 opacity-75">
          Current Theme: <span className="font-semibold">{currentTheme.name}</span>
        </p>

        {/* Theme Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setCurrentTheme(theme)}
              style={{
                backgroundColor: theme.colors.primary,
              }}
              className="py-3 px-4 text-white font-semibold rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Theme Colors Display */}
        <div
          style={{
            backgroundColor: currentTheme.colors.secondary,
            borderColor: currentTheme.colors.accent,
          }}
          className="p-8 rounded-xl border-2 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6">Theme Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: currentTheme.colors.primary }}
                className="w-16 h-16 rounded-lg mb-2 shadow"
              ></div>
              <p className="text-xs font-semibold text-center">Primary</p>
              <p className="text-xs opacity-75 text-center font-mono">{currentTheme.colors.primary}</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: currentTheme.colors.secondary }}
                className="w-16 h-16 rounded-lg mb-2 shadow"
              ></div>
              <p className="text-xs font-semibold text-center">Secondary</p>
              <p className="text-xs opacity-75 text-center font-mono">{currentTheme.colors.secondary}</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: currentTheme.colors.background }}
                className="w-16 h-16 rounded-lg mb-2 shadow border-2 border-gray-300"
              ></div>
              <p className="text-xs font-semibold text-center">Background</p>
              <p className="text-xs opacity-75 text-center font-mono">{currentTheme.colors.background}</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: currentTheme.colors.text }}
                className="w-16 h-16 rounded-lg mb-2 shadow"
              ></div>
              <p className="text-xs font-semibold text-center">Text</p>
              <p className="text-xs opacity-75 text-center font-mono">{currentTheme.colors.text}</p>
            </div>

            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: currentTheme.colors.accent }}
                className="w-16 h-16 rounded-lg mb-2 shadow"
              ></div>
              <p className="text-xs font-semibold text-center">Accent</p>
              <p className="text-xs opacity-75 text-center font-mono">{currentTheme.colors.accent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;