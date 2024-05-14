import { ModalNewAccountProps } from "./modal-new-account.types"

export const useModalNewAccount = ({handleGetTransactions, isOpen, onOpenChange, userId}: ModalNewAccountProps) => {
  const handleCloseModal = (): void => {
    onOpenChange()
  }

  return {
    states: {},
    actions: {
      handleCloseModal
    }
  }
}