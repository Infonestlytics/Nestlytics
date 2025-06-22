import card1 from '../assets/Universities/card_1.png'
import card2 from '../assets/Universities/card_2.jpeg'

function Universities() {
    const cardsData = [
        {
            id: 1,
            title: "Chandigarh University",
            image: card1,
            description: "Experience the spiritual and cultural essence while connecting with passionate tech minds in Varanasi.",
        },
        {
            id: 2,
            title: "DBRAU-AGRA",
            image: card2,
            description: "Join a growing community of innovators and tech enthusiasts in the planned city of Chandigarh.",
        },
        {
            id: 4,
            title: "Add Your University",
            isCustom: true,
            description: "Start a local chapter in your city and build a network of learners, builders, and creators.",
        },
    ];

    return (
        <section id='universities' className="bg-gray-50 dark:bg-black p-8 pt-20">
            <h1 className="text-5xl font-bold text-center dark:text-yellow-50  mb-2">
                Academic Excellence
                <strong className="dark:text-yellow-50"> Partners </strong>
            </h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 pb-16">
                A comfort space for students that NestLytics provides to build
                skills, network and grow in data.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {cardsData.map((card) => (
                    <a
                        key={card.id}
                        href={card.isCustom ? "https://forms.gle/nqfRTzApfPphGgLT8" : "#"}
                        className="group relative block bg-black rounded-xl overflow-hidden"
                    >
                        {!card.isCustom ? (
                            <img
                                alt={card.title}
                                src={card.image}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 opacity-75 group-hover:opacity-50 transition-opacity z-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 24 24"
                                    className="z-10"
                                >
                                    <circle cx="12" cy="12" r="12" fill="white" />
                                    <path d="M12 7v10M7 12h10" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        )}

                        <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col justify-between h-full z-10">
                            <p className="text-xl font-bold text-white sm:text-2xl">
                                {card.title}
                            </p>

                            <div className="mt-24 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Universities