export type RegisterRequestProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type LoginRequestProps = {
  email: string;
  password: string;
};

export type LoginResponseProps = {
  token: string;
  refreshToken: {
    id: string;
    expiresIn: number;
    userId: string;
  }
}