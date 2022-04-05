import styles from '../../styles/contact_section/Contact.module.scss';
import Headings from '../sub_components/Headings';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const defaultInputBorder = "1px solid white";
  const errorInputBorder = "1px solid red";

  const restoreInputsDefaultBorder = (inputs) => {
    inputs.forEach((input) => {
      input.style.border = defaultInputBorder;
    });
  };

  const handleFormData = (el) => {
    // el.preventDefault();
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    let hasErrors = false;

    restoreInputsDefaultBorder([nameInput, emailInput, messageInput]);
    const { name, email, message } = data;

    if (name === "") {
      console.log("name is empty");
      //name errors
      nameInput.style.border = errorInputBorder;
      hasErrors = true;
    }
    if (!validateEmail(email) || email === "") {
      console.log("email is empty");
      //email errors
      emailInput.style.border = errorInputBorder;
      hasErrors = true;
    }
    if (message === "") {
      console.log("message is empty");
      //message errors
      messageInput.style.border = errorInputBorder;
      hasErrors = true;
    }

    const thisButton = el.target;
    if (!hasErrors) {
      thisButton.innerText = "Sending";
      thisButton.disabled = true;
      // submitting data
      fetch("/api/sendMail", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          el.target.value = "Submit";
          el.target.disabled = false;
          if (data.success) {
            //  Handle success
            console.log("sent");
          } else {
            // Handle failure
            console.log("failed");
          }
        });
    }
  };

  // useEffect(() => {
  //   const submitButton = document.querySelector("#submit");
  //   submitButton.addEventListener('click', (el) => {
  //     handleFormData(el);
  //   });
  // });

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.headingContainer}>
        <Headings main="Contact" sub="me" />
      </div>
      <div className={styles.sectionsContainer}>
        <div className={styles.leftSection}>
          <p className={styles.boldTitle}>
            Have an <span>idea</span> you
            would like to talk about?
          </p>
          <p className={styles.details}>I'm excited to learn about it, please don't hesitate to fill the form and i'll get back to you as soon as possible. You can also leave a Hi! and we can communicate more.</p>
        </div>
        <div className={styles.rightSection}>
          <form method='post'>
            <div className={styles.inputGroup}>
              <input id='name' type='text' name='name' placeholder='Name' onChange={(el) => {
                setData({
                  ...data,
                  name: el.target.value,
                });
              }}
                required />
              <input id='email' type='email' name='email' placeholder='Email' onChange={(el) => {
                setData({
                  ...data,
                  email: el.target.value,
                });
              }}
                required />
            </div>
            <div>
              <textarea id='message' name='message' placeholder='Message' onChange={(el) => {
                setData({
                  ...data,
                  message: el.target.value,
                });
              }}
                required />
            </div>
            <div>
              <button type='button' onClick={(el) => handleFormData(el)}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
