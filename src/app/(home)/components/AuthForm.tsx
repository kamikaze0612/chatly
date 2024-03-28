"use client";

import Button from "@/components/Button";
import React, { useState } from "react";
import FormRow from "./FormRow";
import AuthSocialButton from "./AuthSocialButton";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm: React.FC = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-8 rounded-lg border border-gray-200 bg-white px-10 py-8 shadow-sm sm:w-full sm:max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {variant === "REGISTER" && (
        <FormRow label="name" id="name">
          <Input
            errors={errors}
            id="name"
            placeholder="John Doe"
            required
            register={register}
            type="text"
          />
        </FormRow>
      )}

      <FormRow label="Email" id="email">
        <Input
          errors={errors}
          id="email"
          placeholder="johndoe@example.com"
          required
          register={register}
          type="email"
        />
      </FormRow>

      <FormRow label="Password" id="password">
        <Input
          errors={errors}
          id="password"
          required
          register={register}
          type="password"
        />
      </FormRow>

      <Button type="submit" fullWidth>
        {variant === "LOGIN" ? "Sign In" : "Sign Up"}
      </Button>

      <div className="relative border-b border-gray-300">
        <span className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-500">
          Or continue with
        </span>
      </div>

      <div className="flex items-center gap-1 text-gray-600">
        <AuthSocialButton icon={FaGoogle} />
        <AuthSocialButton icon={FaGithub} />
      </div>

      <p className="text-center text-sm text-gray-500">
        {variant === "LOGIN" ? "New to Chatly?" : "Already have an account?"}
        <span
          className="ml-2 cursor-pointer underline"
          onClick={() =>
            setVariant((cur) => {
              if (cur === "LOGIN") {
                return "REGISTER";
              }

              return "LOGIN";
            })
          }
        >
          {variant === "LOGIN" ? "Create an account" : "Log In"}
        </span>
      </p>
    </form>
  );
};

export default AuthForm;
