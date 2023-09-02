"use client";
import { useState } from "react";
import { Image, Spinner } from "@nextui-org/react";

const ImageHandler = ({ src, alt, width, height, className="" }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative flex justify-center items-center">
      {loading && <Spinner color="default" className={`absolute bottom-[calc(50%-16px)] left-[calc(50%-16px)]`} />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        className={className}
      />
    </div>
  );
};

export default ImageHandler;
