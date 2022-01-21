const Soudcloud = ({ type, id }: { type: string; id: string }) => {
  return (
    <iframe
      width="100%"
      height="80"
      scrolling="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${type}/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
    ></iframe>
  );
};

export default Soudcloud;
