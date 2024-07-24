import './App.css';
import { useState } from 'react';

function App() {

  const [background, setBackground] = useState(false);
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleMouseOver () {
    setBackground(true);
  }

  function handleMouseOut () {
    setBackground(false);
  }

  function handleChange (e) {
    setName(e.target.value);
  }

  function handleClick (e) {
    setIsSubmitted(true);
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted && name + ", your form is submitted"}</h1>

      <form onSubmit={handleClick}>
        <input 
          onChange={handleChange}
          type="text" 
          placeholder="What's your name?"
          value={name}
        />

        <button
          type="submit" 
          style={{backgroundColor: background ? "black" : "white"}} 
          onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}> 
            Submit 
        </button>
      </form>

    </div>
  );
}

export default App;
