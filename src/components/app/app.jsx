import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/login';
import ExitPage from '../../pages/exit';
import ChatPage from '../../pages/chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/exit" element={<ExitPage />} />
    </Routes>
  )
}

export default App;
