import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <h2 className="book" style={{ color: theme.heading }}>
        Am a heading
      </h2>
      <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme{" "}
        {isDark ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} />}
      </button>
    </div>
  );
};

export default App;
