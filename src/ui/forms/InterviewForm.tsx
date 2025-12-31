import React from "react";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import TextareaField from "../form-fields/TextareaField";
import Button from "../Button";

const InterviewForm = () => {
  return (
    <form action="">
      <h2>_Trabalhe Conosco</h2>

      <InputField
        label="Nome"
        type="text"
        name="first-name"
        placeholder="Nome"
      />
      <InputField
        label="Sobrenome"
        type="text"
        name="last-name"
        placeholder="Sobrenome"
      />

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

      <TextareaField
        label="Fale um pouco sobre você"
        name="about-yourself"
        placeholder="Fale um pouco sobre você"
      />

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default InterviewForm;
