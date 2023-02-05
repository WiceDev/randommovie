import axios from "axios";
import React from "react";

function App() {
  const type = "movie";
  const url = `https://api.themoviedb.org/3/trending/${type}/week?api_key=c01632f2b132d2f36f9a3d5c41629f1b&region=US&language=en-US&page=1`;

  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const fetchData = () => {
    axios.get(url).then(({ data }) => {
      const random = Math.floor(Math.random() * data.results.length);
      setData(data.results[random]);
      setLoading(false);
    });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading && loading}
      {data && (
        <div className="w-screen h-screen text-white flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <div className="text-3xl font-semibold text-center">
              {data.title}
            </div>
            <div
              className="relative group cursor-pointer w-48 "
              onClick={() => {
                fetchData();
              }}
            >
              <img
                className="w-full rounded-lg z-50 h-full"
                src={imageUrl + data.poster_path}
                alt=""
              />
            </div>
            <div className="w-80 text-gray-400 line-clamp-3 ">
              {data.overview}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
