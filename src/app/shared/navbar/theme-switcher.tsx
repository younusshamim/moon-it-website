import { useTheme } from "next-themes";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="text-2xl cursor-pointer mx-4"
      title={theme === "light" ? "Dark Mode" : "Light Mode"}
      onClick={toggleTheme}
    >
      {theme === "light" ? <IoMdMoon /> : <MdSunny />}
    </div>
  );
};

export default ThemeSwitcher;
