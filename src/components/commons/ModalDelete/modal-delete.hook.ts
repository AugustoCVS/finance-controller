export const useModalDeleteTransaction = ({
  onOpenChange,
}: {
  onOpenChange: () => void;
}) => {

  const handleCloseModal = (): void => {
    onOpenChange();
  };

  return {
    actions: {
      handleCloseModal,
    },
  };
};
