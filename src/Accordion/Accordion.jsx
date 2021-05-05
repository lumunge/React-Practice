import React, {useState} from 'react';
import data from './accordionData';
import Question from './Question';

export default function Accordion() {
    const[questions] = useState(data);

    const accordionStyle = {
        width: "60%",
        textAlign:"center"
      }

    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className="App">
            <h1 style={{color:"#000"}}>Accordion With React JS</h1>
            <div style={accordionStyle} className="accordion">
            {questions.map((question) => (
            <Question 
                key={question.id} 
                title={question.title} 
                answer={question.answer}  
            />
            ))}
            </div>
        </div>
    )
}
