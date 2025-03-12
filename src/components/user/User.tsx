"use client";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = (): any => {
  return (
    <div className="w-full hover:bg-gray-200 hover:cursor-pointer px-2 py-2 rounded-lg">
      <span className="flex items-center gap-4">
        <span className="bg-gray-100 px-1 py-4 rounded-full">
          <FontAwesomeIcon className="h-12 w-12" icon={faUser} />
        </span>
        <span>
          <p className="font-bold">User Name</p>
          <p className="text-gray-500">Last chat seen</p>
        </span>
      </span>
    </div>
  );
};

export default User;
