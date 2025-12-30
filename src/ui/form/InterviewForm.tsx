import React from "react";
import InputField from "./InputField";

const InterviewForm = () => {
  return (
    <form action="">
      <h2>_Trabalhe Conosco</h2>
      <InputField label="Nome" type="text" name="first-name" />
      <InputField label="Sobrenome" type="text" name="last-name" />
    </form>
  );
};

export default InterviewForm;
