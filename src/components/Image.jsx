import { useState } from "react";

const Image = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
    console.log("Image loaded");
  };

  return (
    <div className={className} style={{ position: "relative" }}>
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={isLoaded ? "visible" : "hidden"}
      />
    </div>
  );
};

export default Image;
