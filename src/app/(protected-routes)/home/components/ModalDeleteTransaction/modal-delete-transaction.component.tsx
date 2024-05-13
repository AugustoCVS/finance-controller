import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ModalDeleteTransactionProps } from "./modal-delete-transaction.types";
import { Trash } from "lucide-react";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { useModalDeleteTransaction } from "./modal-delete-transaction.hook";

export const ModalDeleteTransaction: React.FC<ModalDeleteTransactionProps> = ({
  handleGetTransactions,
  isOpen,
  onOpenChange,
  transactionData,
}) => {
  const { states, actions } = useModalDeleteTransaction({
    handleGetTransactions,
    isOpen,
    onOpenChange,
    transactionData,
  });

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="w-[34rem] bg-gray-700 rounded-lg"
    >
      <ModalContent>
        <ModalHeader className="w-full flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-red-300 flex items-center justify-center">
            <Trash size={42} color="white" />
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-lg text-white">
              Deseja deletar essa transação?
            </h2>
            <p className="text-sm text-white">A ação não pode ser revertida</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <ButtonSection
            handleDeleteTransaction={actions.handleDeleteTransaction}
            isLoading={states.deleteTransaction.isPending}
            onClose={actions.handleCloseModal}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
