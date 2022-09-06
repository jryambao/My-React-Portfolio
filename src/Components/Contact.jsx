import React,{useRef} from "react";
import '../icons.css'
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3blyza7",
        "template_s9px0kh",
        form.current,
        "yzAerkOla4UUIm2_N"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Success","Thank you for contacting me!", "success")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 flex flex-col items-center">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 font-header">
            Contact Me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            className=" flex flex-col w-full md:w-1/2"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="button mt-12 w-full bg-gray-500 text-white ">
              <span className="send font-nav text-xl font-semibold">Send message</span>
            </button>
          </form>
        </div>

        <div className="xl:hidden visible">
        <ul class="contact_icons flex gap-6 justify-center w-full pt-24">
            <li> <a href="https://www.facebook.com/yambaosan"><i className="font-bold fa fa-facebook" aria-hidden="true"></i></a> </li>
            <li> <a href="https://github.com/jryambao"><i className="font-bold fa fa-github" aria-hidden="true"></i></a> </li>
            <li> <a href="https://www.linkedin.com/in/john-ralph-y-595473137/"><i className="font-bold fa fa-linkedin" aria-hidden="true"></i></a> </li>
            <li> <a href="mailto: johnralph266@gmail.com"><i className="font-bold fa fa-google" aria-hidden="true"></i></a> </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
