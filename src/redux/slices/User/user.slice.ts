import { UserResponseProps } from '@/services/interfaces/user';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserResponseProps = {
  id: "",
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserResponseProps>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
