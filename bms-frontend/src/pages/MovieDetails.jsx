import m4 from "../assets/m4.avif";
import TheatreTimings from "../components/movies/TheatreTimings";  
const movie =   {
    id: 4,
    title: "F1: The Movie",
    genre: ["Action", "Drama", "Sports"],
    languages: ["Hindi", "English"],
    format: ["2D", "3D", "IMAX"],
    rating: 9.5,
    votes: "6.8K",
    img: m4,
    certification: "UA",
    duration: "2h 15m",
    releaseDate: "2024-07-05",
    description: "Experience the adrenaline-pumping world of Formula 1 like never before in 'F1: The Movie'. This high-octane sports drama takes you behind the scenes of the glamorous and cutthroat world of Formula 1 racing. Follow the journey of a talented young driver as he navigates the challenges of the sport, from intense rivalries to high-speed crashes. With breathtaking visuals, heart-stopping action, and a gripping storyline, 'F1: The Movie' is a must-watch for racing enthusiasts and movie lovers alike."
  };


const MovieDetails = () => {
  return (
    <>
    <div className='relative text-white font-sans px-4 py-10'
     style={{
        backgroundImage: `url(${movie.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
            <div>
              <img src={movie.img} alt={movie.title} className="w-52 rounded-xl shadow-xl" />
            </div>
            <div className="flex flex-col justify-start flex-1">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1> 
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                  <span className="text-pink-500 font-bold">
                    {movie.rating}  
                  </span>
                  <span className="text-gray-400">
                    {movie.votes} votes
                  </span>
                  <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hove:bg-[#4a4a4a]"> Rate Now</button>
                </div>
              </div>
                <div className="flex items-center gap-3 text-sm mb-4">
                  <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                    {movie.format.join(",")}
                  </span>
                  <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                    {movie.languages.join(",")}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{movie.certification} | {movie.genre.join(", ")} | {movie.duration} | {movie.releaseDate}</p>
                <div>
                  <h2 className="text-xl font-semibold mb-2">About the movie</h2>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{movie.description}</p>
                </div>
            </div>
            <div className="absolute top-0 right-0 cursor-pointer">
              <button className="cursor-pointer bg-[#3a3a3a] px-4 py02 rounded text-sm flex items-center gap-2">
                share 
              </button>
            </div>
        </div>

       
    </div>
     <TheatreTimings/>
    </>
  )
}

export default MovieDetails
