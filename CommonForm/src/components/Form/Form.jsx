import React from "react";
import CommonInput from "../common-input/CommonInput";

function Form({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) {
  const formType = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  function renderFormElement(singleItem) {
    let content = null;

    switch (singleItem?.componentType) {
      case formType.INPUT:
        content = (
          <CommonInput
            label={singleItem.label}
            placeholder={singleItem.placeholder}
            id={singleItem.id}
            name={singleItem.name}
            value={formData[singleItem.name]}
            type={singleItem.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={singleItem.label}
            placeholder={singleItem.placeholder}
            id={singleItem.id}
            type={singleItem.type}
            name={singleItem.name}
            value={formData[singleItem.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElement) =>
            renderFormElement(singleFormElement)
          )
        : null}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
}

export default Form;
