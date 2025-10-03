'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  technologies: string[];
  features: string[];
  images?: string[];
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 hover:bg-gray-800 rounded-lg"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Carousel - Sadece resim varsa göster */}
          {hasImages && (
            <div className="relative group">
              {/* Ana Görsel */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden aspect-video">
                {images[currentImageIndex] ? (
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Proje görseli ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Görsel yükleniyor...
                  </div>
                )}

                {/* Sol Ok */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                      aria-label="Önceki"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Sağ Ok */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                      aria-label="Sonraki"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Sayaç */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Dots (Noktalar) */}
              {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex
                          ? 'bg-blue-400 w-8'
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Görsel ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Detaylı Açıklama */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Proje Hakkında</h3>
            <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Teknolojiler */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Kullanılan Teknolojiler</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Özellikler */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Özellikler</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Linkler */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
            >
              GitHub Linki
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}