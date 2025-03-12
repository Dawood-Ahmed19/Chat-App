"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "../user/User";

const Sidebar = (): any => {
  return (
    <section className="w-[360px] py-4 px-8 flex flex-col gap-8">
      <span className="px-4 py-2 rounded-full bg-gray-200 flex items-center gap-4">
        <FontAwesomeIcon className="text-gray-500" icon={faMagnifyingGlass} />
        <input
          placeholder="search"
          type="text"
          className="focus:outline-none"
        />
      </span>
      <span>
        <User />
      </span>
    </section>
  );
};

export default Sidebar;
