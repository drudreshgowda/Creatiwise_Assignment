import React from "react";
import { HomeIcon, DocumentTextIcon, CogIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "Generated Articles", href: "#", icon: HomeIcon, current: true },
  { name: "Published Articles", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Scheduled Articles", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Archived Articles", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen bg-white text-gray-800 shadow-lg border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-300 font-extrabold text-2xl tracking-wide">
        abun
      </div>
      <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-blue-100 text-blue-700 font-semibold shadow rounded-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              "group flex items-center px-3 py-2 text-base rounded-lg transition-colors duration-300"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600",
                "mr-4 h-6 w-6"
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-gray-300 text-sm text-gray-500">
        © 2024 abun
      </div>
    </div>
  );
}
