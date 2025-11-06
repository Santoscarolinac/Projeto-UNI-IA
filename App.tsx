
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import OnboardingScreen from './components/OnboardingScreen';
import MainScreen from './components/MainScreen';
import CuriositiesScreen from './components/CuriositiesScreen';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);

  useEffect(() => {
    if (currentScreen === Screen.SPLASH) {
      const timer = setTimeout(() => {
        setCurrentScreen(Screen.LOGIN);
      }, 4000); // Splash screen duration
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.LOGIN:
        return <LoginScreen onNavigate={setCurrentScreen} />;
      case Screen.SIGNUP:
        return <SignUpScreen onNavigate={setCurrentScreen} />;
      case Screen.ONBOARDING:
        return <OnboardingScreen onNavigate={setCurrentScreen} />;
      case Screen.MAIN:
        return <MainScreen onNavigate={setCurrentScreen} />;
      case Screen.CURIOSITIES:
        return <CuriositiesScreen onNavigate={setCurrentScreen} />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans">
      {renderScreen()}
    </div>
  );
};

export default App;