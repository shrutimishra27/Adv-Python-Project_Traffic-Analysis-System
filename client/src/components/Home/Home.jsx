// import React from "react";
import "./Home.css";
<<<<<<< HEAD

const Home = () => {
  return (
    <>
      HELLO WORLD
    </>
  );
};
=======
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import Chatbot_section from "../ChatBot/chatbot_section";
    

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <header>
        <h2><a href="#">Surakshaa</a></h2>
        <ul className="nav">
          <li><a href="#" className="hover:text-black">Upload Video</a></li>
          <li><a href="#" className="hover:text-black">Blog</a></li>
          <li><a href="#" className="hover:text-black">Chatbot</a></li>
          <li><a href="#" className="hover:text-black">Dataset</a></li>
        </ul>
      </header>

      <section className="box">
        <video src="images/video.mp4" autoPlay muted loop></video>
        <h1>Surakshaa</h1>
        <h3>Safety First</h3>
        <a href="#" className="boxBtn">Log in</a>
      </section>

      <section className="h-auto flex flex-col text-slate-900" id="about-us">
        <div className="mx-w-[1320px] md:py-[80px] py-5 flex mx-auto md:flex-row flex-col">
          <div className="basis-[45%]" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
            <img src="images/img2.png" alt="" className="w-full" />
          </div>
          <div className="basis-[55%] px-10" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50">
            <h1 className="text-5xl pb-8 font-serif">About Us - Surakshaa</h1>
            <p className="py-4 text-justify font-sans font-light">We are a passionate team of five dedicated students pursuing our Bachelor's degrees in Computer Engineering. With a shared commitment to making our roads safer for everyone, we came together to develop this innovative platform. Our story is one of collaboration, innovation, and a shared vision for a safer future on the road. Our journey began in the hallowed halls of our university, where we realized the potential of technology to address a critical issue: road safety. With a firm belief that technology can be a catalyst for change, we embarked on this project to create Surakshaa. </p>
            <p className="py-4 text-justify font-sans font-light">Our mission is simple yet profound: to save lives and promote responsible road behavior. We firmly believe that every individual has the right to travel safely on the roads, and every driver has a responsibility to follow traffic rules diligently. Surakshaa is our way of bridging the gap between technology and road safety.</p>
            <p className="py-4 text-justify font-sans font-light">We invite you to join us on this incredible journey towards safer roads. Whether you're a user of our platform, a contributor, or simply someone who shares our vision, your support matters. Together, we can turn Surakshaa into a global movement for road safety, one upload, one report, and one responsible action at a time. Thank you for being a part of Surakshaa – where technology meets responsibility, and where we drive change for a safer tomorrow.</p>
            <div className="flex justify-center items-center py-5">
              <a href="#"><button className="hover:bg-slate-500 hover:text-slate-900 rounded bg-slate-900 text-white px-5 py-1 font-serif">Meet our Team</button></a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Chatbot_section/>
      </div>

      <footer className="h-auto" id="contact">
        <div className="p-10 bg-slate-800 text-slate-200">
          <div className="mx-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div className="mb-5">
                <h4 className="text-2xl pb-4">Made by:</h4>
                <p className="text-gray-500">
                  Shruti Mishra <br />
                  Shivraj Nakum <br />
                  Dhvani Patel <br />
                  Mahek Gor <br />
                  Heli Bhatt <br />
                </p>
              </div>
              <div className="mb-5 ">
                <h4 className="pb-3">Useful Links</h4>
                <ul className="text-gray-500">
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300"> Home</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300"> Our blogs</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300"> Upload Videos</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300"> Know about Traffic Rules</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300"> Privacy Policy</a></li>
                </ul>
              </div>
              <div className="mb-5 ">
                <h4 className="pb-3">Useful Links</h4>
                <ul className="text-gray-500">
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300">Our blogs</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300">Our blogs</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300">Our blogs</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300">Our blogs</a></li>
                  <li className="pb-4"><i className="fa fa-chevron-right text-blue-300"></i> <a href="#" className="hover:text-blue-300">Our blogs</a></li>
                </ul>
              </div>
              <div className="mb-5 " />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 text-gray-500 px-10">
          <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
            <div className="text-center">
              <div className="pb-1">
                © Copyright <strong><span>Surakshaa</span></strong>. All rights reserved
              </div>
            </div>
            <div className="text-center text-xl text-white mb-2">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400 mx-l inline-block pt-1"><i className="fa fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400 mx-l inline-block pt-1"><i className="fa fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400 mx-l inline-block pt-1"><i className="fa fa-facebook"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400 mx-l inline-block pt-1"><i className="fa fa-skype"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400 mx-l inline-block pt-1"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

>>>>>>> 348a26b3cbe3943673631e90c5a2df02c5778566

export default Home;
