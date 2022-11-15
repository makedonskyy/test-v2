import React from 'react';
import SwiftSlider from 'react-swift-slider';

export default function Slider() {
  const data = [
    { id: '1', src: 'https://dszn.ru/uploads/editor/b6/38/efb56f13d5fdf3ce270c3eaed53c1b5664a0174a.jpg' },
    { id: '2', src: 'https://czn.mos.ru/image?file=/cms_data/distribcontent/public/изображения/mos-banner-support-companies-citizens3.jpg' },
    { id: '3', src: 'https://dszn.ru/uploads/editor/30/f4/982a0ae614ea946f165f746cd6858c2df23af6cb.jpg' },
  ];
  return (
    <SwiftSlider data={data} />
  );
}
