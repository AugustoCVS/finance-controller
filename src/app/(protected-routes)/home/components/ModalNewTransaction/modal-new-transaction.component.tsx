import React from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import {
  ModalNewTransactionProps,
  formProps,
} from "./modal-new-transaction.types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CategoryList,
  FormFields,
  NewTransactionSchema,
} from "./modal-new-transaction.constants";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { Button } from "@/components/commons/Button/button.component";
import { SelectController } from "@/components/commons/SelectController/select-controller.component";
import { useModalNewTransaction } from "./modal-new-transaction.hook";
import { Loading } from "@/components/commons/Loading/loading.component";
import { TransactionTypeButtons } from "../TransactionTypeButtons/transaction-type-buttons.component";

export const ModalNewTransaction: React.FC<ModalNewTransactionProps> = ({
  isOpen,
  onOpenChange,
  handleGetTransactions,
  userId,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(NewTransactionSchema),
  });

  const { states, actions } = useModalNewTransaction({
    handleGetTransactions,
    onOpenChange,
    isOpen,
    userId,
  });

  const renderSelectFormFields = () => {
    return (
      <div className="flex flex-col gap-4">
        <SelectController
          control={control}
          name="category"
          errorMessage={errors.category?.message}
          isInvalid={!!errors.category?.message}
          label="Categoria da Transação"
        >
          {CategoryList.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectController>
        <SelectController
          control={control}
          name="accountId"
          errorMessage={errors.accountId?.message}
          isInvalid={!!errors.accountId?.message}
          label="Conta"
        >
          {states.data?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </SelectController>
      </div>
    );
  };

  const renderFormFields = () => {
    return FormFields.map((field) => {
      return (
        <InputController
          key={field.id}
          control={control}
          name={field.name}
          placeholder={field.title}
          type={field.type}
          errorMessage={errors[field.name as keyof typeof errors]?.message}
          isInvalid={!!errors[field.name as keyof typeof errors]}
          isSecondInput
        />
      );
    });
  };

  const renderTypeSelector = () => {
    return (
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <TransactionTypeButtons
            selectedType={states.selectedType}
            setType={(type) => {
              actions.setSelectedType(type);
              field.onChange(type);
            }}
            errorMessage={errors.type?.message}
            isInvalid={!!errors.type}
          />
        )}
      />
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="w-[32rem] bg-gray-700 rounded-lg"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-gray-100">
          Nova transação
        </ModalHeader>
        <ModalBody>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(actions.onFormSubmit)}
          >
            {renderFormFields()}
            {renderSelectFormFields()}
            {renderTypeSelector()}
            <ModalFooter>
              <Button
                className="w-full items-center justify-center p-4 bg-green-500 text-white font-regular hover:bg-green-300 rounded-lg disabled:bg-gray-500 disabled:hover:text-gray-100 disabled:cursor-not-allowed"
                type="submit"
                loading={states.handleCreateTransaction.isPending}
              >
                {states.handleCreateTransaction.isPending ? (
                  <Loading />
                ) : (
                  "Cadastrar"
                )}
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
