import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Crewneck T-Shirt",
    price: 25.00,
    description: "A timeless classic, this 100% cotton crewneck t-shirt is a wardrobe essential. Soft, breathable, and built to last.",
    category: "men",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761210992/download_tkyboz.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761210992/download_2_u2atro.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761210994/download_1_smiayw.png"],
    rating: 4.5,
    reviews: 120,
    colors: ["White", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 2,
    name: "Slim-Fit Chinos",
    price: 60.00,
    originalPrice: 75.00,
    description: "Versatile and comfortable, these slim-fit chinos are perfect for any occasion, from casual Fridays to weekend outings.",
    category: "men",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212205/thumbnail-slim-fit-chinos-2_yb5qct.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212205/thumbnail-slim-fit-chinos-3_ulzggd.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212205/thumbnail-slim-fit-chinos-1_seuuta.png"],
    rating: 4.7,
    reviews: 95,
    colors: ["Khaki", "Gray", "Olive"],
    sizes: ["30x30", "32x32", "34x32", "36x34"],
    onSale: true,
  },
  {
    id: 3,
    name: "Elegant Flowy Blouse",
    price: 55.00,
    description: "This elegant blouse features a lightweight fabric and a relaxed fit, making it a perfect choice for the office or a night out.",
    category: "women",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211794/thumbnail-elegant-flowy-blowse-3_eochik.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211799/thumbnail-elegant-flowy-blowse-2_qevdb5.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211794/thumbnail-elegant-flowy-blowse-3_eochik.png"],
    rating: 4.8,
    reviews: 210,
    colors: ["Cream", "Blush", "Sky Blue"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 4,
    name: "High-Waisted Skinny Jeans",
    price: 80.00,
    description: "Crafted from premium stretch denim, these high-waisted skinny jeans hug your curves in all the right places.",
    category: "women",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211219/thumbnail-high-waisted-skinny-jeans-3_x6v45r.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211247/thumbnail-high-waisted-skinny-jeans-2_uvbzoi.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211207/thumbnail-high-waisted-skinny-jeans-1_y5tgso.png"],
    rating: 4.6,
    reviews: 150,
    colors: ["Dark Wash", "Light Wash", "Black"],
    sizes: ["26", "27", "28", "29", "30"],
    isNew: true,
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    price: 120.00,
    description: "A minimalist and chic crossbody bag made from genuine leather. Perfectly sized to carry your essentials.",
    category: "accessories",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211568/thumbnail-leather-crossbody-bag-1_ntw24c.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211573/thumbnail-leather-crossbody-bag-2_sulgbg.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761211576/thumbnail-leather-crossbody-bag-3_uqacfo.png"],
    rating: 4.9,
    reviews: 88,
    colors: ["Tan", "Black"],
    sizes: ["One Size"],
  },
  {
    id: 6,
    name: "Classic Leather Sneakers",
    price: 95.00,
    description: "Timeless sneakers crafted with a premium leather upper and a durable rubber sole. The perfect blend of style and comfort.",
    category: "shoes",
    images: ["https://picsum.photos/id/601/800/800", "https://picsum.photos/id/602/800/800", "https://picsum.photos/id/603/800/800"],
    rating: 4.7,
    reviews: 180,
    colors: ["White", "Black", "Brown"],
    sizes: ["8", "9", "10", "11", "12"],
  },
  {
    id: 7,
    name: "Modern Aviator Sunglasses",
    price: 45.00,
    description: "Protect your eyes in style with these modern aviator sunglasses, featuring a lightweight metal frame and polarized lenses.",
    category: "accessories",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212993/thumbnail-modern-avigator-sunglasses-1_mcqy9r.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212951/thumbnail-modern-avigator-sunglasses-2_jg8wde.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212938/thumbnail-modern-avigator-sunglasses-3_drh1ye.png"],
    rating: 4.4,
    reviews: 72,
    colors: ["Gold", "Silver", "Matte Black"],
    sizes: ["One Size"],
  },
  {
    id: 8,
    name: "Cozy Knit Sweater",
    price: 70.00,
    originalPrice: 90.00,
    description: "Stay warm and stylish with this cozy knit sweater, made from a soft wool blend. Perfect for chilly days.",
    category: "women",
    images: ["https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212009/thumbnail-cozy-knit-sweater-2_ououlg.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212014/thumbnail-cozy-knit-sweater-3_nqjzaf.png", "https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_800/v1761212009/thumbnail-cozy-knit-sweater-1_lp2ftg.png"],
    rating: 4.8,
    reviews: 135,
    colors: ["Heather Gray", "Oatmeal", "Forest Green"],
    sizes: ["S", "M", "L", "XL"],
    onSale: true,
  },
];

export const CATEGORIES = [
  { name: 'Men', path: '/category/men' },
  { name: 'Women', path: '/category/women' },
  { name: 'Accessories', path: '/category/accessories' },
  { name: 'Shoes', path: '/category/shoes' },
  { name: 'New Arrivals', path: '/category/new' },
];

export const FAQS = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused items in their original packaging. Simply visit our returns portal to start the process. Sale items are final sale."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also find tracking information in your account's order history."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Please proceed to checkout to see the options available for your country."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
    },
    {
      question: "How do I care for my garments?",
      answer: "Care instructions are provided on the label of each garment. For best results, we generally recommend machine washing in cold water and tumble drying on low."
    }
];

export const MOCK_ORDERS: Order[] = [
    {
        id: 'VS123456',
        date: '2023-10-15',
        status: 'Delivered',
        total: 145.00,
        items: [
            {...PRODUCTS[1], quantity: 1, selectedSize: '32x32', selectedColor: 'Khaki'},
            {...PRODUCTS[5], quantity: 1, selectedSize: '10', selectedColor: 'White'},
        ]
    },
    {
        id: 'VS123457',
        date: '2023-11-01',
        status: 'Shipped',
        total: 80.00,
        items: [
            {...PRODUCTS[3], quantity: 1, selectedSize: '28', selectedColor: 'Dark Wash'},
        ]
    },
     {
        id: 'VS123458',
        date: '2023-11-05',
        status: 'Processing',
        total: 70.00,
        items: [
            {...PRODUCTS[7], quantity: 1, selectedSize: 'M', selectedColor: 'Heather Gray'},
        ]
    }
];