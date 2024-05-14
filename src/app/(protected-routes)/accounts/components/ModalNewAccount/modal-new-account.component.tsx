import React from "react";

import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { ModalNewAccountProps, formProps } from "./modal-new-account.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewAccountSchema } from "./modal-new-account.constants";
import { SelectController } from "@/components/commons/SelectController/select-controller.component";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { useModalNewAccount } from "./modal-new-account.hook";
import { selectFields } from "../../accounts.constants";

export const ModalNewAccount: React.FC<ModalNewAccountProps> = ({
  handleGetTransactions,
  isOpen,
  onOpenChange,
  userId,
}) => {
  const { states, actions } = useModalNewAccount({
    handleGetTransactions,
    isOpen,
    onOpenChange,
    userId,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(NewAccountSchema),
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
            createAccount={handleSubmit(actions.onFormSubmit)}
            loading={states.handleCreateAccount.isPending}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
