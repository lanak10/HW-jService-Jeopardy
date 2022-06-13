import axios from 'axios'
// Hooks
import { useState } from 'react'
// Components
import QuestionInfo from '../QuestionInfo/QuestionInfo';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Button } from 'react-bootstrap'

function App() {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState('')
  // const [answer, setAnswer] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'http://jservice.io/api/random'
    // console.log(baseUrl + apiKey + query)
    try {
      const response = await axios.get(baseUrl)
      console.log(response.data)
      setQuestions(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  /*   const addPoints = () => {
      let score = 0;
      let count = Number(score.innerHTML);
      score.innerHTML = score += 1;
    } */

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <div class="score-container">
        <h2>Score: </h2>
        <h3 class="score-counter">0</h3>
        <Button variant="info" type="submit" value=".score-counter" onClick={() => setScore(+score + 1)}>Add Points to Score</Button>
        <Button variant="warning" type="submit">Subtract Points from Score</Button>
      </div>
      <h2>Let's Play!</h2>
      <Button type="submit" onClick={handleSubmit}>Get Random Trivia Question</Button>

      {questions.map(question => {
        return (
          <QuestionInfo question={question} />
        )
      })}




    </div>
  );
}

export default App;
