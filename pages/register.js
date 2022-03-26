import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0C0C0C] py-32">
      <div className="flex flex-col justify-center w-full max-w-lg space-y-8 items-left">
        <h1 className="text-[#E5202B] font-bold text-5xl">
          Create your account
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start justify-start space-y-12">
            <input
              className="w-full px-5 py-3 text-gray-200 bg-gray-800 rounded-sm outline-none text-md"
              type="text"
              placeholder="Enter username..."
            />
            <input
              className="w-full px-5 py-3 text-gray-200 bg-gray-800 rounded-sm outline-none text-md"
              type="email"
              placeholder="Enter email..."
            />
            <input
              className="w-full px-5 py-3 text-gray-200 bg-gray-800 rounded-sm outline-none text-md"
              type="password"
              placeholder="Enter password..."
            />

            <button className="btn">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
