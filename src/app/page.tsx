import { CircleDollarSign } from "lucide-react";
import { Login } from "./auth/login/login.auth";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-2/4 bg-gray-700 h-screen flex items-center justify-center">
        <CircleDollarSign size={120} color="#E1E1E6" />
      </div>

      <div className="w-2/4 h-screen flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
}
