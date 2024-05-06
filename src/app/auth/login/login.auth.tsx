import { Form } from "./components/form/form.component";
import { LoginAuthProps } from "./login.auth.types";

export const Login: React.FC<LoginAuthProps> = ({ handleShowRegister }) => {
  return <Form handleShowRegister={handleShowRegister} />;
};
