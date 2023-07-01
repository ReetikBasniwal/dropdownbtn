import { useState, useRef} from 'react';
import './App.css';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import Options from './Options';

function App() {
  
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('Select Option')

  const changeValue = (event) => {
    let val = event.target.textContent;
    setOption(val);
  }

  const handleMouseLeave = () => {
    // Close the dropdown only if the mouse is not moving towards the Options component
    if (!isMovingToOptions.current) {
      setOpen(false);
    }
  };

  const isMovingToOptions = useRef(false);

  return (
    <div className="App">
      <div className="menuDiv" style={styles.menuDiv}>
          <h2 style={{margin: "50px 0 30px 0"}}>Should you use a dropdown?</h2>
            <div style={{height:"auto", width:"55%"}} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <div id="btnDiv">
                  <p>{option}</p>
                  {
                    open ? ( <span>
                              <i id="icon">
                                < BiSolidDownArrow />
                              </i></span> )
                            : 
                            ( <span>
                                <i id="icon">
                                  < BiSolidUpArrow onMouseEnter={() => setOpen(true)} onMouseLeave={handleMouseLeave}/>
                                </i>
                              </span> 
                            )
                  }
              </div>
            
              { open && 
                  <Options change={changeValue} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}/>
              }
            </div>
      </div>
    </div>
  );
}


const styles = {
  menuDiv:{
    height: "50vh",
    width: "40%",
    color: "rgb(98, 98, 98)",
    margin: "auto",
    marginTop: "100px",
    backgroundColor: "aqua",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "inset 0 -3em 3em rgba(204, 204, 204, 0.1), 0 0 0 0.5px rgb(255, 255, 255), 0.3em 0.3em 1em rgb(194, 194, 194)",
  },
}

export default App;
