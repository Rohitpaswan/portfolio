import { Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
const ContactUs = () => {
  const [formVal, setFormVal] = useState({
    username: "",
    email: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const form = useRef();

  const notifySuccess = () => {
    toast.success("Thanks for your response", {
      position: "top-center",
      autoClose: 4000,
    });
  };
  //function of handel input data
  const handelInput = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  const handelMessage = (e) => {
    setMessage(e.target.value);
  };

  const SERVICE_ID = "service_5sa41lr";
  const TEMPLATE_ID = "template_cfq1znd";
  const PUBLIC_KEY = "5NNR3pKiDevWtANea";

  //function for submission of mail
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY, {
        sender_name: formVal.username, // Include the sender's name
        sender_email: formVal.email, // Include the sender's email
      })

      .then(
        (result) => {
          console.log(result.text);
          // Display the success toast message
          notifySuccess();
          setFormVal({ username: "", email: "" });
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const inputs = [
    {
      id: 1,
      name: "from_name",
      label: "Username",
      placeholder: " Name",
      required: true,
      type: "text",
    },
    {
      id: 1,
      name: "from_email",
      label: "Email",
      placeholder: " Email",
      required: true,
      type: "email",
    },
  ];
  return (
    <div className="right__side">
      <Typography variant="h4" sx={{ mt: 1.5, mb: 1.5 }}>
        Contact us
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        {inputs.map((input, index) => {
          return (
            <div key={index} className="input__wrapper">
              <label htmlFor={input.name}></label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                onChange={handelInput}
                name={input.name}
                required={input.required}
              />
            </div>
          );
        })}

        <textarea
          className="messagebox"
          placeholder="Enter your message... "
          name="message"
          required={true}
          onChange={handelMessage}
        />

        <button type="submit" className="btn-submit">
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactUs;
