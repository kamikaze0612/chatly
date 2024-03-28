import React from "react";

import AuthForm from "./components/AuthForm";
import Image from "next/image";

const Homepage: React.FC = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-neutral-100">
      <div className="relative flex flex-col items-center justify-center gap-2 sm:w-full sm:max-w-md">
        <Image
          width={100}
          height={100}
          src="/images/logo.png"
          alt="Logo"
          priority
        />
        <h1 className="text-3xl font-bold text-neutral-800">
          Sign in to your account
        </h1>
      </div>
      <AuthForm />
    </section>
  );
};

export default Homepage;
