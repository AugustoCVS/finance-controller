import { Button } from "@/components/commons/Button/button.component";
import { ButtonSectionProps } from "./button-section.types";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  handleForgotPassword,
  handleRegister,
  isLoading,
}) => {
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="w-3/4 mt-8">
        <Button type="submit" loading={isLoading}>
          Entrar
        </Button>
      </div>
      <p>
        Você ainda não tem uma conta?
        <span
          className="underline cursor-pointer text-gray-900 ml-1"
          onClick={handleRegister}
        >
          Registrar
        </span>
      </p>
      <span
        className="underline cursor-pointer text-gray-900 ml-1"
        onClick={handleForgotPassword}
      >
        Esqueceu sua senha?
      </span>
    </div>
  );
};
