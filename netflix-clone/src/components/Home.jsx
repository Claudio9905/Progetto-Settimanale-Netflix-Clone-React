import GalleryMovies from "./GalleryMovies";

const endpoint1 =
  "http://www.omdbapi.com/?apikey=a0ce6542&S=The_Lord_Of_The_Rings";
const endpoint2 = "http://www.omdbapi.com/?apikey=a0ce6542&S=Superman";
const endpoint3 = "http://www.omdbapi.com/?apikey=a0ce6542&S=Disney";

const Home = () => {
  return (
    <>
      <div className=" d-flex justify-content-start mt-2" id="title-home">
        <h1 className="text-light " id="title-page">
          Movies
        </h1>
      </div>
      <div className=" d-flex flex-column align-items-center m-4 p-4">
        <div className="d-flex justify-content-center align-items-center p-3 title-gallery">
          <h3 className=" text-light ">The Lord Of The Rings</h3>
        </div>
        <GalleryMovies endpoint={endpoint1} />
      </div>
      <div className=" d-flex flex-column align-items-center mt-3 p-4">
        <div className="d-flex justify-content-center align-items-center p-3 title-gallery">
          <h3 className=" text-light ">Superman</h3>
        </div>
        <GalleryMovies endpoint={endpoint2} />
      </div>
      <div className=" d-flex flex-column align-items-center mt-3 p-4">
        <div className=" d-flex justify-content-center align-items-center p-3 title-gallery">
          <h3 className=" text-light ">Disney</h3>
        </div>
        <GalleryMovies endpoint={endpoint3} />
      </div>
    </>
  );
};

export default Home;
