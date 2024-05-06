import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  email: yup.string().email("Digite um e-mail válido").required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
})

export const SUCCESS_MESSAGE = "Login efetuado com sucesso"
export const ERROR_MESSAGE = "Credenciais inválidas"