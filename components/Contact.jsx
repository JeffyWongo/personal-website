"use client";

import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Message Successfully Sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifyError = () => {
    toast.error('Error Sending Message.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
      notify()
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
      notifyError()
    }
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4 dark:shadow-sm dark:border dark:border-gray-400">
            <div className="lg:p-4 h-full">
              <div className="">
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src=""
                ></img>
              </div>
              <div className="">
                <h2 className="py-2">Jeff Hwang</h2>
                <p>Full-Stack Developer</p>
              </div>
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center py-4">
                <Link
                  href="https://www.linkedin.com/in/jeffhwang9"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/JeffyWongo" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:jeffhwang9@gmail.com" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 mr-4 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4 dark:shadow-sm dark:border dark:border-gray-400">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    minLength={1}
                    maxLength={150}
                    id="name"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    required
                    minLength={5}
                    maxLength={150}
                    id="email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    placeholder="How can I help you?"
                    required
                    maxLength={500}
                    name="message"
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full p-4 shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white mt-4 disabled:opacity-40 dark:border dark:border-gray-400 dark:text-gray-100 dark:shadow-sm"
                >
                  Send Message
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:border dark:border-gray-400">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
