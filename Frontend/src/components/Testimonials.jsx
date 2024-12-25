import React from 'react';
import { FaUser, FaStar } from 'react-icons/fa';
import MyIcon from "../assets/messageIcon.svg";

const Testimonials = () => {
  const testimonials = [
    {
      image: <FaUser className="text-gray-400 w-8 h-8" />,
      name: "John Doe",
      review: `This company has truly transformed my online presence. When I first launched my business, I struggled to create a website that effectively connected with my audience. With their innovative design and development services, I was able to build a visually stunning and user-friendly platform. The team’s expertise helped me enhance customer engagement, streamline my operations, and see significant growth. They took the time to understand my goals and tailored every feature to suit my needs. Their commitment to quality and customer success has been evident every step of the way. Thanks to their support and I highly recommend everyone.`,
      rating: 5,
    },
    {
      image: <FaUser className="text-gray-400 w-8 h-8" />,
      name: "Jane Smith",
      review: "Exceptional service and great results. Highly recommended!",
      rating: 4,
    },
    {
      image: <FaUser className="text-gray-400 w-8 h-8" />,
      name: "Mike Johnson",
      review: "A wonderful experience working with this team. Fantastic outcomes!",
      rating: 5,
    },
    {
      image: <FaUser className="text-gray-400 w-8 h-8" />,
      name: "Emily Davis",
      review: "They exceeded my expectations in every way possible.",
      rating: 5,
    },
    {
      image: <FaUser className="text-gray-400 w-8 h-8" />,
      name: "Alex Lee",
      review: "Professional, efficient, and results-driven. Couldn't ask for more!",
      rating: 4,
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-[#00031D] text-white p-10">

      <div className="mb-10">
        <h3 className="text-sm text-white mb-2 tracking-wide">
          -------Testimonials
        </h3>
        <h1 className="text-5xl font-extrabold mb-4">Journeys We've Powered</h1>
        <div className="flex items-center space-x-1">
          <img src={MyIcon} alt="Custom Icon" className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-2 row-span-2 bg-[#1a1a2e] rounded-[30px] p-6 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-[#1B203D] rounded-full flex items-center justify-center mr-4">
              {testimonials[0].image}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{testimonials[0].name}</h3>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(testimonials[0].rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-400 flex-grow">{testimonials[0].review}</p>
        </div>

        {testimonials.slice(1).map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] rounded-[20px] p-6 flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#1a1a2e] rounded-full flex items-center justify-center mr-4">
                {testimonial.image}
              </div>
              <div>
                <h3 className="text-base font-medium">{testimonial.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-3">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Testimonials;


