"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

import { FormProps, formProps } from "./form.types";
import { registerSlide, signUpSchema } from "./form.constants";
import { useRegisterForm } from "./form.hook";
import { Button } from "@/components/commons/Button/button.component";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { CloseButton } from "./components/CloseButton/close-button.component";
import { ButtonSection } from "./components/ButtonSection/button-section.component";

export const Form: React.FC<FormProps> = ({ handleCloseRegister }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(signUpSchema),
  });

  const { actions, states } = useRegisterForm({
    handleCloseRegister,
  });

  const renderPasswordInput = () => {
    return (
      <InputController
        name="password"
        control={control}
        placeholder="Senha"
        type={states.showPassword ? "text" : "password"}
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
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

  const renderConfirmPasswordInput = () => {
    return (
      <div>
        <InputController
          name="confirm_password"
          control={control}
          placeholder="Confirme sua senha"
          type={states.showConfirmPassword ? "text" : "password"}
          errorMessage={errors.confirm_password?.message}
          isInvalid={!!errors.confirm_password}
          onClick={actions.handleShowConfirmPassword}
        >
          {states.showConfirmPassword ? (
            <Eye color="#7C7C8A" />
          ) : (
            <EyeOff color="#7C7C8A" />
          )}
        </InputController>
        <p className="text-sm pt-4 text-gray-500 text-center">
          A senha deve conter letras maiúsculas e minúsculas, números e um
          caractere especial.
        </p>
      </div>
    );
  };

  return (
    <motion.div
      variants={registerSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className="fixed flex flex-col items-center justify-center w-2/4 h-full right-0 top-0 bg-white"
    >
      <form
        className="flex flex-col item-center gap-4 w-3/4 mt-4"
        onSubmit={handleSubmit(actions.onFormSubmit)}
      >
        <CloseButton onClick={handleCloseRegister} />
        <h1 className="text-center">Registre sua conta</h1>

        <InputController
          name="name"
          control={control}
          placeholder="Nome"
          type="text"
          errorMessage={errors.name?.message}
          isInvalid={!!errors.name}
        />

        <InputController
          name="email"
          control={control}
          placeholder="Email"
          type="text"
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email}
        />
        {renderPasswordInput()}
        {renderConfirmPasswordInput()}
        <ButtonSection isLoading={actions.handleRegister.isPending} />
      </form>
    </motion.div>
  );
};
