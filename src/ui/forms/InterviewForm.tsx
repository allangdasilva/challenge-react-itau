import React from "react";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import TextareaField from "../form-fields/TextareaField";
import Button from "../Button";
import { useForm } from "react-hook-form";

const InterviewForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(JSON.stringify(data, null, 2));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full m-auto p-8 space-y-6 rounded-2xl max-w-lg bg-primary"
    >
      <h2 className="font-title text-light">_Trabalhe Conosco</h2>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField
            type="text"
            label="Nome"
            placeholder="Nome"
            rounded="max-sm:rounded-t-lg sm:rounded-tl-lg"
            {...register("first_name")}
          />
          <InputField
            type="text"
            label="Sobrenome"
            placeholder="Sobrenome"
            rounded="sm:rounded-tr-lg"
            {...register("last_name")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.5fr_0.5fr]">
          <SelectField
            label="Vaga"
            placeholder="Selecione a vaga"
            options={["Backend", "Frontend", "QA"]}
            required
            {...register("vacancy")}
          />
          <SelectField
            label="Nível"
            placeholder="Nv."
            options={["Jr.", "Pl.", "Sn."]}
            required
            {...register("level")}
          />
        </div>

        <TextareaField
          label="Mensagem"
          placeholder="Fale um pouco sobre você"
          rounded="rounded-b-lg"
          rows={4}
          maxLength={255}
          {...register("message")}
        />
      </div>

      <div className="grid justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default InterviewForm;
