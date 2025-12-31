import React from "react";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import TextareaField from "../form-fields/TextareaField";
import Button from "../Button";

const InterviewForm = () => {
  return (
    <form className="m-auto p-8 space-y-6 rounded-2xl max-w-lg bg-primary">
      <h2 className="font-title text-light">_Trabalhe Conosco</h2>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField
            label="Nome"
            type="text"
            name="first-name"
            placeholder="Nome"
            rounded="max-sm:rounded-t-lg sm:rounded-tl-lg"
          />
          <InputField
            label="Sobrenome"
            type="text"
            name="last-name"
            placeholder="Sobrenome"
            rounded="sm:rounded-tr-lg"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.5fr_0.5fr]">
          <SelectField
            label="Selecione a vaga"
            name="select-vacancy"
            options={["Backend", "Frontend", "QA"]}
            placeholder="Selecione a vaga"
          />
          <SelectField
            label="Selecione um nível"
            name="select-level"
            options={["Jr.", "Pl.", "Sn."]}
            placeholder="Nv."
          />
        </div>

        <TextareaField
          label="Fale um pouco sobre você"
          name="about-yourself"
          placeholder="Fale um pouco sobre você"
        />
      </div>

      <div className="grid justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default InterviewForm;
