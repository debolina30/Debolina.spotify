import React, { useState } from "react";
import Axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function AddArtistSection() {
  const [artistName, setArtistName] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    //Validate data

    const data = {
      artist_name: artistName,
      artist_dob: dob,
      artist_bio: bio,
    };
    console.log(typeof data.artist_dob);

    Axios.post(SERVER_URL + "artists", data)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.newArtist) {
            // Add the new artists to the artists context
          } else {
            // Fetch for the entire artists
          }
        } else {
          window.alert("Something went wrong!");
        }
      })
      .catch(() => {
        window.alert("Something went wrong!");
      });
    console.log(SERVER_URL + "artists", JSON.stringify(data));
  };

  return (
    <section className="add-artist-section">
      <form className="add-artist-from">
        <div className="input-group">
          <label htmlFor="artist-name">Artist name</label>
          <input
            type="text"
            name="artist-name"
            value={artistName}
            onChange={(e) => {
              setArtistName(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="artist-dob">Date of birth</label>
          <input
            type="date"
            name="artist-dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="artist-bio">Bio</label>
          <textarea
            name="artist-bio"
            cols="30"
            rows="10"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="buttons-horizontal">
          <button>Cancel</button>
          <button type="submit" onClick={SubmitHandler}>
            Done
          </button>
        </div>
      </form>
    </section>
  );
}
