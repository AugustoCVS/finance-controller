"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";

import { signInSchema } from "./form.constants";
import { FormProps, formProps } from "./form.types";
import { useLoginForm } from "./form.hook";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { InputController } from "@/components/commons/InputController/input-controller.component";

export const Form: React.FC<FormProps> = ({ handleShowRegister }) => {
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
      <InputController
        name="password"
        control={control}
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        placeholder="Senha"
        type={states.showPassword ? "text" : "password"}
        onClick={actions.handleShowPassword}
      >
        {states.showPassword ? (
          <Eye color="#7C7C8A" />
        ) : (
          <EyeOff color="#7C7C8A" />
        )}
      </InputController>
    );
  };

  return (
    <form
      className="flex flex-col item-center gap-4 w-3/4 mt-4"
      onSubmit={handleSubmit(actions.onFormSubmit)}
    >
      <h1 className="text-gray-900 font-semibold text-lg mb-6 text-center">
        Entrar na sua conta
      </h1>
      <InputController
        name="email"
        control={control}
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        placeholder="Email"
        type="text"
      />
      {renderPasswordInput()}
      <ButtonSection
        handleRegister={handleShowRegister}
        handleForgotPassword={actions.handleChangePassword}
        isLoading={false}
      />
    </form>
  );
};
