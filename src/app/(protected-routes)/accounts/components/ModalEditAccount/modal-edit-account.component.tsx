import React from "react";

import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { ModalEditAccountProps, formProps } from "./modal-edit-account.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectController } from "@/components/commons/SelectController/select-controller.component";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { useModalEditAccount } from "./modal-edit-account.hook";
import { EditAccountSchema } from "./modal-edit-account.constants";
import { selectFields } from "../../accounts.constants";

export const ModalEditAccount: React.FC<ModalEditAccountProps> = ({
  handleGetTransactions,
  isOpen,
  onOpenChange,
  userId,
  accountData,
}) => {
  const { states, actions } = useModalEditAccount({
    handleGetTransactions,
    isOpen,
    onOpenChange,
    userId,
    accountData,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(EditAccountSchema),
  });

  const renderSelectFields = () => {
    return selectFields.map((field) => (
      <SelectController
        key={field.id}
        control={control}
        name={field.name}
        label={field.label}
        errorMessage={errors[field.name as keyof typeof errors]?.message}
        isInvalid={!!errors[field.name as keyof typeof errors]?.message}
      >
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectController>
    ));
  };

  const renderInputController = () => {
    return (
      <InputController
        control={control}
        name="description"
        placeholder="Descrição"
        type="text"
        errorMessage={errors.description?.message}
        isInvalid={!!errors.description}
        isSecondInput
      />
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-gray-700 rounded-lg"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-gray-100">
          Nova Conta
        </ModalHeader>
        <ModalBody>
          <form className="flex flex-col gap-4">
            {renderSelectFields()}
            {renderInputController()}
          </form>
          <ButtonSection
            closeModal={actions.handleCloseModal}
            editAccount={handleSubmit(actions.onFormSubmit)}
            loading={states.handleEditAccount.isPending}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
