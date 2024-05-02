"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { Eye, EyeOff, PanelRightClose } from "lucide-react";

import { FormProps, formProps } from "./form.types";
import { registerSlide, signUpSchema } from "./form.constants";
import { Input } from "@/components/commons/Input/input.component";
import { useRegisterForm } from "./form.hook";
import { Button } from "@/components/commons/Button/button.component";

export const Form: React.FC<FormProps> = ({ handleCloseRegister }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(signUpSchema),
  });

  const { actions, states } = useRegisterForm();

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
            <Eye color="#7C7C8A" />
          ) : (
            <EyeOff color="#7C7C8A" />
          )}
        </div>
      </div>
    );
  };

  const renderConfirmPasswordInput = () => {
    return (
      <div className="relative">
        <Controller
          name="confirm_password"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Confirme sua senha"
              type={states.showConfirmPassword ? "text" : "password"}
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.confirm_password?.message}
              isInvalid={!!errors.confirm_password}
            />
          )}
        />

        <div
          className="absolute right-0 top-6 px-4 border-none bg-transparent cursor-pointer"
          onClick={actions.handleShowConfirmPassword}
        >
          {states.showPassword ? (
            <Eye color="#7C7C8A" />
          ) : (
            <EyeOff color="#7C7C8A" />
          )}
        </div>
      </div>
    );
  };

  const renderCloseButton = () => {
    return (
      <div
        className="absolute left-0 top-0 p-4 cursor-pointer"
        onClick={handleCloseRegister}
      >
        <PanelRightClose color="#7C7C8A" />
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
      <form className="flex flex-col item-center gap-4 w-3/4 mt-4">
        {renderCloseButton()}
        <h1 className="text-center">Registre sua conta</h1>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Nome"
              type="text"
              value={field.value}
              onChange={field.onChange}
              errorMessage={errors.name?.message}
              isInvalid={!!errors.name}
            />
          )}
        />
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
        {renderConfirmPasswordInput()}
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <div className="w-3/4 mt-8">
            <Button
              type="submit"
              onClick={handleSubmit(actions.handleRegister)}
            >
              Registrar
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
