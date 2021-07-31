import React from "react";

export default function SignUp() {
  return (
    <div className="bg-white w-full min-h-screen text-dark px-8 font-Mulish">
      <div className="w-full flex items-center justify-start py-8">
        <button className="w-10 border rounded-md border-dark h-10 p-3 flex items-center justify-center text-xl border-opacity-10 outline-none">
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <span className="pl-5 text-2xl font-extrabold">Sign Up</span>
      </div>
      <div className="w-full">
        <span className="text-xs inline-block mb-5 text-gray-700">
          Sign up with one of following options.
        </span>
        <button className="border rounded-lg h-12 bg-white border-dark w-full py-2 flex items-center justify-center outline-none  text-sm border-opacity-10">
          <svg
            className="mr-3"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 22 20"
          >
            <path
              fill="#050507"
              fill-rule="evenodd"
              d="M19.981 10.21c0-.654-.06-1.283-.172-1.886h-8.911v3.566h5.092c-.22 1.152-.886 2.128-1.888 2.782v2.313h3.058c1.79-1.605 2.821-3.968 2.821-6.776z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fill-rule="evenodd"
              d="M10.898 19.219c2.555 0 4.696-.826 6.262-2.234l-3.058-2.313c-.847.553-1.931.88-3.204.88-2.465 0-4.55-1.621-5.295-3.8H2.442v2.388c1.557 3.013 4.757 5.079 8.456 5.079z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fill-rule="evenodd"
              d="M5.603 11.752A5.414 5.414 0 015.307 10c0-.607.107-1.198.296-1.752V5.86H2.442a9.025 9.025 0 000 8.28l3.161-2.388z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#050507"
              fill-rule="evenodd"
              d="M10.898 4.448c1.389 0 2.636.465 3.617 1.378l2.714-2.644c-1.64-1.487-3.78-2.4-6.331-2.4-3.699 0-6.9 2.065-8.456 5.078l3.161 2.388c.744-2.178 2.83-3.8 5.295-3.8z"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          Sign Up with Google
        </button>
      </div>
      <form action="" className="w-full mt-5" autoComplete="off">
        <div className="input-group flex items-start justify-center flex-col my-3 ">
          <label htmlFor="name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Eg : John Doe"
            className="p-3 mt-2 border rounded-lg h-12 bg-white border-dark w-full py-2 flex items-center justify-center outline-none  text-sm border-opacity-10 focus:border-opacity-100 placeholder-dark placeholder-opacity-50 transition transition-duration-600  "
          />
        </div>
        <div className="input-group flex items-start justify-center flex-col my-3 ">
          <label htmlFor="name" className="text-sm">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Eg : john@gmail.com"
            className="p-3 mt-2 border rounded-lg h-12 bg-white border-dark w-full py-2 flex items-center justify-center outline-none  text-sm border-opacity-10 focus:border-opacity-100 placeholder-dark placeholder-opacity-50 transition transition-duration-600  "
          />
        </div>
        <div className="input-group flex items-start justify-center flex-col my-3 ">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="At least 8+ characters"
            className="p-3 mt-2 border rounded-lg h-12 bg-white border-dark w-full py-2 flex items-center justify-center outline-none  text-sm border-opacity-10 focus:border-opacity-100 placeholder-dark placeholder-opacity-50 transition transition-duration-600  "
          />
        </div>
      </form>
      <div className="w-full my-8 flex items-center justify-center ">
        <button className="s-btn w-full h-12 bg-dark text-sm outline-none text-white rounded-lg ">
          Create Account
        </button>
      </div>
      <div className="w-full flex items-center justify-center text-sm text-gray-600">
        <p>
          Already have an account ?{" "}
          <span className="font-bold text-dark ">Log in</span>
        </p>
      </div>
    </div>
  );
}
