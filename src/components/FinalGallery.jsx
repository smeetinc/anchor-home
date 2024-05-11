import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";
import "./finalGallery.css";

function FinalGallery() {
  return (
    <div className="app">
      <header>
        <div className="">
          <h1>React image gallery demo</h1>
        </div>
      </header>
      <div className="w-full px-4">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default FinalGallery;
