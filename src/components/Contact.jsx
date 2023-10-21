import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1250px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send as a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by...</p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
          src="https://plus.unsplash.com/premium_photo-1675359655401-27e0b11bef70?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="plane"
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2 rounded"
              type="text"
              placeholder="First"
            />
            <input
              className="border m-2 p-2 rounded"
              type="text"
              placeholder="Last"
            />
            <input
              className="border m-2 p-2 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="border m-2 p-2 rounded"
              type="tel"
              placeholder="Phone"
            />
            <input
              className="border col-span-2 p-2 m-2"
              type="text"
              placeholder="Adress"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              cols="30"
              rows="10"
            />
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
