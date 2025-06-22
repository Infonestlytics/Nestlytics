import card1 from '../assets/Features/card_1.jpg'
import card2 from '../assets/Features/card_2.jpg'
import card3 from '../assets/Features/card_3.jpg'
import card4 from '../assets/Features/card_4.jpg'
import card5 from '../assets/Features/card_5.jpg'
import card6 from '../assets/Features/card_6.jpg'
import card7 from '../assets/Features/card_7.jpg'


function Features() {
    const cardsData = [
        {
            id: 1,
            title: "Platform to build their Ideas",
            image: card1,
            description: "Bring your innovative ideas to life with the right tools, mentors, and a supportive community.",
        },
        {
            id: 2,
            title: "Platform to help others aspirants",
            image: card2,
            description: "Share knowledge, resources, and guidance to uplift fellow learners and aspiring creators.",
        },
        {
            id: 3,
            title: "Try new Technologies with others",
            image: card3,
            description: "Explore and experiment with the latest tech alongside like-minded enthusiasts.",
        },
        {
            id: 4,
            title: "Networking meetups",
            image: card4,
            description: "Connect with peers, mentors, and industry experts to expand your professional circle.",
        },
        {
            id: 5,
            title: "Online workshops",
            image: card5,
            description: "Join interactive sessions to learn new skills, build projects, and grow from anywhere.",
        },
        {
            id: 6,
            title: "Potential talents",
            image: card6,
            description: "Discover and collaborate with emerging talents across diverse domains and interests.",
        },
        {
            id: 7,
            title: "Make your customised ATS friendly resume with us",
            image: card7,
            description: "CONTACT US FOR MORE DETAILS",
        },
    ];

    return (
        <section id='features' className="bg-gray-50 dark:bg-black p-8 pt-20">
            <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-2">
                Your Place in Our
                <strong className="dark:text-yellow-50"> Ecosystem </strong>
            </h1>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8 pb-16">
                Discover the unique elements that make NestLytics a place where your
                ideas can thrive and your skills can grow.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cardsData.map((card) => (
                    <article key={card.id} className="group">
                        <img
                            alt={card.title}
                            src={card.image}
                            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
                        />

                        <div className="p-4">
                            <a href="#contactus">
                                <h3 className="text-lg font-medium text-black dark:text-white">
                                    {card.title}
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                                {card.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Features