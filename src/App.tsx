import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
