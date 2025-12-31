import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const InterviewForm = () => {
  return (
    <form action="">
      <h2>_Trabalhe Conosco</h2>

      <InputField label="Nome" type="text" name="first-name" />
      <InputField label="Sobrenome" type="text" name="last-name" />

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
    </form>
  );
};

export default InterviewForm;
