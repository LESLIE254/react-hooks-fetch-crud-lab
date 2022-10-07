import React,{useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz] = useState([])
  const url = "http://localhost:4000/questions"
  console.log(quiz)
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then((data) => setQuiz(data)) 
  },[])

  function handleDelete(id) {
    fetch(`${url}/${id}`, {
      method:"DELETE"
    })
    .then(() => {
    const updatedQuestions = quiz.filter((quizData) => quizData.id !== id)
    setQuiz(updatedQuestions)
    })
    
   
    
  }
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
         {quiz.map((questionData) => <QuestionItem  handleDelete ={handleDelete} key={questionData.id} question={questionData} />)}
      </ul>
    </section>
  );
}

export default QuestionList;
