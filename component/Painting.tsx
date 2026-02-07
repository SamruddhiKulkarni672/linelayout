"use client";

import { useState } from "react";
import { Reorder, motion } from "framer-motion";

const initialImages = [
  "/paintings/1.jpg",
  "/paintings/2.jpg",
  "/paintings/3.jpg",
  "/paintings/4.jpg",
  "/paintings/5.jpg",
  "/paintings/6.jpg",
  "/paintings/7.jpg",
  "/paintings/8.jpg",
  "/paintings/9.jpg",
];

export default function PaintingRankGrid() {
  const [images, setImages] = useState(initialImages);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-5 text-center">
        Rank Paintings by Likeability
      </h2>

      <Reorder.Group
        axis="y"
        values={images}
        onReorder={setImages}
        className="grid grid-cols-3 gap-4"
      >
        {images.map((img) => (
          <Reorder.Item
            key={img}
            value={img}
            layout
            className="relative"
            whileDrag={{ scale: 1.1, zIndex: 50 }}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 40,
              }}
              className="rounded-xl overflow-hidden shadow-xl bg-white cursor-grab active:cursor-grabbing"
            >
              <img
                src={img}
                alt="painting"
                className="w-full h-40 object-cover pointer-events-none"
              />

              <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                Rank {images.indexOf(img) + 1}
              </div>
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
