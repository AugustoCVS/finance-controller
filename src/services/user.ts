import { api } from "./api";
import { UserRequestProps, UserResponseProps } from "./interfaces/user";

export const UserService = {
  getUser: async ({ id }: UserRequestProps) => {
    const res = await api.get<UserResponseProps>(`/users/${id}`);

    return res.data;
  }
}