"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";

import { signInSchema } from "./form.constants";
import { formProps } from "./form.types";
import { Input } from "@/components/commons/Input/input.component";
import { useLoginForm } from "./form.hook";

export const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(signInSchema),
  });

  const { actions, states } = useLoginForm();

  const renderPasswordInput = () => {
    return (
      <div className="relative">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Senha"
              type={states.showPassword ? "text" : "password"}
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.password?.message}
              isInvalid={!!errors.password}
            />
          )}
        />

        <div
          className="absolute right-0 top-6 px-4 border-none bg-transparent cursor-pointer"
          onClick={actions.handleShowPassword}
        >
          {states.showPassword ? (
            <EyeOff color="#7C7C8A" />
          ) : (
            <Eye color="#7C7C8A" />
          )}
        </div>
      </div>
    );
  };

  return (
    <form className="flex flex-col gap-4 w-3/4 mt-4 item-center">
      <h1 className="text-gray-900 font-semibold text-lg mb-6 text-center">
        Entrar na sua conta
      </h1>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Email"
            type="text"
            value={field.value}
            onChange={field.onChange}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
          />
        )}
      />
      {renderPasswordInput()}
    </form>
  );
};
