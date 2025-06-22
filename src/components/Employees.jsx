import { FaLinkedin } from "react-icons/fa";

import Dev from "../assets/Footer/contributer_img.jpg"
import Yashika from "../assets/Team/Yashika.webp";
import Chirag from "../assets/Team/Chirag.webp";
import Pawani from "../assets/Team/Pawani.webp";
import Harsimran from "../assets/Team/Harsimran.webp";
import Somya from "../assets/Team/Somya.jpg";

function Employees() {
    const Employees = [

        {
            name: "Dev Raj Singh",
            description: "Full Stack Developer",
            image: Dev,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/dev-raj-singh04",
            premium: false,
        },
        {
            name: "Somya Tyagi",
            description: "Front-End Developer",
            image: Somya,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/tyagi-somya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
        {
            name: "Harsimran Singh",
            description: "Graphic Designer",
            image: Harsimran,
            buttonText: "Connect",
            linkedin: "http://www.linkedin.com/in/harsimran-singh-1197a431b",
            premium: false,
        },
        {
            name: "Yashika Verma",
            description: "Growth Manager",
            image: Yashika,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/yashika-verma-389166355",
            premium: false,
        },
        {
            name: "Chirag Singh",
            description: "Cybersecurity Evangelist",
            image: Chirag,
            buttonText: "Connect",
            linkedin: "https://linkedin.com/in/chirag-xbit",
            premium: false,
        },
        {
            name: "Pawani",
            description: "Growth Partner",
            image: Pawani,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/pawani-bhardwaj-911613355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
    ];

    return (
        <section className="w-full flex justify-center px-4 py-20">
            <div className="w-full max-w-6xl p-6 md:p-10 rounded-xl bg-amber-50 dark:bg-blue-950 shadow">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                        Meet Our <span className="dark:text-yellow-50">Officers</span> Team
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Empowering innovation and growth by uniting dedicated minds to shape the future of our tech community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Employees.map((employee, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={employee.image}
                                alt={employee.name}
                                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-yellow-dark:text-yellow-50 mb-3"
                                loading="lazy"
                            />
                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">{employee.name}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{employee.description}</p>
                            <div className="mt-4 flex items-center justify-center gap-3">
                                {employee.linkedin && (
                                    <a
                                        href={employee.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <button className="bg-yellow-200 text-gray-800 text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                                            {employee.buttonText}
                                        </button>
                                    </a>
                                )}
                                {employee.linkedin && (
                                    <a
                                        href={employee.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl transition-transform duration-200 hover:scale-125"
                                    >
                                        <FaLinkedin
                                            className={`${employee.premium ? 'text-[#F8C77E]' : 'text-[#0A66C2]'
                                                } drop-shadow-md`}
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Employees