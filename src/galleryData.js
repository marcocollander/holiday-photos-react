import tunisia from './images/gallery/tunisia-carthage.jpg';
import palma from './images/gallery/palma.png';
import valdemosa from './images/gallery/valdemosa-mobile.png';
import egipt from './images/gallery/egipt.png';
import rodos from './images/gallery/rodos-mobile.png';
import barcelona from './images/gallery/barcelona-mobile.png';

import img01 from './images/tunisia/tunisia-01.png';
import img02 from './images/tunisia/tunisia-02.png';
import img03 from './images/tunisia/tunisia-03.png';
import img04 from './images/tunisia/tunesia-04.png';
import img05 from './images/tunisia/tunesia-05.png';
import img06 from './images/tunisia/tunesia-06.png';
import img07 from './images/tunisia/tunesia-07.png';
import img08 from './images/tunisia/tunesia-08.png';
import img09 from './images/tunisia/tunesia-09.png';
import img10 from './images/tunisia/tunezja-2.jpg';


export const galleryData = [
  {
    id: 'gallery01',
    bgImage: {
      backgroundImage: `url(${tunisia})`,
    },
    bgImages: [
      {
        backgroundImage: `url(${img01}`,
      },
      {
        backgroundImage: `url(${img02}`,
      },
      {
        backgroundImage: `url(${img03}`,
      },
      {
        backgroundImage: `url(${img04}`,
      },
      {
        backgroundImage: `url(${img05}`,
      },
      {
        backgroundImage: `url(${img06}`,
      },
      {
        backgroundImage: `url(${img07}`,
      },
      {
        backgroundImage: `url(${img08}`,
      },
      {
        backgroundImage: `url(${img09}`,
      },
      {
        backgroundImage: `url(${img10}`,
      },
    ],
  },
  {
    id: 'gallery02',
    bgImage: {
      backgroundImage: `url(${palma})`,
    },
  },
  {
    id: 'gallery03',
    bgImage: {
      backgroundImage: `url(${valdemosa})`,
    },
  },
  {
    id: 'gallery04',
    bgImage: {
      backgroundImage: `url(${egipt})`,
    },
  },
  {
    id: 'gallery05',
    bgImage: {
      backgroundImage: `url(${rodos})`,
    },
  },
  {
    id: 'gallery06',
    bgImage: {
      backgroundImage: `url(${barcelona})`,
    },
  },
];
