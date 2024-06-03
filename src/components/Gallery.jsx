import Thumb from "./thumb";
import locations from "../data/locations";

const Gallery = () => {
  return (
    <div className="gallery">
      <Thumb locations={locations} />
    </div>
  );
};

export default Gallery;