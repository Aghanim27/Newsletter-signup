import { useState } from "react";
import "./input.css";

function Input({ setIsSubmitted, setSubmittedEmail }) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleMailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidEmail(email)) {
      setEmail("");
      setIsSubmitted(true);
      setSubmittedEmail(email);
    } else {
      setErrorMessage("Valid email required");
    }
  };

  const isValidEmail = (input) => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-5 xl:mt-12">
        <label className="font-semibold lg:text-sm">Email address</label>
        <input
          type="text"
          value={email}
          onChange={handleMailChange}
          placeholder="email@company.com"
          className="w-72 h-10 rounded-lg border border-gray-350 pl-3 mt-2 lg:text-sm"
        />
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button className="w-72 h-10 rounded-lg mt-3 bg-gray-800 text-white px-7 btn lg:text-sm">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Input;
