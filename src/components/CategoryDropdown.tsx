import React, { useState, useEffect, useRef } from "react";

interface CategoryDropdownProps {
  onTypeChange: (typeValue: string) => void;
}

function CategoryDropdown({ onTypeChange }: CategoryDropdownProps) {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [type, setType] = useState<string>("None");

  const showMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menu]);

  const changeType = (event: any) => {
    console.log(event);
    if (event?.target.innerText == "None") {
      setType("None");
      onTypeChange(event.target.value);
      showMenu();
    }
    if (event?.target.innerText == "Sports & Hobbies") {
      setType("Sports & Hobbies");
      onTypeChange(event.target.value);
      showMenu();
    }
    if (event?.target.innerText == "Entertainment") {
      setType("Entertainment");
      onTypeChange(event.target.value);
      showMenu();
    }
    if (event?.target.innerText == "Social Activities") {
      setType("Social Activities");
      onTypeChange(event.target.value);
      showMenu();
    }
  };

  return (
    <div className="relative inline-block text-center items-center w-full">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={showMenu}
        >
          {type}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <div
        ref={menuRef}
        className={
          menu
            ? "absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            : "hidden absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
        <div
          onClick={changeType}
          className="text-dark block px-4 py-2 text-sm hover:bg-primary cursor-pointer"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
        >
          {" "}
          None{" "}
        </div>
        <div
          onClick={changeType}
          className="text-dark block px-4 py-2 text-sm hover:bg-primary cursor-pointer"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-0"
        >
          Sports & Hobbies{" "}
        </div>
        <div
          onClick={changeType}
          className="text-dark block px-4 py-2 text-sm hover:bg-primary cursor-pointer"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-1"
        >
          Entertainment
        </div>
        <div
          onClick={changeType}
          className="text-dark block px-4 py-2 text-sm hover:bg-primary cursor-pointer"
          role="menuitem"
          tabIndex={-1}
          id="menu-item-2"
        >
          Social Activities
        </div>
      </div>
    </div>
  );
}

export default CategoryDropdown;
