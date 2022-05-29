import React from "react";
import { useNavigate } from "react-router-dom";
export default function TopSongsSection() {
  const navigate = useNavigate();
  const addSongClickHandler = (e) => {
    e.preventDefault();
    navigate("/add-song");
  };
  return (
    <section>
      <h2>Top 10 Songs</h2>
      <button id="add-song-btn" onClick={addSongClickHandler}>
        Add song
      </button>
      <TopSongsTable />
    </section>
  );
}

function TopSongsTable() {
  return <div>Top songs table</div>;
}
