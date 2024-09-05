import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactLottie from '../lotties/contactbg';
import Navbar from '../components/NavbarAB';
// import NavbarHome from '../Components/NavbarHome';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x2sh2yx', 'template_2y5v0j1', form.current, {
        publicKey: 'atlthP8f9FaYJb6T1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <Navbar/>
    {/* <NavbarHome/> */}
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}>
      <div
        className='flex justify-center items-center'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <ContactLottie />
      </div>
      <div
        class=" justify-center mt-10 w-fitbg-white border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ marginTop: "100px", marginRight:25,marginLeft:25 }}
      >
        {/* <section
          class="bg-white dark:bg-gray-900 rounded-lg"
          
        > */}
          <h1
            class="font-extrabold text-4xl text-center p-5"
            style={{ margin: "5px" }}
          >
            Contact Us
          </h1>
          <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div
              class="mr-auto place-self-center lg:col-span-7"
              style={{ width: "500px", marginLeft: "60px" }}
            >
              <form class="max-w-sm mx-auto" style={{ marginBottom: "20px" }} ref={form} onSubmit={sendEmail}>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name='user_name'
                    id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name='user_email'
                    id="base-input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div style={{ marginBottom: "1.75rem" }}>
                  <label
                    for="large-input"
                    class="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Message
                  </label>
                  <input
                    type="text"
                    name='message'
                    id="large-input"
                    class="block w-full p-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  value='Send'
                  class="text-white bg-purple-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-pink-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-700 dark:hover:bg-purple-700 dark:focus:ring-pink-500"

                >
                  Submit
                </button>
              </form>
            </div>
            <div class="lg:mt-0 lg:col-span-5 lg:flex" style={{width:500,height:400}}>
              <img src="https://img.freepik.com/premium-vector/illustration-smiling-man-operator-customer-service-male-hotline-operator-advises-client-online-global-technical-support-24-7-customer-operator_143055-139.jpg?w=996"/>
            </div>
          </div>
        
      </div>
      

    </div>
    </>
  );
}
