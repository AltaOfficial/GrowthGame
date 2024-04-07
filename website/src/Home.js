import Navbar from "./components/Navbar";

const Home = () => {
    return (     
    <div className="App fill-black w-full h-full">
    <Navbar></Navbar>
    <div className="content">
      <div className="homepage-part-1 bg-auto fill-black"></div>
    </div>
  </div> 
  );
}

// the navbar on this page with be different from the one on the game page
// this is not a nessasity
 
export default Home;
