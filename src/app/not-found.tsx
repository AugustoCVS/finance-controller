"use client";

import { Button } from "@/components/commons/Button/button.component";
import { Loading } from "@/components/commons/Loading/loading.component";
import { MessageUtils } from "@/utils/messages";
import { Cable } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);

  async function handleRedirectUser(): Promise<void> {
    setIsRedirecting(true);
    try {
      router.push("/home");
    } catch {
      MessageUtils.handleSendToast({
        type: "error",
        message: "Erro ao redirecionar o usuário.",
      });
    } finally {
      setIsRedirecting(false);
    }
  }

  return (
    <main className="absolute flex flex-col items-center justify-center p-5 w-full bg-white z-50 top-0">
      <section className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  Página não encontrada!
                </h1>
                <p className="my-2 text-gray-800">
                  Desculpe por isso! Volte para a página principal!
                </p>
                <Button onClick={handleRedirectUser} loading={isRedirecting}>
                  {isRedirecting ? (
                    <Loading size={24} color={"#FFF"} />
                  ) : (
                    <span>Voltar!</span>
                  )}
                </Button>
              </div>
            </div>
            <figure>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="Imagem 404." />
            </figure>
          </div>
        </div>
        <div>
          <Cable size={400} color={"#323238"} />
        </div>
      </section>
    </main>
  );
}
