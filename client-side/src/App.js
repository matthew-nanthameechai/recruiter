import "./App.css";
import Header from "./components/header";
import ChatBot from "./components/chatbot";
import UserProfile from "./components/userProfile";
function App() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center	">
        <UserProfile></UserProfile>
        <ChatBot></ChatBot>
      </div>
    </>
  );
}

export default App;
