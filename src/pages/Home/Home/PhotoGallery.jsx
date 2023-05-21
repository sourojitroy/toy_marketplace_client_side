import React from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 1',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1569164942237-00385e8fd71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 2',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 3',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 4',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1638232807183-5fe1845b6d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      alt: 'Photo 5',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 6',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1569164942237-00385e8fd71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 7',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 8',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1609395464110-7116592351c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 9',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1638232807183-5fe1845b6d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      alt: 'Photo 10',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1609395464110-7116592351c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 11',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Photo 12',
    },
    // Add more photo objects as needed
  ];

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-auto rounded-sm"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300 bg-black">
              <p className="text-white text-lg">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;


// https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1569164942237-00385e8fd71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1531048324985-45ab12882e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1681127727536-069dc4cdedad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1591438252948-fa5dd3701c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1638232807183-5fe1845b6d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80

// https://images.unsplash.com/photo-1609395464110-7116592351c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80

// https://images.unsplash.com/photo-1581277868137-9dc9f38abc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80

// https://images.unsplash.com/photo-1630300727105-f831ff2e631e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80