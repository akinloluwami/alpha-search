import { useState } from "react";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Topbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
