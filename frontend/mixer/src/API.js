import React, { useEffect, useState } from "react";

const access_token = ''
const SpotifySearch = ({ name, type }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${name}&type=${type}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [name, type]);

  return (
    <div>
      <h2>Results</h2>
      <pre>{JSON.stringify(artist, null, 2)}</pre>
    </div>
  );
};

export default SpotifySearch;
