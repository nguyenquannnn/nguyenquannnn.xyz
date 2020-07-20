import { useRef, FormEvent, useState } from "react";
import { useTranslation } from "next-translate";

const SubcribeCard = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const emailInput = useRef(null);
  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetch("/api/email/subscribe", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInput.current.value }),
    });
    let resultJson = await result.json();
    console.log(resultJson);
    if (result.status == 200 && !("error" in resultJson)) {
      setSubscribed(true);
      setError(null);
    } else if ("error" in resultJson) {
      setError(resultJson.error);
    }
  };
  if (!subscribed) {
    return (
      <div
        className="w-full max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 m-4 transition-all hover:p-10 hover:border-t-4 border-primary duration-700 delay-75 hover:cursor-pointer"
        onMouseLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          emailInput.current.blur();
        }}
        onClick={() => emailInput.current.focus()}
      >
        <form onSubmit={subscribe}>
          <h4 className="text-lg font-bold my-1">
            Interested in learning more?
          </h4>
          <p className="text-md my-1">
            Subscribe to get my latest content by email.
          </p>
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Your email"
              aria-label="Email"
              ref={emailInput}
            />
            <button
              className="font-bold flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        {error && (
          <h4 className="text-red-600 font-semibold mt-1">
            ⚠ {t(`error:${error.code}`)}
          </h4>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 m-4 transition-all hover:p-10 hover:border-t-4 border-primary duration-700 delay-75 hover:cursor-pointer flex">
        <div className="inline-flex items-center mx-auto align-middle">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h3 className="mx-3 text-3xl font-bold">
            Thank you!
          </h3>
        </div>
      </div>
    );
  }
};

export default SubcribeCard;
