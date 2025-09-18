
const MediaGalleryButtons = () => (
  <div className="flex  items-center gap-8 w-full h-[80%]">
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300 cursor-pointer">
      📸 Photo Gallery
    </button>

    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300 flex items-center gap-2 cursor-pointer">
      📽️ Video Gallery
    </button>
  </div>
);

export default MediaGalleryButtons;
