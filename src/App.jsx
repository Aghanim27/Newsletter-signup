import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Success from "./pages/Success";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  return (
    <div className="flex flex-row justify-around border 2xl:mx-20 bg-white rounded-md pl-8 pr-5 py-5 ">
      {isSubmitted ? (
        <Success submittedEmail={submittedEmail} />
      ) : (
        <>
          <Content
            setSubmittedEmail={setSubmittedEmail}
            setIsSubmitted={setIsSubmitted}
          />
        </>
      )}
    </div>
  );
}

export default App;
