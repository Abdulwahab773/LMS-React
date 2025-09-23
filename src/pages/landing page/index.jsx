// import React from "react";
// import ButtonCmp from "../../components/buttonCmp";
// import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// const LandingPage = () => {
//   let navigator = useNavigate();
//   let uid = localStorage.getItem("uid");

//   return (
//     <div>
//       <Navbar/>
//       <ButtonCmp
//         title="Student Dashboard"
//         onClick={() => {
//           if (uid) {
//             navigator("/UserDeshbord");
//           } else {
//             alert("User Not Login");
//             navigator("/login");
//           }
//         }}
//       />
//       <Footer/>
//     </div>
//   );
// };

// export default LandingPage;

// ____________________________________________________________________________________________________________________ //

import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaStar,
  FaUsers,
  FaCertificate,
  FaClock,
  FaMobile,
  FaCreditCard,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaHandshake,
  FaRocket,
  FaSearch,
  FaUserPlus,
  FaVideo,
  FaAward,
  FaQuoteLeft,
} from "react-icons/fa";

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // FROM GPT:

  const heroSlides = [
    {
      title: "Learn from Industry Experts",
      subtitle:
        "Master in-demand skills with hands-on projects and real-world applications",
      img: "https://classplusapp.com/growth/wp-content/uploads/2023/09/10-Reasons-Why-Online-Teaching-is-Important.jpg",
    },
    {
      title: "Advance Your Career",
      subtitle: "Get certified and unlock new job opportunities in tech",
      img: "https://er.educause.edu/-/media/images/articles/2022/02/er21_1303_headerart_1600x900.jpg?hash=6D536162636B6607EA92AA27B04FA20C076D8DE6",
    },
    {
      title: "Learn at Your Own Pace",
      subtitle: "Flexible schedules with lifetime access to course materials",
      img: "https://www.flexjobs.com/employer-blog/wp-content/uploads/2020/10/27125140/Flexible-Jobs.png",
    },
  ];

  // Featured Courses Data
  const courses = [
    {
      title: "Full Stack Web Development",
      instructor: "Ali Ahmed",
      price: "Rs. 12,999",
      duration: "12 weeks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s",
    },
    {
      title: "Data Science Mastery",
      instructor: "Dr. Sana Khan",
      price: "Rs. 15,999",
      duration: "16 weeks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXSLPUJOyI161lZciV74Iosiyi_V1UEwAbA&s",
    },
    {
      title: "Mobile App Development",
      instructor: "Usman Riaz",
      price: "Rs. 10,999",
      duration: "10 weeks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek0dFd0xoz727peRzJZOwuQqx1yC84WbtlQ&s",
    },
    {
      title: "Digital Marketing Pro",
      instructor: "Fatima Javed",
      price: "Rs. 8,999",
      duration: "8 weeks",
      image: "/images/marketing.jpg",
    },
    {
      title: "UI/UX Design",
      instructor: "Zainab Ali",
      price: "Rs. 11,999",
      duration: "14 weeks",
      image: "/images/ui-ux.jpg",
    },
    {
      title: "Python Programming",
      instructor: "Ahmed Raza",
      price: "Rs. 7,999",
      duration: "6 weeks",
      image: "/images/python.jpg",
    },
  ];

  // Why Choose Us Features - Improved with better icons and descriptions
  const features = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Project-Based Learning",
      description:
        "Work on real-world projects that build your portfolio and showcase your skills to employers.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Expert Mentors",
      description:
        "Learn from industry professionals with 5+ years of experience in their respective fields.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Industry-Recognized Certificates",
      description:
        "Get certified with credentials that are valued by top companies worldwide.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Lifetime Access",
      description:
        "Access course materials forever, including future updates and new content.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <FaMobile className="text-3xl" />,
      title: "Learn Anywhere",
      description:
        "Mobile-friendly platform that lets you learn on your phone, tablet, or computer.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Career Support",
      description:
        "Get career guidance, resume reviews, and interview preparation assistance.",
      color: "from-teal-500 to-teal-600",
    },
  ];

  // Testimonials Data - Improved with English content
  const testimonials = [
    {
      name: "Ayesha Malik",
      course: "Web Development",
      text: "EduMaster completely transformed my career. The practical projects helped me land my first developer job within 3 months!",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      name: "Bilal Hassan",
      course: "Data Science",
      text: "The instructors break down complex concepts so well. I went from beginner to building ML models in just 4 months.",
      rating: 5,
      avatar: "👨‍🔬",
    },
    {
      name: "Sara Khan",
      course: "Digital Marketing",
      text: "The course content is incredibly comprehensive. The real-world campaigns we ran gave me the confidence to start my own agency.",
      rating: 4,
      avatar: "👩‍💼",
    },
  ];

  // How It Works Steps - Completely redesigned
  const steps = [
    {
      step: "01",
      icon: <FaSearch className="text-2xl" />,
      title: "Explore Courses",
      description:
        "Browse our catalog and find the perfect course for your career goals",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      step: "02",
      icon: <FaUserPlus className="text-2xl" />,
      title: "Enroll & Join",
      description: "Sign up and get immediate access to the learning platform",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      icon: <FaVideo className="text-2xl" />,
      title: "Start Learning",
      description:
        "Follow structured lessons with video tutorials and hands-on exercises",
      gradient: "from-pink-500 to-red-500",
    },
    {
      step: "04",
      icon: <FaAward className="text-2xl" />,
      title: "Get Certified",
      description:
        "Complete the course and earn your industry-recognized certificate",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  // FAQ Data - Professional English content
  const faqs = [
    {
      question: "What is the duration of your courses?",
      answer:
        "Our courses range from 4 to 16 weeks, depending on the complexity and depth of the subject. Each course is designed to be comprehensive yet flexible to fit your schedule.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes! We provide career support including resume building, interview preparation, and job placement assistance. While we don't guarantee employment, our graduates have a 85% success rate in landing tech jobs within 3 months.",
    },
    {
      question: "What payment options do you accept?",
      answer:
        "We accept all major credit/debit cards, bank transfers, and offer installment plans. We also provide corporate billing for team enrollments.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Absolutely! We offer a 14-day money-back guarantee. If you're not satisfied with the course within the first two weeks, we'll provide a full refund.",
    },
    {
      question: "Are the certificates recognized by employers?",
      answer:
        "Yes, our certificates are industry-recognized and valued by employers. We partner with leading tech companies to ensure our curriculum meets industry standards.",
    },
    {
      question: "Do I need any prior experience to enroll?",
      answer:
        "Most of our courses are designed for beginners. We provide prerequisite materials when needed and offer different difficulty levels to accommodate all learners.",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // GPT CHANGES:

  const startX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50) {
      nextSlide(); // swipe left → next
    }
    if (endX - startX.current > 50) {
      prevSlide(); // swipe right → prev
    }
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section with Carousel */}
        <section
          id="home"
          className="relative h-screen overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="text-white max-w-2xl animate-slide-up">
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 opacity-90">{slide.subtitle}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg cursor-pointer">
                      Explore Courses
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <FaPlay /> Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls → hide on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all backdrop-blur-sm cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all backdrop-blur-sm cursor-pointer"
          >
            <FaChevronRight />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Featured Courses Section */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Featured Courses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-relevant courses designed by experts to boost your
                career
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">By {course.instructor}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        ⏱️ {course.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </span>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg cursor-pointer">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Completely Redesigned */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose EduMaster?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for thousands of
                successful learners worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`bg-gradient-to-r ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Improved */}
        <section
          id="testimonials"
          className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Student Success Stories
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Hear from our graduates who have transformed their careers with
                our courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-blue-300 text-sm">
                        {testimonial.course} Graduate
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-blue-300 mb-2" />
                  <p className="text-gray-200 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section - Completely Redesigned */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Start Learning in 4 Simple Steps
              </h2>
              <p className="text-xl text-gray-600">
                Your journey to mastery begins here
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative group">
                    <div
                      className={`bg-gradient-to-r ${step.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="absolute -top-2 -right-2 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {step.step}
                      </div>
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Professional Redesign */}
        <section
          id="faq"
          className="py-20 bg-gradient-to-b from-white to-blue-50 relative"
        >
          <div className="container mx-auto px-4">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find quick answers to the most common questions about our
                courses and platform.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                    activeFAQ === index
                      ? "border-l-4 border-blue-600 bg-white shadow-lg"
                      : "bg-white/70 backdrop-blur-sm"
                  }`}
                >
                  <button
                    className="flex justify-between cursor-pointer  items-center w-full p-6 text-left transition-colors duration-200"
                    onClick={() =>
                      setActiveFAQ(activeFAQ === index ? null : index)
                    }
                  >
                    <span className="text-lg font-semibold  text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <FaChevronRight cursor={"pointer"}
                      className={`flex-shrink-0 transform transition-transform duration-300 ${
                        activeFAQ === index
                          ? "rotate-90 text-blue-600"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      activeFAQ === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Support CTA - Light Version */}
            <div className="text-center mt-16 p-10 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Still have questions?
              </h3>
              <p className="mb-6 text-gray-600">
                Our support team is always ready to guide you and resolve your
                queries.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all cursor-pointer">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <FaRocket
              color="yellow"
              className="text-5xl mx-auto mb-6 opacity-90"
            />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Launch Your Career?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of successful students who have transformed their
              lives with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                Browse All Courses
              </button>
              <button className="border-2 border-white cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg">
                Book Free Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
