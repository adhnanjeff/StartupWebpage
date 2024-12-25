import React from 'react';

const CustomForm = () => {
  return (
    <section className="bg-[#00031D] text-white p-10">
    <div className="max-w-4xl mx-auto">
        <p className="text-sm tracking-widest mb-4">-------Contact</p>
        <h1 className="text-4xl font-bold mb-4">Have a Project in mind?</h1>
        <p className="text-lg">Let's build something together!</p>
        <p className="mt-1 text-sm">-... ..- ... .. -. . ... ...</p>

        
        <form className="bg-[#1a1a2e] p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>
            
            {/* Last Name */}
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="xxx@email.com"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="Requesting Demo"
                className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6 relative">
            <label className="block text-sm mb-2">Your Message</label>
            <textarea
              placeholder="Your Message..."
              rows={4}
              className="w-full bg-transparent border border-gray-500 rounded-lg p-3 focus:border-white outline-none"
              required
            />
            {/* Send Button */}
            <button
              type="submit"
              className="absolute bottom-2 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-3-3v6m0 4v-6"
                />
              </svg>
            </button>
          </div>
        </form>

      </div>
    </section>
  );
};

export default CustomForm;

// import React from "react";

// const CustomForm = () => {
//   return (
//     <section className="bg-[#00031D] text-white p-10">
//       <div className="max-w-4xl mx-auto">
//         <p className="text-sm tracking-widest mb-4">-------Contact</p>
//         <h1 className="text-4xl font-bold mb-4">Have a Project in mind?</h1>
//         <p className="text-lg mb-8">Let's build something together!</p>

//         <form className="bg-[#1a1a2e] p-8 rounded-lg shadow-lg">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-sm mb-2">First Name</label>
//               <input
//                 type="text"
//                 placeholder="John"
//                 className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block text-sm mb-2">Last Name</label>
//               <input
//                 type="text"
//                 placeholder="Doe"
//                 className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//             {/* Email */}
//             <div>
//               <label className="block text-sm mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="xxx@email.com"
//                 className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
//                 required
//               />
//             </div>

//             {/* Subject */}
//             <div>
//               <label className="block text-sm mb-2">Subject</label>
//               <input
//                 type="text"
//                 placeholder="Requesting Demo"
//                 className="w-full bg-transparent border-b border-gray-500 focus:border-white outline-none py-2"
//                 required
//               />
//             </div>
//           </div>

//           {/* Message */}
//           <div className="mt-6">
//             <label className="block text-sm mb-2">Your Message</label>
//             <textarea
//               placeholder="Your Message..."
//               rows={4}
//               className="w-full bg-transparent border border-gray-500 rounded-lg p-3 focus:border-white outline-none"
//               required
//             />
//           </div>

//           {/* Slider Below the Message Box */}
//           <div className="mt-6 relative">
//             <p className="text-sm mb-2 text-gray-400">Swipe to Send</p>
//             <div className="bg-gray-700 h-12 w-full rounded-full flex items-center px-2 relative overflow-hidden">
//               {/* Slider Handle */}
//               <div
//                 className="bg-gradient-to-r from-blue-600 to-indigo-600 h-10 w-10 rounded-full absolute left-2 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
//                 draggable="true"
//                 onDragEnd={(e) => {
//                   const containerWidth =
//                     e.target.parentElement.getBoundingClientRect().width;
//                   const buttonWidth = e.target.getBoundingClientRect().width;

//                   if (e.pageX >= containerWidth - buttonWidth) {
//                     alert("Message Sent!");
//                   }
//                 }}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12h6m-3-3v6"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CustomForm;
