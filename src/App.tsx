import { Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import QuizPage from "./pages/Quiz/QuizPage";
import ResultPage from "./pages/Result/Result";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
