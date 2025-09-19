import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";


export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
      </div>
    </ThemeProvider>



  )
}