import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🕸️": "Spider Web",
  "🙊": "Speak-No-Evil Monkey",
  "🐼": "Panda",
  "🐧": "Penguin",
  "🐞": "Lady Beetle",
  "☀️": "Sun",
  "🌵": "Cactus"
};

var emojiArray = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("not in database");
    }
  }
  function spanClickHandler(item) {
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Animal & Nature Emoji Interpreter</h1>
      <input
        placeholder="Enter your emoji here"
        onChange={inputChangeHandler}
      ></input>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      <div className="list-emoji">
        {emojiArray.map((item) => {
          return (
            <span
              onClick={() => spanClickHandler(item)}
              style={{
                padding: "1rem 0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
