import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextUpdater from "./TextUpdater.jsx";
import SimpleForm from "./SimpleForm.jsx";
import UserCard from "./UserCard.jsx";
import CustomButton from "./CustomButton.jsx";
import LoginForm from "./LoginForm.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("textUpdater");

  const renderPage = () => {
    switch (currentPage) {
      case "textUpdater":
        return <TextUpdater />;
      case "simpleForm":
        return <SimpleForm />;
      case "userCard":
        return (
          <UserCard
            name="Yuktika Mishra"
            email="yuktikamishra2022@vitbhopal.ac.in"
          />
        );
      case "customButton":
        return <CustomButton />;
      case "loginForm":
        return <LoginForm />;
      default:
        return <TextUpdater />;
    }
  };

  return (
    <StrictMode>
      <div className="bg-red-100 decoration-black w-full h-screen absolute top-0 left-0">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-5"
          onClick={() => setCurrentPage("textUpdater")}
        >
          TextUpdater
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-5"
          onClick={() => setCurrentPage("simpleForm")}
        >
          SimpleForm
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-5"
          onClick={() => setCurrentPage("userCard")}
        >
          UserCard
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-5"
          onClick={() => setCurrentPage("customButton")}
        >
          CustomButton
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 m-5"
          onClick={() => setCurrentPage("loginForm")}
        >
          LoginForm
        </button>
        {renderPage()}
      </div>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<App />);
