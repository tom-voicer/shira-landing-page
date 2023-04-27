import React, { useState } from 'react';

import getRootUrl from '../utils/rootUrl';

export interface ISectionProps {
  title: string;
  description: string;
  anchor: string;
  images: string[];
}

export const sections: ISectionProps[] = [
  {
    title: 'אודות שירה',
    anchor: 'about',
    description: '',
    images: ['1.jpg'],
  },
  {
    title: 'המלצות',
    anchor: 'recommendations',
    description: '',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
  {
    title: 'הרצאות',
    anchor: 'lectures',
    description: '',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
    ],
  },
  {
    title: 'מיקוד מסרים',
    anchor: 'messages',
    description: '',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
  {
    title: 'פוסטים לעסקים',
    anchor: 'posts',
    description: '',
    images: [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15.jpg',
      '16.jpg',
    ],
  },
];

export default function Section(props: ISectionProps) {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const rootUrl = getRootUrl();
  return (
    <div
      id={props.anchor}
      className="my-10 pt-20 pb-20 text-center prose mx-auto"
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.images.map((img, index) => (
          <img
            onClick={() => setPhotoIndex(index)}
            key={img}
            className="cursor-pointer h-auto max-w-full rounded-lg"
            src={`${rootUrl}/assets/images/sections/${props.anchor}/${img}`}
            alt=""
          ></img>
        ))}
      </div>

      <div
        style={{ zIndex: 1000 }}
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 ${
          photoIndex !== -1 ? '' : 'hidden'
        }`}
      >
        <div
          className="flex justify-center items-center h-full"
          onClick={() => setPhotoIndex(-1)}
        >
          <div className="max-w-full max-h-full">
            <button
              className="absolute top-0 right-0 m-4"
              onClick={() => setPhotoIndex(-1)}
            >
              <svg
                className="w-6 h-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 10.586L6.293 4.879a1 1 0 10-1.414 1.414L10.586 12l-5.707 5.707a1 1 0 101.414 1.414L12 13.414l5.707 5.707a1 1 0 101.414-1.414L13.414 12l5.707-5.707a1 1 0 00-1.414-1.414L12 10.586z" />
              </svg>
            </button>
            <img
              className="max-w-screen max-h-screen mx-auto"
              src={`${rootUrl}/assets/images/sections/${props.anchor}/${props.images[photoIndex]}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
