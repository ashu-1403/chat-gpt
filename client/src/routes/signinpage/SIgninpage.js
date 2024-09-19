import React from "react";
import { SignIn } from "@clerk/clerk-react";

const Signinpage = () => {
  return (
    <div className="text-white h-full flex items-center justify-center">
      {" "}
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard/chats/:id"
      />
    </div>
  );
};

export default Signinpage;
