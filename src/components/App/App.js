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


  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <div class="score-container">
        <h2>Score: <span>{score}</span></h2>
        <Button variant="info" type="submit" onClick={() => setScore(score + 1)}>Add Points to Score</Button>
        <Button variant="warning" type="submit" onClick={() => setScore(score - 1)}>Subtract Points from Score</Button>
      </div>

      <div class="card border-primary mb-3">
        <div class="card-body text-primary">
          <h2 class="card-title">Let's Play!</h2>
          <Button type="submit" onClick={handleSubmit}>Get Random Trivia Question</Button>

          {questions.map(question => {
            return (
              <QuestionInfo question={question} />
            )
          })}
        </div>
      </div>



    </div>
  );
}

export default App;
