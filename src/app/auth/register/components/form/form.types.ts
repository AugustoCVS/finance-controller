import * as yup from "yup";
import { signUpSchema } from "./form.constants";

export type formProps = yup.InferType<typeof signUpSchema>;

export type FormProps = {
  handleCloseRegister: () => void;
};