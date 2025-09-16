'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageModal({ 
  isOpen, 
  images, 
  currentIndex, 
  onClose, 
  onNavigate 
}: ImageModalProps) {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);


  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <span 
          className="close" 
          onClick={onClose}
          aria-label="Close image viewer" 
          title="Close"
        >
          &times;
        </span>
        <span 
          className={`prev ${currentIndex <= 0 ? 'hidden' : ''}`}
          onClick={() => onNavigate(currentIndex - 1)}
          aria-label="Previous image" 
          title="Previous"
        >
          &#10094;
        </span>
        <img
          className="modal-content"
          src={`/images/${images[currentIndex]}`}
          alt={`Project screenshot ${currentIndex + 1}`}
        />
        <span 
          className={`next ${currentIndex >= images.length - 1 ? 'hidden' : ''}`}
          onClick={() => onNavigate(currentIndex + 1)}
          aria-label="Next image" 
          title="Next"
        >
          &#10095;
        </span>
      </div>
    </>
  );
}
