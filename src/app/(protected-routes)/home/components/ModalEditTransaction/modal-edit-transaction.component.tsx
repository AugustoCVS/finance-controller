import React from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import {
  ModalEditTransactionProps,
  formProps,
} from "./modal-edit-transaction.types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CategoryList,
  EditTransactionSchema,
  FormFields,
} from "./modal-edit-transaction.constants";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { Button } from "@/components/commons/Button/button.component";
import { TransactionTypeButtons } from "../TransactionTypeButtons/transaction-type-buttons.component";
import { SelectController } from "@/components/commons/SelectController/select-controller.component";
import { useModalEditTransaction } from "./modal-edit-transaction.hook";
import { Loading } from "@/components/commons/Loading/loading.component";
import { secondDateFormatter } from "@/utils/formaters";
import {
  TransactionCategory,
  TransactionType,
} from "@/services/interfaces/transactions";

export const ModalEditTransaction: React.FC<ModalEditTransactionProps> = ({
  isOpen,
  onOpenChange,
  handleGetTransactions,
  userId,
  transactionData,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(EditTransactionSchema),
  });

  const { states, actions } = useModalEditTransaction({
    handleGetTransactions,
    onOpenChange,
    isOpen,
    userId,
    transactionData,
  });

  const renderSelectFormFields = () => {
    return (
      <div className="flex flex-col gap-4">
        <SelectController
          control={control}
          name="category"
          errorMessage={errors.category?.message}
          isInvalid={!!errors.category?.message}
          defaultValue={transactionData?.category}
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
          errorMessage={errors.category?.message}
          isInvalid={!!errors.category?.message}
          defaultValue={transactionData?.accountId}
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
      let defaultValue =
        transactionData?.[field.name as keyof typeof transactionData];

      const isDateField = field.name === "date";

      if (isDateField) {
        defaultValue = secondDateFormatter.format(new Date(defaultValue));
      }

      return (
        <InputController
          key={field.id}
          control={control}
          name={field.name}
          placeholder={field.title}
          type={field.type}
          defaultValue={defaultValue}
          errorMessage={errors[field.name as keyof typeof errors]?.message}
          isInvalid={!!errors[field.name as keyof typeof errors]}
          isSecondInput
        />
      );
    });
  };

  const renderTypeSelector = () => {
    if (transactionData) {
      const { type } = transactionData;

      return (
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <TransactionTypeButtons
              selectedType={type}
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
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="w-[32rem] bg-gray-700 rounded-lg"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-gray-100">
          Atualizar transação
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
                loading={states.handleUpdateTransaction.isPending}
              >
                {states.handleUpdateTransaction.isPending ? (
                  <Loading />
                ) : (
                  "Atualizar"
                )}
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
