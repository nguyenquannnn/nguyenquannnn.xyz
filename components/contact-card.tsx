const ContactCard = () => {
    return (
      <form className="w-full mx-auto max-w-sm bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="font-bold">
          Interested in learning more? Enter your email to receive notification
          for new content!
        </div>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button
            className="font-bold flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
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
    );
  };
  
export default ContactCard;