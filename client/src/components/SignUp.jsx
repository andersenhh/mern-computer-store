import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";


const SignUp = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("error");

  //navigate after signup
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

//signup function
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Sign Up sucessfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        alert("Minimum 6 Length password required!/Email has been used");
        // ..
      });
  };

  //signup with google 
  const handleRegister = () => {
    loginwithGoogle().then((result) => {
        const user = result.user;
        alert("Sign Up sucessfully!");
        navigate(from, { replace: true });
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        alert("Email has been used");
        // ..
      });
  }
  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
src  = "https://img.freepik.com/free-photo/businessman-holding-pen-signs-important-contract-document-generated-by-ai_188544-41035.jpg?t=st=1701957061~exp=1701960661~hmac=ded2acb8c378ec4d7a485b7c238fd4f7f5413d24d3a64ddd7d7b65f6e07a6998&w=1380"
alt=""
          class="w-full h-full object-cover"
        />
      </div>

      <div
        class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
      >
        <div class="w-full h-100">
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
            Sign Up, Make Your Account
          </h1>

          <form class="mt-6" action="#" onSubmit={handleSignUp}>
            <div>
              <label class="block text-gray-700">Email Address</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Email Address"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-4">
              <label class="block text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Sign Up
            </button>
          </form>

          <hr class="my-6 border-gray-300 w-full" />

          <button
            onClick={handleRegister}
            class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div class="flex items-center justify-center">
              <img src={googleLogo} alt="" className="w-12 h-12 inline-block" />
              <span class="ml-4">Log in with Google</span>
            </div>
          </button>
          <p class="mt-8">
            Have an account?{" "}
            <a
              href="/login"
              class="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login Account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
