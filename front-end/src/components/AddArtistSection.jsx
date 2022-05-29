import React, { useState } from "react";

export default function AddArtistSection() {
  const [artistName, setArtistName] = useState("");
  const [dob, setDob] = useState();
  const [bio, setBio] = useState("");

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
          <button type="submit">Done</button>
        </div>
      </form>
    </section>
  );
}
