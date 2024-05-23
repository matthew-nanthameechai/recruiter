function ChatBot() {
  const questions = [
    "How many cats are there",
    "How many dogs are there",
    "Whats one plus two",
  ];

  return (
    <>
      <div className="flex justify-center	">
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
