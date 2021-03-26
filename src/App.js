
import './App.css';
import {BrowserRouter} from "react-router-dom";
import QuizContainer from "./Containers/quizContainer";

function App() {
  return (
      <BrowserRouter>
        <div className = 'app-wrapper'>
            <QuizContainer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
