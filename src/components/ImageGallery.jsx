import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  MinusCircle,
  PlusCircle,
} from "lucide-react";

// Import images
import Gallery1 from "../assets/gallery_1.jpg";
import Gallery2 from "../assets/gallery_2.jpg";
import Gallery3 from "../assets/gallery_3.jpg";
import Gallery4 from "../assets/gallery_5.jpg";
import Gallery5 from "../assets/gallery_6.jpg";
import Gallery6 from "../assets/gallery_4b.jpg";
import Gallery7 from "../assets/gallery_7.jpg";
import Gallery8 from "../assets/gallery_8.jpg";
import Gallery9 from "../assets/gallery_9.jpg";

function ImageGallery() {
  // Sample images - replace with your actual images
  const images = [
    { id: 1, src: Gallery1, alt: "Gallery Image 1", title: "Scenic View" },
    { id: 2, src: Gallery2, alt: "Gallery Image 2", title: "Architecture" },
    { id: 3, src: Gallery3, alt: "Gallery Image 3", title: "Nature" },
    { id: 4, src: Gallery4, alt: "Gallery Image 4", title: "Abstract" },
    { id: 5, src: Gallery5, alt: "Gallery Image 5", title: "Portrait" },
    { id: 6, src: Gallery6, alt: "Gallery Image 6", title: "Urban" },
    { id: 7, src: Gallery7, alt: "Gallery Image 7", title: "Wildlife" },
    { id: 8, src: Gallery8, alt: "Gallery Image 8", title: "Travel" },
    { id: 9, src: Gallery9, alt: "Gallery Image 9", title: "Food" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [layout, setLayout] = useState("grid"); // 'grid', 'masonry', 'carousel'
  const [zoom, setZoom] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle lightbox open/close
  const openLightbox = (index) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
    setZoom(1);
  };

  // Navigate through images in lightbox
  const navigateImage = (direction) => {
    if (selectedImage === null) return;

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (direction === "next") {
      setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else {
      setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    setZoom(1);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") navigateImage("next");
      else if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Handle zoom
  const handleZoom = (action) => {
    if (action === "in" && zoom < 3) {
      setZoom((prev) => prev + 0.5);
    } else if (action === "out" && zoom > 1) {
      setZoom((prev) => prev - 0.5);
    } else if (action === "reset") {
      setZoom(1);
    }
  };

  // Handle layout change with animation
  const changeLayout = (newLayout) => {
    setIsAnimating(true);
    setLayout(newLayout);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white text-gray-800 min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of breathtaking imagery showcasing
            our finest works
          </p>

          {/* Layout options */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => changeLayout("grid")}
              className={`px-5 py-2 rounded-full transition-all duration-300 shadow-md ${
                layout === "grid"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => changeLayout("masonry")}
              className={`px-5 py-2 rounded-full transition-all duration-300 shadow-md ${
                layout === "masonry"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Masonry
            </button>
            <button
              onClick={() => changeLayout("carousel")}
              className={`px-5 py-2 rounded-full transition-all duration-300 shadow-md ${
                layout === "carousel"
                  ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              Carousel
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        {layout === "grid" && (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isAnimating ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)" }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div
                    className={`transform transition-transform duration-300 ${
                      hoverIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {image.title}
                    </h3>
                    <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                    <p className="text-sm text-gray-200 mt-2">
                      Click to view full image
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        )}

        {/* Masonry Layout */}
        {layout === "masonry" && (
          <div
            className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 ${
              isAnimating ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative group break-inside-avoid mb-6 overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl ${
                  index % 3 === 0
                    ? "sm:mb-8"
                    : index % 3 === 1
                    ? "sm:mb-10"
                    : "sm:mb-6"
                }`}
                style={{ boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)" }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div
                    className={`transform transition-all duration-300 ${
                      hoverIndex === index
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Click to view full image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel Layout */}
        {layout === "carousel" && (
          <div
            className={`relative ${
              isAnimating ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          >
            <div className="flex overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-none w-4/5 md:w-1/2 lg:w-1/3 snap-center pr-6"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative group overflow-hidden rounded-xl shadow-lg h-64 md:h-72 lg:h-80 border border-gray-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                        <h3 className="text-xl font-semibold text-white">
                          {image.title}
                        </h3>
                        <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                        <p className="text-sm text-gray-200 mt-2">
                          Click to expand
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center space-x-2 pb-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === selectedImage
                      ? "bg-gradient-to-r from-orange-500 to-yellow-400 w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  onClick={() => openLightbox(index)}
                ></div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <div className="absolute top-4 right-4 z-10 flex space-x-3">
              <button
                onClick={() => handleZoom("out")}
                className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors border border-white/10"
              >
                <MinusCircle size={20} className="text-white" />
              </button>
              <button
                onClick={() => handleZoom("in")}
                className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors border border-white/10"
              >
                <PlusCircle size={20} className="text-white" />
              </button>
              <button
                onClick={closeLightbox}
                className="p-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full hover:opacity-90 transition-opacity"
              >
                <X size={20} className="text-white" />
              </button>
            </div>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors border border-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            <div
              className={`w-full max-w-5xl h-full max-h-screen flex items-center justify-center ${
                isAnimating ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
              onClick={() => handleZoom("reset")}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain transition-transform duration-300 rounded-lg shadow-2xl"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-colors border border-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            <div className="absolute bottom-6 left-0 right-0">
              <div className="mx-auto max-w-sm bg-white/10 backdrop-blur-md p-4 rounded-xl text-center border border-white/20">
                <h3 className="text-xl font-semibold text-white">
                  {images[selectedImage].title}
                </h3>
                <div className="h-0.5 w-12 mx-auto my-2 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
                <p className="text-sm text-gray-300">
                  Image {selectedImage + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGallery;
