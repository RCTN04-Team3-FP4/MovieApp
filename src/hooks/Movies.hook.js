import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";

export const useMovies = ({ search }) => {
  const [modalShow, setModalShow] = useState(false);
  const { movies, loading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();
  const doFetchMovies = () => {
    dispatch(fetchMovies(search));
  };
  useEffect(() => {
    doFetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return { modalShow, setModalShow, movies, loading };
};
