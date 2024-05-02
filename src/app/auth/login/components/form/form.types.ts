import * as yup from 'yup';
import { signInSchema } from './form.constants';

export type formProps = yup.InferType<typeof signInSchema>