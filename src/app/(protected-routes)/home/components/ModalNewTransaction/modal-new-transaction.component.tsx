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
  FormFields,
  NewTransactionSchema,
} from "./modal-new-transaction.constants";
import { InputController } from "@/components/commons/InputController/input-controller.component";
import { Button } from "@/components/commons/Button/button.component";
import { TransactionTypeButtons } from "./components/TransactionTypeButtons/transaction-type-buttons.component";
import React from "react";
import { TransactionType } from "@/services/interfaces/transactions";
import { SelectController } from "@/components/commons/SelectController/select-controller.component";

export const ModalNewTransaction: React.FC<ModalNewTransactionProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(NewTransactionSchema),
  });

  const [selectedType, setType] = React.useState<TransactionType>();

  const renderFormFields = () => {
    return FormFields.map((field) => {
      if (field.type === "select") {
        return (
          <SelectController
            key={field.id}
            control={control}
            name={field.name}
            errorMessage={errors[field.name as keyof typeof errors]?.message}
            isInvalid={!!errors[field.name as keyof typeof errors]}
          >
            {field.options?.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectController>
        );
      }

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
            selectedType={selectedType}
            setType={(type) => {
              setType(type);
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
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            {renderFormFields()}
            {renderTypeSelector()}
            <ModalFooter>
              <Button
                className="w-full items-center justify-center p-4 bg-green-500 text-white font-regular hover:bg-green-300 rounded-lg disabled:bg-gray-500 disabled:hover:text-gray-100 disabled:cursor-not-allowed"
                type="submit"
              >
                Cadastrar
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
