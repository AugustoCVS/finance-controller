import { Loading as Louder } from "@/components/commons/Loading/loading.component";

export default function Loading() {
  return (
    <div className="absolute flex flex-col items-center justify-center p-5 w-full h-full min-h-screen bg-gray-700 z-50 top-0">
      <Louder size={200} />
    </div>
  );
}
