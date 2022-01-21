const Spotify = ({ trackCode }: { trackCode: string }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackCode}?utm_source=generator`}
      width="100%"
      height="80"
      allow="encrypted-media"
    ></iframe>
  );
};

export default Spotify;
