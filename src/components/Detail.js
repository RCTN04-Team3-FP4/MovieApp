import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import ReactLoading from "react-loading";

const Detail = (props) => {
  const { detail, loading } = useSelector((state) => state.detail);

  return (
    <Modal {...props} size="xl" centered style={styles.detail}>
      {loading && (
        <div style={styles.loading}>
          <ReactLoading type="spinningBubbles" color="black" />
        </div>
      )}
      {!loading && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>{detail.Title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={styles.flex}>
            <img src={detail.Poster} alt={detail.Title} />
            <div style={styles.content}>
              <h2>Synopsis</h2>
              <p>{detail.Plot}</p>
              <div style={styles.flex}>
                <div style={{ flex: 1 }}>
                  <h2>Information</h2>
                  <h6>Genre: {detail.Genre}</h6>
                  <h6>Released: {detail.Released}</h6>
                  <h6>Duration: {detail.Runtime}</h6>
                  <h6>Director: {detail.Director}</h6>
                  <h6>Writer: {detail.Writer}</h6>
                  <h6>Actors: {detail.Actors}</h6>
                </div>
                <div style={{ flex: 1 }}>
                  <h2>Statistics</h2>
                  <h6>Metascore: {detail.Metascore}</h6>
                  <h6>imdbRating: {detail.imdbRating}</h6>
                  <h6>Voters: {detail.imdbVotes}</h6>
                </div>
              </div>
            </div>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

const styles = {
  detail: {
    fontFamily: "'Poppins', sans-serif",
  },
  loading: {
    display: "flex",
    height: "60vh",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginLeft: 20,
  },
  flex: {
    display: "flex",
  },
};

export default Detail;
