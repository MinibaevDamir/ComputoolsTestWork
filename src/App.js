
import './App.css';
import {BrowserRouter} from "react-router-dom";
import QuizContainer from "./Containers/quizContainer";

function App() {
  return (
        <div className = 'app-wrapper'>
            <QuizContainer/>
        </div>
  );
}

export default App;
