import { useState } from "react";


const url = 'http://127.0.0.1:5000/api'

function getFunction(data) {
  try {
    var response = fetch(url, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    })
    .then(response => {
      // put into questions
    })
  }catch (error) {
    console.error("An error occurred: ", error);
  }
};

function ChatBot() {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault()
    getFunction(text);
    console.log(text);
  };

  const questions = [
    "How many cats are there",
    "How many dogs are there",
    "Whats one plus two",
  ];

  return (
    <>
      <div className="flex justify-center	">
        <div>
          <form>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                CV:
              </label>

              <textarea
                rows="6"
                className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500"
                placeholder="Enter User CV"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleClick}
                type="submit"
                className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"
              >
                Run
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  id="send"
                  fill="#fff"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="ml-5">
          <h1>Questions</h1>
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChatBot;

  );
}

export default ChatBot;
