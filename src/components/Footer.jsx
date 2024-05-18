import React from "react";

function Footer() {
  const services = [
    "Web Developement",
    "Web Design",
    "UI/UX Design",
    "SEO",
    "Site Maintenance",
  ];
  const social = [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/mr-abraham/" },
    { title: "Twitter", href: "https://twitter.com/abraham_shivam" },
    { title: "Github", href: "https://github.com/Mr-Abraham" },
    { title: "Hashnode", href: "https://hashnode.com/@mrabraham" },
    { title: "Instagram", href: "https://www.instagram.com/shivamabraham/" },
    {
      title: "Frontend Mentor",
      href: "https://www.frontendmentor.io/profile/Mr-Abraham",
    },
  ];

  return (
    <footer className="text-white flex gap-5 justify-between px-10 py-5 relative -bottom-2 rounded-xl bg-gray-900 max-lg:flex-col ">
      <div className=" w-[450px] max-md:w-fit">
        <h1 className="mb-3 text-3xl font-extrabold">Shivam Abraham</h1>
        <p className="text-gray-300">
          have a strong background in web development, having worked as both a
          front-end and back-end developer for several years. My skills include
          HTML, CSS, JavaScript, ReactJS, NodeJS, NextJS and MySQL. I am also
          familiar with popular frameworks such as Bootstrap and Tailwind
        </p>
        <p className="mt-4 font-bold">Email - codingnerd84@gmail.com</p>
      </div>
      <div className="">
        <h1 className="mb-3 text-3xl font-extrabold">Services</h1>
        <ul>
          {services.map((item, index) => (
            <li key={index} className="text-white mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="mb-3 text-3xl font-extrabold">Resource</h1>
        <ul className="space-y-2">
          <li>
            <a target="_blank" href="https://www.freepik.com">
              Freepik
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.pexels.com/">
              Pexels
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="">
        <h1 className="mb-3 text-3xl font-extrabold">Follow Me !</h1>
        <ul>
          {social.map((item, index) => (
            <li key={index} className="mt-2 hover:text-slate-600">
              <a target="_blank" href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
