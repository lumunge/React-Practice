import React, {useState} from 'react';
import Question from './Question';
import data from './data';


function App() {

  const [questions, setQuestions] = useState(data);

  const accordionStyle = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "60%"
  }

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className="App">
      <h1>Accordion With React JS</h1>
      <div style={accordionStyle} className="accordion">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
}

export default App;
