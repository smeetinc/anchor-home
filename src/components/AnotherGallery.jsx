import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "assets/img/bedroom.webp",
    width: 800,
    height: 600,
    srcSet: [
      { src: "assets/img/bedroom.webp", width: 400, height: 300 },
      { src: "assets/img/bedroom.webp", width: 200, height: 150 },
    ],
  },
  {
    src: "assets/img/bedroom2.webp",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "assets/img/bedroom2.webp", width: 800, height: 450 },
      { src: "assets/img/bedroom2.webp", width: 400, height: 225 },
    ],
  },
  {
    src: "assets/img/bedroom.webp",
    width: 800,
    height: 600,
    srcSet: [
      { src: "assets/img/bedroom.webp", width: 400, height: 300 },
      { src: "assets/img/bedroom.webp", width: 200, height: 150 },
    ],
  },
  {
    src: "assets/img/bedroom2.webp",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "assets/img/bedroom2.webp", width: 800, height: 450 },
      { src: "assets/img/bedroom2.webp", width: 400, height: 225 },
    ],
  },
  {
    src: "assets/img/bedroom.webp",
    width: 800,
    height: 600,
    srcSet: [
      { src: "assets/img/bedroom.webp", width: 400, height: 300 },
      { src: "assets/img/bedroom.webp", width: 200, height: 150 },
    ],
  },
  {
    src: "assets/img/bedroom2.webp",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "assets/img/bedroom2.webp", width: 800, height: 450 },
      { src: "assets/img/bedroom2.webp", width: 400, height: 225 },
    ],
  },
  {
    src: "assets/img/bedroom.webp",
    width: 800,
    height: 600,
    srcSet: [
      { src: "assets/img/bedroom.webp", width: 400, height: 300 },
      { src: "assets/img/bedroom.webp", width: 200, height: 150 },
    ],
  },
  {
    src: "assets/img/bedroom2.webp",
    width: 1600,
    height: 900,
    srcSet: [
      { src: "assets/img/bedroom2.webp", width: 800, height: 450 },
      { src: "assets/img/bedroom2.webp", width: 400, height: 225 },
    ],
  },
];

export default function AnotherGallery() {
  return <PhotoAlbum layout="masonry" photos={photos} />;
}
