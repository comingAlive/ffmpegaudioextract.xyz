import Dark from "@/components/icons/Dark";
import Light from "@/components/icons/Light";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [option, setOption] = useState(() => theme);

  function handleOptions(e) {
    setOption(e.target.value);
    setTheme(e.target.value);
  }

  return (
    <footer className="self-center w-screen max-w-xs h-20 font-medium">
      <div className="flex justify-between items-center">
        <span>
          <span className="mr-1">Created by</span>
          <Link href={"https://garbuz.dev"}>
            <a className="text-blue-600">Max</a>
          </Link>
          .
        </span>
        <div>
          <label>
            <div className="flex relative justify-center items-center">
              <span className="absolute left-2 pointer-events-none">
                {theme === "dark" ? <Dark /> : <Light />}
              </span>
              <select
                onChange={handleOptions}
                value={option}
                className="px-10 transition ease-in duration-100 rounded-sm bg-white border border-gray-300 appearance-none dark:border-gray-700 dark:bg-black"
                aria-label="Change color theme"
              >
                {/*<option value="system">System</option>*/}
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <span className="absolute right-2 pointer-events-none">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M17 8.517L12 3 7 8.517M7 15.48l5 5.517 5-5.517" />
                </svg>
              </span>
            </div>
          </label>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
