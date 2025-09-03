import TS_Orange from '../assets/ts_orange.jpg';
import TS_Black from '../assets/ts_black.jpg';
import TS_Grey from '../assets/ts_grey.jpg';
import TS_white from '../assets/ts_white.jpg';
import TS_white_FEMALE from '../assets/women_black_tshirt.jpg';
import TS_Grey_FEMALE from '../assets/women_tshirt_grey.jpg';
import Shirt_flower from '../assets/men_shirt_flower.jpg';
import Shirt_white from '../assets/men_shirt_white.jpg'; // ✅ Added import
import cargo_jeans from '../assets/pant_jeans.jpg';

export const AllProduct = [
  {
    id: 1,
    product_name: 'Orange T-shirt',
    product_type: "T-shirt",
    gender: "female || male",
    qauntity: '10',
    product_img: TS_Orange,
    price: '3000',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 2,
    product_name: 'Black T-shirt',
    product_type: "T-shirt",
    gender: 'male',
    qauntity: '53',
    product_img: TS_Black,
    price: '1200',
     description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 5,
    product_name: 'Black T-shirt',
    product_type: "T-shirt",
    gender: 'female',
    qauntity: '50',
    product_img: TS_white_FEMALE,
    price: '2700',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 3,
    product_name: 'Grey T-shirt',
    product_type: "T-shirt",
    gender: 'male',
    qauntity: '20',
    product_img: TS_Grey,
    price: '1800',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 6,
    product_name: 'Grey T-shirt',
    product_type: "T-shirt",
    gender: 'female',
    qauntity: '50',
    product_img: TS_Grey_FEMALE,
    price: '2000',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 8,
    product_name: 'Shirt',
    product_type: "T-shirt",
    gender: 'male',
    qauntity: '25',
    product_img: Shirt_white, // ✅ fixed
    price: '2200',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 4,
    product_name: 'White T-shirt',
    product_type: "T-shirt",
    gender: 'male',
    qauntity: '50',
    product_img: TS_white,
    price: '2000',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 9,
    product_name: 'Pant',
    product_type: "pant",
    gender: 'male',
    qauntity: '50',
    product_img: cargo_jeans,
    price: '2000',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  },
  {
    id: 7,
    product_name: 'Shirt',
    product_type: "shirt",
    gender: 'male',
    qauntity: '15',
    product_img: Shirt_flower,
    price: '1000',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
  }
];
