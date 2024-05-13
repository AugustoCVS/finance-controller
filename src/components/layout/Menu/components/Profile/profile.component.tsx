import { deleteUserInfoOnSessionCookies } from "@/utils/auth";
import { MessageUtils } from "@/utils/messages";
import { CircleUserRound, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const Profile: React.FC = () => {
  const router = useRouter();

  const handleLogOut = () => {
    deleteUserInfoOnSessionCookies();
    setTimeout(() => {
      router.push("/");
      MessageUtils.handleSendToast({
        type: "success",
        message: "Volte Sempre!",
      });
    }, 500);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <LogOut
        color="#E1E1E6"
        size={40}
        className="cursor-pointer hover:bg-gray-900 p-1 rounded"
        onClick={handleLogOut}
      />
      <CircleUserRound size={30} color="#E1E1E6" />
    </div>
  );
};
