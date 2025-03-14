"use Client";

import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = (): any => {
  return (
    <div className="h-[70px] w-full px-4 flex items-center justify-between">
      <span className="flex items-center gap-2">
        <FontAwesomeIcon
          className="bg-gray-200 p-3 text-sm rounded-full"
          icon={faUser}
        />
        <span>
          <p className="font-bold text-sm">Name of User</p>
          <p className="text-xs">last seen</p>
        </span>
      </span>
      <span className="flex items-center gap-4 mr-5">
        <FontAwesomeIcon
          className="text-gray-600 hover:cursor-pointer"
          icon={faMagnifyingGlass}
        />
        <FontAwesomeIcon
          className="text-gray-600 hover:cursor-pointer"
          icon={faPhone}
        />
        <FontAwesomeIcon
          className="text-gray-600 hover:cursor-pointer"
          icon={faEllipsisVertical}
        />
      </span>
    </div>
  );
};

export default TopBar;
