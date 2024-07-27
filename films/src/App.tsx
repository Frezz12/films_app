import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './components/Pages/HomePage'
import { SettingsPage } from './components/Pages/SettingsPage'
import { ArchivePage } from './components/Pages/ArchivePage'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    <Navigation />
    </BrowserRouter>
  )
}

export default App
