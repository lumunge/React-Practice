import React, {useState} from 'react';

export default function Question({title, answer}) {

    const [show, setAnswer] = useState(false);

    const showAnswer = () => {
        setAnswer(!show);
    }

    const articleStyle = {
        border: "1px solid #333",
        margin: "1rem",
        borderRadius: "10px",
        background:"  #273746  ",
        color: "#fff"
    }

    const h4Style = {
        cursor: "pointer",
        color: " #2ecc71 ",
        padding: "1rem 0"
    }

    return (
        <article style={articleStyle}>
            <h4 
                style={h4Style} 
                onClick={showAnswer}>{title} 
                {show ? 
                    <i 
                        style={{position:"relative", float:"right", paddingRight:"1rem"}} 
                        className="fa fa-chevron-down" aria-hidden="true">
                    </i> 
                :   <i 
                        style={{position:"relative", float:"right", paddingRight:"1rem"}} 
                        className="fa fa-chevron-up" aria-hidden="true">
                    </i>
                }
            </h4>
            {show && 
            <p style={{padding:"10px"}}>{answer}</p>
            }
        </article>
    )
}