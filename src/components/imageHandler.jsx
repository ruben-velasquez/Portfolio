"use client";
import { useState } from "react";
import { Image, Spinner } from "@nextui-org/react";

const ImageHandler = ({ src, alt, width, height }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
      {loading && <Spinner className={`absolute bottom-[50%] left-[50%]`} />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageHandler;
