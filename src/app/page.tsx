"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {FaBrain, FaCode, FaDatabase, FaGlobe, FaHandshake, FaMemory, FaTrophy, FaUserFriends} from "react-icons/fa";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";

export default function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <div>
            <Navbar/>

            {/*<p>My dedication to my passions and pursuits is admirable, earning my respect and admiration from those around me.</p>*/}
            <div className="relative w-full h-[400px]">

                <Carousel {...settings} className="w-full h-full">
                    <div className="w-full h-[400px]">
                        <img src="/my_logo.png" alt="Slide 1" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-[400px]">
                        <img src="/my_skills.png" alt="Slide 2" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-[400px]">
                        <img src="/don_bebe.png" alt="Slide 3" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-[400px]">
                        <img src="/my_skill.png" alt="Slide 4" className="w-full h-full object-cover"/>
                    </div>
                </Carousel>

                {/* Fixed Heading and Typewriter Effect Below */}
                <div
                    className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] text-center">
                    <p className="text-orange-500 text-2xl md:text-4xl font-bold drop-shadow-lg">
                        Flobert Mutsa Portfolio
                    </p>
                </div>

                <div
                    className="absolute top-[5rem] md:top-[9rem] left-1/2 transform -translate-x-1/2 w-full max-w-[90%] text-center">
                    <div className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                        <Typewriter
                            options={{
                                strings: [
                                    "Building full-stack solutions with precision — from sleek UIs using React, MUI, and Tailwind CSS to powerful backends with Node.js, Express, and Java Spring Boot.",
                                    "Expertise in scalable systems\n⇒ Leveraging MySQL, PostgreSQL & Sequelize for robust data management in modern applications.",
                                    "Bridging frontend & backend fluently\n⇒ With hands-on experience in React, Next.js, and RESTful APIs, I build efficient, user-focused solutions.",
                                    "Beyond web development\n⇒ I’ve developed Java Swing apps, backend systems, and deployed chatbot projects with real-world impact.",
                                    "Why work with me?\n⇒ Full-stack mastery\n→ Clean, scalable code\n→ API-driven development\n→ Real-world deployment experience",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>

            </div>

            {/* About Section*/}
            <section id="about" className="bg-white py-5 sm:py-8">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                            About Flobert Mutsa
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            I am a driven individual with clear sense of purpose and my determination is inspiring and I
                            tackle challenges head-on with a resolute mindset.
                            My focus is laser-sharp allowing me to navigate distractions and stay on track even when
                            faced with obstacles.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">

                        <li>
                            <div className="flex items-center gap-x-6">
                                <FaUserFriends className="size-16 rounded-full text-orange-500 text-5xl"/>
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Transparency
                                        & Collaboration</h3>
                                    <p className="text-sm/6 text-gray-600 mt-2">
                                        I value open communication and teamwork. My ability to work collaboratively and
                                        share ideas freely makes me a valuable asset to any team or project.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <FaBrain className="size-16 rounded-full text-orange-500 text-5xl"/>
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                                        Problem Solving
                                    </h3>
                                    <p className="text-sm/6 text-gray-600 mt-2">
                                        With a calm and level-headed demeanor, am able to think critically and make
                                        informed decisions even in high-pressure situations.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <FaTrophy className="size-16 rounded-full text-orange-500 text-5xl"/>
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Time
                                        Management</h3>
                                    <p className="text-sm/6 text-gray-600 mt-2">
                                        With a keen sense of urgency and focus, I consistently meet deadlines and
                                        deliver results efficiently.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center gap-x-6">
                                <FaHandshake className="size-16 rounded-full text-orange-500 text-5xl"/>
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                                        Networking
                                    </h3>
                                    <p className="text-sm/6 text-gray-600 mt-2">
                                        With a warm and approachable demeanor, I effortlessly connect with others,
                                        fostering meaningful connections and opportunities.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Technical Skills*/}
            <section id="" className="py-5 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Technical Expertise</h2>
                    <p className="text-gray-600 mt-2">
                        With a strong foundation in technical expertise I posses a versatile skill set that enables me
                        to navigate complex challenges and drive innovative solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaGlobe className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Web App Development</h3>
                                <p className="text-gray-600 text-sm mt-5">
                                    Proficient in MERN (MySQL, Express.js, React.js, Node.js) full-stack web application
                                    development, I design and build
                                    scalable, efficient and user-friendly web application that deliver seamless user
                                    experiences. Designing and building RESTful APIs to enable communication between
                                    frontend and backend system, facilitating data exchange. integration and
                                    scalability.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaCode className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Backend Development</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Skilled in crafting robust backend solutions using:</p>
                                <li className="text-gray-600 text-sm mt-2">Express.js for Node.js environments.</li>
                                <li className="text-gray-600 text-sm mt-2">Java Spring Boot for scalable enterprise
                                    applications.
                                </li>
                                <li className="text-gray-600 text-sm mt-2">C# for building Windows-based and cross
                                    platform applications.
                                </li>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaDatabase className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Database Management</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Proficient in designing, developing and managing relational databases using:
                                </p>
                                <li className="text-gray-600 text-sm mt-2">MySQL for scalable web applications.</li>
                                <li className="text-gray-600 text-sm mt-2">PostgreSQL for complex data-driven
                                    solutions
                                </li>
                                <p className="text-gray-600 text-sm mt-2">
                                    I optimize database performance, ensure data integrity and implement efficient
                                    querying strategies to drive business insights.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaMemory className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Caching</h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    Utilizing Redis for efficient caching solutions, I improve application performance,
                                    reduce latency and enhance user experience by storing accessed data in memory. Key
                                    benefits include:
                                </p>
                                <li className="text-gray-600 text-sm mt-2">Reduced database queries and load.</li>
                                <li className="text-gray-600 text-sm mt-2">Faster page loads and improved
                                    responsiveness.
                                </li>
                            </CardContent>
                        </Card>


                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}
