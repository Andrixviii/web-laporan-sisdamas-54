import { motion } from 'framer-motion';

interface Photo {
  id: string;
  url: string;
  alt: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-[2px] md:gap-[3px] max-w-[935px] mx-auto">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          className="relative group pb-[125%]" // 125% represents 4:5 ratio (5/4 = 1.25 = 125%)
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt}
              className="absolute w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-full flex items-center justify-center text-white">
                <span className="text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};