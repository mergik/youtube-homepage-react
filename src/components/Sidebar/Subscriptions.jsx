import React from "react";


const Subscriptions = () => {

  return (
    <div className="border-b space-y-1 text-sm border-gray-700 bg-green-500">
      <p className="rounded-lg p-2 text-lg items-center hover:bg-gray-800 cursor-pointer space-x-5">
        Subscriptions
      </p>
     <section className="flex my-4 space-x-2 text-lg items-center pl-3 pb-2 cursor-pointer hover:bg-gray-600">
        <img
          src="https://picsum.photos/16"
          className=" rounded-full w-[25px] h-[25px] "
          alt="channel_icon"
        />
        <div className="justify-items-center pl-4">
          <p className="text-wrap w-[272px] text-gray-50">Citizen TV Kenya</p>
        </div>
      </section>

      <section className="flex my-4 space-x-2 text-lg items-center pl-3 pb-2 cursor-pointer hover:bg-gray-600">
        <img
          src="https://picsum.photos/16"
          className=" rounded-full w-[25px] h-[25px] "
          alt="channel_icon"
        />
        <div className="justify-items-center pl-4">
          <p className="text-wrap w-[272px] text-gray-50">React Native</p>
        </div>
      </section>

      <section className="flex my-4 space-x-2 text-lg items-center pl-3 pb-2 cursor-pointer hover:bg-gray-600">
        <img
          src="https://picsum.photos/16"
          className=" rounded-full w-[25px] h-[25px] "
          alt="channel_icon"
        />
        <div className="justify-items-center pl-4">
          <p className="text-wrap w-[272px] text-gray-50">JavaScript Mastery</p>
        </div>
      </section>

      <section className="flex my-4 space-x-2 text-lg items-center pl-3 pb-2 cursor-pointer hover:bg-gray-600">
        <img
          src="https://picsum.photos/16"
          className=" rounded-full w-[25px] h-[25px] "
          alt="channel_icon"
        />
        <div className="justify-items-center pl-4">
          <p className="text-wrap w-[272px] text-gray-50">Payload</p>
        </div>

      </section>

      <section className="flex my-4 space-x-2 text-lg items-center pl-3 pb-2 cursor-pointer hover:bg-gray-600">
        <img
          src="https://picsum.photos/16"
          className=" rounded-full w-[25px] h-[25px] "
          alt="channel_icon"
        />
        <div className="justify-items-center pl-4">
          <p className="text-wrap w-[272px] text-gray-50">Safari Compus</p>
        </div>

      </section>

      {/* Show More */}
      <div className="flex rounded-lg p-2 items-center text-lg pl-4 hover:bg-gray-800 cursor-pointer space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <p className="pl-4">Show More</p>
      </div>

    </div>
  );
};

export default Subscriptions;
