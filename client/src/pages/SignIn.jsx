import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export const SignIn = () => {
  return (
    <div className="mt-20 min-h-screen">
      <div className="flex p-3 max-w-3xl mx-auto gap-5 flex-col md:flex-row md:items-center">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold">
            <span className="px-2 py-1 rounded bg-gradient-to-r from-indigo-600 via-purple-600 text-white to-pink-600">
              MCN
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex gap-4 flex-col">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-5 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
