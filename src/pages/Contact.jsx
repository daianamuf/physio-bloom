import { useReducer, useState } from "react";
import useElementIntersectionObserver from "../useElementIntersectionObserver";

const initialState = {
  inputs: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  },
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "setInput":
      return {
        ...state,
        inputs: { ...state.inputs, [action.field]: action.value },
      };
    case "setError":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "resetForm":
      return initialState;
    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formKey, setFormKey] = useState(Date.now());

  const { elementRef, isVisible } = useElementIntersectionObserver({
    root: null,
    treshold: 0.05,
  });

  const validateInput = (id, value) => {
    let error = "";
    switch (id) {
      case "lastName":
      case "firstName":
      case "message":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          error = "Adresa de email nu este validă.";
        }
        break;
      case "phoneNumber":
        if (!value.trim()) {
          error = "Acest câmp este obligatoriu.";
        } else if (!/^(07[0-8]\d{7}|02\d{8}|03\d{8})$/.test(value)) {
          error = "Număr de telefon invalid.";
        }
        break;

      default:
        error = "";
    }
    dispatch({ type: "setError", field: id, error });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "setInput", field: id, value: value });
    validateInput(id, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFormValid = true;
    let newErrors = {};

    Object.keys(state.inputs).forEach((key) => {
      const value = state.inputs[key];
      if (!value.trim()) {
        newErrors[key] = "Acest câmp este obligatoriu.";
        isFormValid = false;
      } else {
        if (key === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[key] = "Adresa de email nu este validă.";
          isFormValid = false;
        } else if (
          key === "phoneNumber" &&
          !/^(07[0-8]\d{7}|02\d{8}|03\d{8})$/.test(value)
        ) {
          newErrors[key] = "Număr de telefon invalid.";
          isFormValid = false;
        }
      }
    });

    if (!isFormValid) {
      Object.entries(newErrors).forEach(([field, error]) => {
        dispatch({ type: "setError", field, error });
      });
      return;
    }

    if (Object.values(state.errors).every((error) => error === "")) {
      console.log("Form submitted", state.inputs);
    }

    if (isFormValid) {
      const formData = new FormData(e.target);
      Object.entries(state.inputs).forEach(([key, value]) => {
        formData.append(key, value);
      });
      // CHANGE ACCESS KEY!!! //////////////
      formData.append("access_key", "be6eeaf9-8feb-4de2-be37-79c3273c0ada");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setSubmissionMessage("Mesajul a fost trimis cu succes!");
      } else {
        console.log("Error", res);
        setSubmissionMessage(
          "A apărut o eroare, mesajul nu a putut fi trimis!"
        );
      }

      dispatch({ type: "resetForm" });

      setFormKey(Date.now());

      setTimeout(() => {
        setSubmissionMessage("");
      }, 5000);
    }
  };

  return (
    <section className="contact">
      <div className="contact__hero"></div>
      <div
        className={`contact__info ${isVisible ? "slideInFromBottom" : ""}`}
        ref={elementRef}
      >
        <div className="contact__data">
          <p>OWNER - Bianca Deceanu</p>
          <p>0747 486 770</p>
          <p>physiobloom@gmail.com</p>
        </div>
        <p>Cluj-Napoca, str. Grigore Moisil, nr.12</p>
        <img src="/assets/images/location.png" />
      </div>

      <form
        className={`contact__form ${isVisible ? "slideInFromBottom" : ""}`}
        key={formKey}
        onSubmit={handleSubmit}
      >
        <h3 className="contact__form--heading">
          Rezervă o sesiune privată de pilates
        </h3>
        <label htmlFor="lastName" className="contact__form--label">
          Nume
          {state.errors.lastName && (
            <span className="error-message">{state.errors.lastName}</span>
          )}
        </label>
        <input
          id="lastName"
          type="text"
          className="contact__form--input"
          autoComplete="true"
          onChange={handleChange}
        />

        <label htmlFor="firstName" className="contact__form--label">
          Prenume
          {state.errors.firstName && (
            <span className="error-message">{state.errors.firstName}</span>
          )}
        </label>
        <input
          id="firstName"
          type="text"
          className="contact__form--input"
          autoComplete="true"
          onChange={handleChange}
        />

        <label htmlFor="email" className="contact__form--label">
          Email
          {state.errors.email && (
            <span className="error-message">{state.errors.email}</span>
          )}
        </label>
        <input
          id="email"
          type="email"
          className="contact__form--input"
          autoComplete="true"
          onChange={handleChange}
        />

        <label htmlFor="phoneNumber" className="contact__form--label">
          Telefon
          {state.errors.phoneNumber && (
            <span className="error-message">{state.errors.phoneNumber}</span>
          )}
        </label>
        <input
          id="phoneNumber"
          className="contact__form--input"
          autoComplete="true"
          onChange={handleChange}
        />

        <label htmlFor="message" className="contact__form--label">
          Mesaj
          {state.errors.message && (
            <span className="error-message">{state.errors.message}</span>
          )}
        </label>
        <textarea
          id="message"
          type="text"
          className="contact__form--input"
          onChange={handleChange}
          rows={10}
        />

        <button type="submit" className="contact__form--btn">
          Trimite
        </button>
        {submissionMessage && (
          <div className="submission-message">{submissionMessage}</div>
        )}
      </form>
    </section>
  );
}

export default Contact;
