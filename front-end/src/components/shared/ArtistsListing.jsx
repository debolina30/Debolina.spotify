import Rating from "./Rating";

import Axios from "axios";
// import { authHeader } from "../../services/Auth";
// import { useNavigate } from "react-router-dom";
// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function ArtistsListing({ artists }) {
  return (
    <div className="artists-listing">
      {artists &&
        artists.length > 0 &&
        artists.map((artist, id) => {
          return <ArtistItem key={id} artist={artist} />;
        })}
    </div>
  );
}

function ArtistItem({ artist }) {
  //   const navigate = useNavigate();

  return (
    <div className="artist-item">
      <div className="artist-name">Artist name: {artist.name}</div>
      <div className="artist-dob">Date of birth: {FormatDate(artist.dob)}</div>
      <div className="artist-bio">Bio: {artist.bio}</div>
      <div className="artist-songs">Songs: {artist.songs || "NaN"}</div>

      <div className="artist-average-rating">
        Average rating :
        <Rating rating={artist.avg_rating || 0} />
      </div>
    </div>
  );
}

const FormatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
