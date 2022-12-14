import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { colors } from "../utils/styles/colors";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div style={styles.searchItem}>
      <Form.Control
        style={styles.form}
        placeholder="Search ..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Button
        style={styles.button}
        variant="secondary"
        type="submit"
        onClick={() => {
          if (!!search) {
            onSearch(search);
            setSearch("");
          }
        }}
      >
        Search
      </Button>
    </div>
  );
};

const styles = {
  searchItem: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    marginRight: "2%",
  },
  form: {
    width: "40%",
    marginRight: 5,
  },
  button: {
    width: "20%",
    backgroundColor: colors.primary[3],
  },
};

export default Search;
