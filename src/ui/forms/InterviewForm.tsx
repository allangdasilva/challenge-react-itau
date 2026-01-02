import React from "react";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import TextareaField from "../form-fields/TextareaField";
import Button from "../Button";

const InterviewForm = () => {
  const [field, setField] = React.useState({
    firstName: "",
    lastName: "",
    vacancy: "",
    level: "",
    message: "",
  });

  function handleChange<
    T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >(e: React.ChangeEvent<T>) {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(field);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full m-auto p-8 space-y-6 rounded-2xl max-w-lg bg-primary"
    >
      <h2 className="font-title text-light">_Trabalhe Conosco</h2>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <InputField
            label="Nome"
            type="text"
            name="firstName"
            placeholder="Nome"
            rounded="max-sm:rounded-t-lg sm:rounded-tl-lg"
            value={field.firstName}
            onChange={(e) => handleChange<HTMLInputElement>(e)}
          />
          <InputField
            label="Sobrenome"
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            rounded="sm:rounded-tr-lg"
            value={field.lastName}
            onChange={(e) => handleChange<HTMLInputElement>(e)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.5fr_0.5fr]">
          <SelectField
            label="Selecione a vaga"
            name="vacancy"
            options={["Backend", "Frontend", "QA"]}
            placeholder="Selecione a vaga"
            required
            onChange={(e) => handleChange<HTMLSelectElement>(e)}
          />
          <SelectField
            label="Selecione um nível"
            name="level"
            options={["Jr.", "Pl.", "Sn."]}
            placeholder="Nv."
            required
            onChange={(e) => handleChange<HTMLSelectElement>(e)}
          />
        </div>

        <TextareaField
          label="Fale um pouco sobre você"
          name="message"
          placeholder="Fale um pouco sobre você"
          rounded="rounded-b-lg"
          rows={4}
          maxLength={255}
          value={field.message}
          onChange={(e) => handleChange<HTMLTextAreaElement>(e)}
        />
      </div>

      <div className="grid justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default InterviewForm;
