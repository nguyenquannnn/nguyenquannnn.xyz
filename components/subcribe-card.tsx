import { useRef, FormEvent } from "react";

const SubcribeCard = () => {
  const emailInput = useRef(null);
  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    const result = await fetch("/api/email/subscribe", {
      method: "POST",
      mode: "same-origin",
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email: emailInput.current.value }),
    });
    console.log(JSON.stringify({ email: emailInput.current.value }))
    console.log(result)
  
  };
  return (
    <div
      className="w-full max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 m-4 transition-all hover:p-10 hover:border-t-4 border-primary duration-700 delay-75"
      onMouseOut={() => emailInput.current.blur()}
    >
      <form onSubmit={subscribe}>
        <h4 className="text-lg font-bold my-1">Interested in learning more?</h4>
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
          {/* <button
            className="font-bold flex-shrink-0 border-transparent border-0 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
            type="button"
            >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SubcribeCard;
