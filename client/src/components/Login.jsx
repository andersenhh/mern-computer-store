import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  //navigate after signup
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //signup function
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Login successfully!");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  //signup with google
  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign Up sucessfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        alert("Email has been used");
        // ..
      });
  };
  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Log in to your account
          </h1>

          <form class="mt-6" action="#" onSubmit={handleLogin}>
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

            {/* <div class="text-right mt-2">
              <a
                href="#"
                class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </a>
            </div> */}
            {error ? (
              <p className="text-red-600">Email or Password is not Correct</p>
            ) : (
              ""
            )}
            <button
              class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
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
            Need an account?{" "}
            <a
              href="/sign-up"
              class="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
