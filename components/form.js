/*import { BiUpsideDown } from "react-icons/bi";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

      export default function Form() {

        const [formData, setFormData] = useReducer(formReducer,{});
        const formId = useSelector((state) => state.app.client.formId);
      
       


      return (
        <div className="container">
          {formId ? (
            <UpdateUserForm formId={formId} formData={formData} setFormData={setFormData} />
          ) : (
            <AddUserForm formData={formData} setFormData={setFormData} />
          )}
        </div>
      );
          }

          */


          import { BiUpsideDown } from "react-icons/bi";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId); // Replace with the actual selector to get the formId from the Redux store

  return (
    <div className="container">
      {formId ? (
        <UpdateUserForm formId={formId} formData={formData} setFormData={setFormData} />
      ) : (
        <AddUserForm formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
}

