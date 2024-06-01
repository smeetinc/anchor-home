import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";
import AOS from "aos";
import "../aos/dist/aos.css";

function RealGallery() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div name="gallery"></div>
      <div className="w-full text-center    overflow-x-hidden  my-4">
        <p
          class="text-lg my-4"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Check Out Our
        </p>
        <h1
          class="text-2xl text-center underline decoration-2 decoration-primary-200 underline-offset-8 font-bold"
          data-aos="fade-zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          Gallery
        </h1>
      </div>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        // open={open}
        // close={() => setOpen(false)}

        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default RealGallery;
