import { colors } from "../utils/styles/colors";
import Search from "./Search";

const Header = ({ onSearch }) => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>MovieApp</h1>
      <Search style={styles.search} onSearch={onSearch} />
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    backgroundColor: colors.primary[4],
    padding: "1%",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 50,
    fontWeight: "bold",
    color: colors.primary[1],
    fontFamily: "'Poppins', sans-serif",
    marginLeft: "3%",
  },
};

export default Header;
