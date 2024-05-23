import { useState } from "react";

function UserProfile() {
  const [data, setData] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    alert(data);
  };

  const buttonClickKane = (e) => {
    e.preventDefault();
    setData("hello kane");
  };

  const buttonClickMilton = (e) => {
    e.preventDefault();
    setData("hello Milton");
  };

  return (
    <div className="prfile-container mt-5">
      <div className="flex ">
        <div className="mr-5 border-4">
          <button id="kane" className="py-2 px-4" onClick={buttonClickKane}>
            <h1>Kane</h1>
          </button>
        </div>
        <div className="border-4">
          <button id="milton" className="py-2 px-4" onClick={buttonClickMilton}>
            <h1>Milton</h1>
          </button>
        </div>
      </div>

      <div>
        <h1 className="my-3">Resume</h1>
        <p>{data}</p>
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
      </div>
    </div>
  );
}

export default UserProfile;
