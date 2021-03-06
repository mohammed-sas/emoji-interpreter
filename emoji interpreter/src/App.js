import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "See-No-Evil Monkey",
  "πΈοΈ": "Spider Web",
  "π": "Speak-No-Evil Monkey",
  "πΌ": "Panda",
  "π§": "Penguin",
  "π": "Lady Beetle",
  "βοΈ": "Sun",
  "π΅": "Cactus",
  "π¨": "Dashing Away",
  "πͺ": "Camel",
  "π": "Elephant",
  "β‘": "High Voltage",
  "βοΈ": "Snowman",
  "π₯": "Fire"
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
