import React,{useState} from "react";
import { Link } from "react-router-dom";
import logo from "./logo/myntra.jpeg";
import search from "./logo/search.png";
import login from "./logo/login.png";
import heart from "./logo/heart.png";
import bag from "./logo/bag.png";
import Product from "./Product.js";
import revamp from "./logo/revamp.png";
import Studio from './Studio.js';
// import Webcam from 'react-webcam';
// import Cam from './Cam.js';
export default function Navbar(props) {

  const beauty = [
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

  const women = [
    {
      title: 'Indian & Fusion Wear',
      items: ['Kurtas & Suits', 'Kurtis, Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Leggings, Salwars & Churidars', 'Skirts & Palazzos', 'Dress Materials', 'Lehenga Cholis', 'Dupattas & Shawls', 'Jackets', 'Belts, Scarves & More', 'Watches & Wearables'],
    },
    {
      title: 'Western Wear',
      items: ['Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'Jumpsuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats', 'Plus Size'],
    },
    {
      title: 'Maternity',
      items: ['Sunglasses & Frames'],
    },
    {
      title: 'Footwear',
      items: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'],
    },
    {
      title: 'Sports & Active Wear',
      items: ['Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment'],
    },
    {
      title: 'Lingerie & Sleepwear',
      items: ['Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals'],
    },
    {
      title: 'Beauty & Personal Care',
      items: ['Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragrances'],
    },
    {
      title: 'Gadgets',
      items: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers'],
    },
    {
      title: 'Jewellery',
      items: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'],
    },
    {
      title: 'Backpacks',
      items: ['Handbags, Bags & Wallets', 'Luggages & Trolleys'],
    },
  ];

  const men= [
    {
      title: 'Topwear',
      items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts','Sweatshirts','Sweaters','Jackets','Blazers&Coats','Suits','Rain Jackets'],
    },
    {
      title:'Indian & Festive Wear',
      items:['Kurtas & Kurta Sets','Sherwanis','Nehru Jackets','Dhotis'],
    },
    {
      title:'Bottomwear',
      items:['Jeans','Casual Trousers','Formal Trousers','Shorts','Track Pants & Joggers'],
    },
    {
      title:'Inneerwear & Sleepwear',
      items:['Briefs & Trunks', 'Boxers','Vests','Sleepwear & Loungewear','Thermals'],
    },
    {
      title:'Footwear',
      items:['Casual Shoes','Sports SHoes','Formal Shoes','Sneakers','Sandals & Floaters','Flip Flops','Socks']
    },
    {
      title:'Personal Care & Grooming',
      items:[""]
    },
    {
      title:'Sunglasses & Frames',
      items:['']
    },
    {
      title:'Watches',
      items:['']
    }
  ]

  const kids =[
    {
      title:'Boys Clothing',
      items:['T-Shirts','Shirts','Shorts','Jeans','Trousers','Clothing Sets','Ethinic Wear','Track Pants & Pyjamas','Party Wear','Innerwear & Thermals','Nightwear & Loungewear','Value Packs']
    },
    {
      title:'Girls Clothing',
      items:['Dresses','Tops','Tshirts','Clothing Sets','Lehenga choli','Kurta Sets','Party Wear','Dungarees & Jumpsuits','Skirts & shorts','Tights & Leggings','Jeans,Trousers & Capris','Jackets, Sweeter & Sweatshirts','Innerwear & Thermals','Nightwear & Loungewear','Value Packs']
    },
    {
      title:'Footwear',
      items:['Casual Shoes','Flipflops','Sports Shoes','Flats','Sandals','Heels','School Shoes','Socks']
    },
    {
      title:'Toys & Games',
      items:['Learning & Development','Activity Toys','Soft Toys','Action Figures/Play Set']
    },
    {
      title:'Infants',
      items:['Bodysuits','Rompers & Sleepsuits','Clothing Sets','Tshirts & Tops','Dresses','Bottom Wear','Winter Wear','Innerwear & Sleepwear','Infant Care']
    },
    {
      title:'Home & Bath',
      items:['']
    },
    {
      title: 'Personal Care',
      items:['']
    },
    {
      title:'Kids Accessories',
      items:['Bags & Backpacks','Watches','Jewellery & Hair accessory','Sunglasses','Masks & Protective Gears','Caps & Hats']
    },
    {
      title:'Brands',
      items:['H&M','Max Kids','Pantaloons','United Color Of Benetton Kids','YK','U.S Polo Assn. Kids','Mothercare','HRX']
    }
  ]

  const homeLiving= [
    {
      title:'Bed Linen & Furnishing',
      items:['Bed Runners','Mattress Protectors','Bedsheets','Bedding Sets','Blanket, Quilts & Dohars','Pillows & Pillow Covers','Bed Covers','Diwen Sets','Chair Pads & Covers','Sofa Covers']
    },
    {
      title:'Flooring',
      items:['Floor Runners','Carpets','Floor Mats & Dhurries','Door Mats']
    },
    {
      title:'Bath',
      items:['Bath Towels','Hand & Face Towels','Beach Towels','Towels Set','Bath Rugs','Bath Robes','Bathroom Accessories','Shower Curtains']
    },
    {
      title:'Lamps & Lighting',
      items:['Fllor Lamps','Ceiling Lamps','Table Lamps','Wall Lamps','Outdoor Lamps','String Lights']
    },
    {
      title:'Home Decor',
      items:['Plants & Planters','Aromas & Candles','Clocks','Mirror','Wall Decor','Festive Decor','Pooja Essentials','Wall Shelves','Fountains','Showpieces & Vases','Ottoman']
    },
    {
      title:'Cushions & Cushion Covers',
      items:['']
    },
    {
      title:'Curtains',
      items:['']
    },
    {
      title:'Home Gift Sets',
      items:['']
    },
    {
      title:'Kitchen & Table',
      items:['Table Runners','Dinnerware & Serveware','Cups & Mugs','Bakeware & Cookware','Kitchen Storage & Tools','Bar & Drinkware','Table Covers & Furnishings']
    },
    {
      title:'Storage',
      items:['Bins','Hangers','Organisers','Hooks & Holders','Laundry Bags']
    },
    {
      title:'Brands',
      items:['H&M','Marks & Spencer','Home Center','Spaces','D Decor','Story@Home','Pure Home & Living','Swayam','Raymond Home','Maspar','My Trident','Cortina','Random','Ellementry','ROMEE','SEJ by Nisha Gupta']
    }
  ]

  const [typeProduct, setProductType]= useState([]);
  const [showProduct, setShowProduct]= useState(false);
  const handleMouseOver=(type)=>{
    setProductType(type);
    setShowProduct(true);
  };
  const handleMouseOut=()=>{
    setProductType(null)
    setShowProduct(false);
  };
  const [studio, setStudio]=useState(false);
  const showStudio=()=>{
    setStudio(true);
  }
  const unshowStudio=()=>{
    setStudio(false);
  }
  

  return (
    <div className="bg-white  w-full">
      <nav className="navbar flex shadow-lg">
      <Link to="/"><div className="brandName max-w-20 mx-3">
          <img src={logo} />
          <img src={revamp}/>
        </div></Link> 
        <ul className="flex text-sm font-bold text-700">
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={()=>{handleMouseOver(men)}}>MEN</li>
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={()=>{handleMouseOver(women)}}>WOMEN</li>
          
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={()=>{handleMouseOver(kids)}}>KIDS</li>
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={()=>{handleMouseOver(homeLiving)}}>HOME&LIVING</li>
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={()=>{handleMouseOver(beauty)}}>BEAUTY</li>
          {showProduct && <Product typeProduct={typeProduct} onMouseOut={handleMouseOut}/>}
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onMouseOver={showStudio}>
            STUDIO <sup className="text-red-500">NEW</sup>
            {studio && <Studio onMouseOut={unshowStudio}/>}
          </li>
          <li className="px-4 py-8 border border-white hover:border-b-black border-4" onClick={props.fireWebCam}>webCam</li>
        </ul>
        <div className="searchBox flex h-10 w-1/4 ml-8 my-6 bg-gray-100 items-center rounded-md">
          <img className="h-5 w-5 mr-1 ml-3 bg-gray-100" src={search} />
          <input
            type="text"
            className=" text-gray-900 text-sm rounded-md outline-none bg-gray-100 block w-full p-2.5 "
            placeholder="Search for products, brands and more"
            required
          />
        </div>
        <div className="loginCart flex my-7 w-1/6">
          <div className="ml-10 grid justify-items-center">
            
            <img className="h-6 w-6 items-center" src={login} />
            <Link to="/login">
            <p>Login</p>
            </Link>
          </div>
          <div className="ml-10 grid justify-items-center">
            <img className="h-6 w-6" src={heart} />
            <p>Wishlist</p>
          </div>
          <div className="ml-10 grid justify-items-center">
            <img className="h-6 w-6" src={bag} />
            <p>Bag</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
