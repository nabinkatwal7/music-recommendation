import React from "react";
import "./Home.css";

import Navbar from "../navbar/Navbar";

function Home() {
  const data = [
    {
      name: "Bohemian Rhapsody",
      image:
        "https://images.firstpost.com/wp-content/uploads/large_file_plugin/2018/12/1544508083_bohemianrhapsodyfeature11122018.png",
      artist: "Queen",
    },
    {
      name: "Losing My Religion",
      image:
        "https://cdns-images.dzcdn.net/images/cover/a968ed3814acb2ef8f3929b1bebcb42d/500x500.jpg",
      artist: "REM",
    },
    {
      name: "Beggin",
      image:
        "https://i1.sndcdn.com/artworks-g23acOZ1xZX7gCAr-7nTohA-t500x500.jpg",
      artist: "Maneskin",
    },
    {
      name: "Hey Jude",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Heyjudealbum.jpg/220px-Heyjudealbum.jpg",
      artist: "The Beatles",
    },
    {
      name: "Californication",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg",
      artist: "Red Hot Chilli Peppers",
    },
    {
      name: "Hey Oh",
      image:
        "https://i.discogs.com/Zgly92k7NjmL2JrFCfBsR0NJJ36qsWLqkPemidc2Mfo/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5Mjky/MDEtMTMxMTg1MDUy/Ni5qcGVn.jpeg",
      artist: "Red Hot Chilli Peppers",
    },
  ];

  // const display = () => {
  //   data.map(() => {
  //     console.log(data)
  //     // <div className="grid">
  //     //   <img className="content-img" src={data.image} alt="" />
  //     //   <h3>{data.name}</h3>
  //     //   <h4>{data.artist}</h4>
  //     // </div>;
  //   });
  // };

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Hello @User!</h1>

        <div className="display-grid">
          {/* {display} */}
          <div className="header-display">
            <h1>Discover</h1>
          </div>
          <div className="group-grid">
            <div className="grid">
              <img className="content-img" src={data[0].image} alt="" />
              <h3>{data[0].name}</h3>
              <h4>{data[0].artist}</h4>
            </div>
            <div className="grid">
              <img className="content-img" src={data[1].image} alt="" />
              <h3>{data[1].name}</h3>
              <h4>{data[1].artist}</h4>
            </div>
            <div className="grid">
              <img className="content-img" src={data[2].image} alt="" />
              <h3>{data[2].name}</h3>
              <h4>{data[2].artist}</h4>
            </div>
          </div>
        </div>

        <div className="display-grid">
          {/* {display} */}
          <div className="header-display">
            <h1>Picks for you</h1>
          </div>
          <div className="group-grid">
            <div className="grid">
              <img className="content-img" src={data[3].image} alt="" />
              <h3>{data[3].name}</h3>
              <h4>{data[3].artist}</h4>
            </div>
            <div className="grid">
              <img className="content-img" src={data[4].image} alt="" />
              <h3>{data[4].name}</h3>
              <h4>{data[4].artist}</h4>
            </div>
            <div className="grid">
              <img className="content-img" src={data[5].image} alt="" />
              <h3>{data[5].name}</h3>
              <h4>{data[5].artist}</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
