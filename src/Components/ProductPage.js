import React from 'react';

const Category = ({ title, items }) => {
  return (
    <div className="category">
      <h3 style={{ color: '#007bff' }}>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ProductPage = () => {
  const categories = [
    {
      title: 'Makeup',
      items: [
        'Lipstick',
        'Lip Gloss',
        'Lip Liner',
        'Mascara',
        'Eyeliner',
        'Kajal',
        'Eyeshadow',
        'Foundation',
        'Primer',
        'Concealer',
        'Compact',
        'Nail Polish',
      ],
    },
    {
      title: 'Skincare, Bath & Body',
      items: [
        'Face Moisturiser',
        'Cleanser',
        'Masks & Peel',
        'Sunscreen',
        'Serum',
        'Face Wash',
        'Eye Cream',
        'Lip Balm',
        'Body Lotion',
        'Body Wash',
        'Body Scrub',
        'Hand Cream',
      ],
    },
    {
      title: 'Haircare',
      items: [
        'Shampoo',
        'Conditioner',
        'Hair Cream',
        'Hair Oil',
        'Hair Gel',
        'Hair Color',
        'Hair Serum',
        'Hair Accessory',
      ],
    },
    {
      title: 'Appliances',
      items: [
        'Hair Straightener',
        'Hair Dryer',
        'Epilator',
      ],
    },
    {
      title: "Men's Grooming",
      items: ['Trimmers', 'Beard Oil', 'Hair Wax'],
    },
    {
      title: 'Beauty Gift & Makeup Set',
      items: ['Beauty Gift', 'Makeup Kit'],
    },
    {
      title: 'Top Brands',
      items: [
        'Lakme',
        'Maybelline',
        'LOreal',
        'Philips',
        'Bath & Body Works',
        'THE BODY SHOP',
        'Biotique',
        'Mamaearth',
        'Nivea',
        'Lotus Herbals',
        'MCaffeine',
        'LOreal Professionnel',
        'KAMA AYURVEDA',
        'M.A.C',
        'Forest Essentials',
      ],
    },
  ];

  return (
    <div className="product-page">
      {categories.map((category, index) => (
        <Category key={index} title={category.title} items={category.items} />
      ))}
    </div>
  );
};
