import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/theme'
import Card from './components/card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")

  // Tailwind dark mode control
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
