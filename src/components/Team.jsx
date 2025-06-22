import { FaLinkedin } from "react-icons/fa";

import Kritarth from "../assets/Team/Kritarth.webp";
import Prakhar from "../assets/Team/Prakhar.webp";
import Sheetesh from "../assets/Team/Sheetesh.webp";
import Chanakya from "../assets/Team/Chanakya.jpeg";
import Sonu from "../assets/Team/Sonu.webp";
import WorkingMembers from './Employees';


function Team() {
    const foundingMembers = [
        {
            name: "Prakhar Kumar Singh",
            description: "Founder",
            image: Prakhar,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/prakharkumarsingh2992?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: false,
        },
        {
            name: "Kritarth Singh",
            description: "Co-Founder",
            image: Kritarth,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/kritarth-singh-chauhan-5877aa220/",
            premium: false,
        },
        {
            name: "Sheetesh Kumar",
            description: "Co-Founder",
            image: Sheetesh,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/sheeteshkr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            premium: true,
        },
        {
            name: "Chanakya Pandey",
            description: "Co-Founder",
            image: Chanakya,
            buttonText: "Connect",
            linkedin: "https://www.linkedin.com/in/chanakyapandey",
            premium: false,
        },
        {
            name: "Sonu Kumar",
            description: "Mentor",
            image: Sonu,
            buttonText: "Connect",
            linkedin: "http://www.linkedin.com/in/i-sonugupta",
            premium: false,
        },
    ];

    return (
        <section id='team' className="w-full flex justify-center px-4 py-20 bg-gray-100 dark:bg-black">
            <div className="w-full max-w-6xl p-6 md:p-10 rounded-xl bg-white dark:bg-gray-900 shadow">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                        Join Our <span className="dark:text-yellow-50">Leadership</span> Team
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Share your expertise, mentor others, and help shape the future of our tech community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {foundingMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-yellow-dark:text-yellow-50 mb-3"
                                loading="lazy"
                            />
                            <h2 className="text-base font-semibold text-gray-900 dark:text-white">{member.name}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{member.description}</p>
                            <div className="mt-4 flex items-center justify-center gap-3">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                    >
                                        <button className="bg-yellow-200 text-gray-800 text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                                            {member.buttonText}
                                        </button>
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl transition-transform duration-200 hover:scale-125"
                                    >
                                        <FaLinkedin
                                            className={`${member.premium ? 'text-[#F8C77E]' : 'text-[#0A66C2]'
                                                } drop-shadow-md`}
                                        />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className=' flex justify-center'>
                    <WorkingMembers />
                </div>
            </div>
        </section>
    )
}

export default Team