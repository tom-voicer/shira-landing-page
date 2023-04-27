import React, { useState } from 'react';

import 'react-image-lightbox/style.css';

import Lightbox from 'react-image-lightbox';

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
        {props.images.map((image, index) => (
          <img
            onClick={() => setPhotoIndex(index)}
            key={image}
            className="cursor-pointer h-auto max-w-full rounded-lg"
            src={`${rootUrl}/assets/images/sections/${props.anchor}/${image}`}
            alt=""
          ></img>
        ))}
        {photoIndex !== -1 && (
          <Lightbox
            mainSrc={`${rootUrl}/assets/images/sections/${props.anchor}/${props.images[photoIndex]}`}
            onCloseRequest={() => setPhotoIndex(-1)}
          />
        )}
      </div>
    </div>
  );
}
