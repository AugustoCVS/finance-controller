import * as yup from "yup";

export const registerSlide = {
  initial: {
    x: "100%",
  },
  enter: {x: "0%", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
  exit: {x: "100%", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
};


export const signUpSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "Senha inválida", function (value) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});