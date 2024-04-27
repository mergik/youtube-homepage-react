import React from "react";

const More = () => {
  return (
    <div className="border-b space-y-1 text-sm border-gray-700">
      <p className="flex rounded-lg p-2 items-center text-lg font-bold">
        More from YouTube
      </p>

      <div className="flex rounded-lg p-2 items-center hover:bg-gray-800 cursor-pointer space-x-5">
        <img
          src="https://img.icons8.com/?size=48&id=19318&format=png"
          className="h-6"
        ></img>
        <p>YouTube Premium</p>
      </div>

      <div className="flex rounded-lg p-2 items-center hover:bg-gray-800 cursor-pointer space-x-5">
        <img
          src="https://img.icons8.com/?size=48&id=RffCjm5IOnEC&format=png"
          className="h-6"
        />
        <p>YouTube Studio</p>
      </div>
      <div className="flex rounded-lg p-2 items-center hover:bg-gray-800 cursor-pointer space-x-5">
        <img
          src="https://img.icons8.com/?size=48&id=V1cbDThDpbRc&format=png"
          className="h-6"
        />
        <p>YouTube Music</p>
      </div>
      <div className="flex rounded-lg p-2 items-center hover:bg-gray-800 cursor-pointer space-x-5">
        <img
          src="https://img.icons8.com/?size=48&id=80495&format=png"
          className="h-6"
        />
        <p>YouTube Kids</p>
      </div>
    </div>
  );
};

export default More;
