import { Form } from "./components/form/form.component";
import { RegisterAuthProps } from "./register.auth.types";

export const Register: React.FC<RegisterAuthProps> = ({
  handleCloseRegister,
}) => {
  return <Form handleCloseRegister={handleCloseRegister} />;
};
