import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

/**
 * The main App component that renders the password generator interface.
 */
function App() {
  // State variables to keep track of the password length, number and character allowance, and the generated password.
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  /**
   * Generates a random password based on the current settings.
   *
   * This function uses the state variables `length`, `numberAllowed`, and `charAllowed`
   * to determine the characters that can be included in the generated password.
   *
   * The generated password is stored in the `password` state variable.
   * ---------------------------------------------------------------------
   * The useCallback hook is a React hook that returns a memoized version of the callback function that only changes 
   * if one of the dependencies has changed. 
   * This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

   * In this specific case, the passwordGenerator function is memoized using useCallback with dependencies 
  [length, numberAllowed, charAllowed]. 
   * This means that the passwordGenerator function will only be recreated if any of these dependencies change. 
   * This can help optimize performance by preventing unnecessary re-renders of child components that use this function as a callback.
   * By using useCallback, the passwordGenerator function will only be recreated when any of the dependencies 
   (length, numberAllowed, charAllowed) change, which can help optimize performance in certain scenarios.
   */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*[]_-{}+=";

    // Generate a random character from the string for the password.
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  /**
   * useEffect hook that calls the passwordGenerator function when the component mounts
   * or when any of the dependencies change.
   */
  useEffect(() => {
    // Call the passwordGenerator function to generate a new password.
    // This is done whenever the length, numberAllowed, charAllowed, or passwordGenerator changes.
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  /**
   * Ref to the password input element. Used to select the password.
   */
  const passwordRef = useRef(null);

  /**
   * The reference to the password input element.
   * This is used to select and copy the password.
   * @type {React.RefObject<HTMLInputElement>}
   *
   *
   * The useCallback hook is used to memoize the function so it will not be recreated unnecessarily.
   * The passwordRef is used to reference the input element where the password is displayed.
   * The password is selected before copying to the clipboard so that the entire password is copied,
   * not just a part of it.
   * The window.navigator.clipboard.writeText() function is used to copy the password to the clipboard.
   * The callback function depends on the password variable, so it will be recreated whenever the password changes.
   */
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();

    // for different ranges you can use the below function but make sure you use passwordRef.current?.select(); before using it.
    /* passwordRef.current?.setSelectionRange(0, 3);*/

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 py-8 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        {/* The password input field. The ref is used to reference the input element and is used in the copyPasswordToClipBoard function. */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Reference to the input element for the password
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            {/* Input field to adjust the password length */}
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            {/* Display the current password length */}
            <label>Length:{length}</label>
          </div>
          {/* Checkboxes to enable/disable number and character allowance */}
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Number</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
