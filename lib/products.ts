export interface Product {
  id: string
  name: string
  price: number
  image: string
  thumbnail: string
  category: "men" | "women" | "new"
  rating: number
  reviews: number
  description: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Linen Shirt",
    price: 129,
    image: "/premium-linen-shirt.png",
    thumbnail: "/light-blue-linen-shirt.png",
    category: "men",
    rating: 4.8,
    reviews: 124,
    description: "Luxurious linen shirt perfect for warm weather. Breathable, lightweight, and elegantly designed.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Khaki", "Black"],
  },
  {
    id: "2",
    name: "Minimalist Tee",
    price: 49,
    image: "/minimalist-t-shirt.jpg",
    thumbnail: "/tee.jpg",
    category: "men",
    rating: 4.9,
    reviews: 89,
    description: "Classic minimalist t-shirt made from organic cotton. Perfect everyday essential.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Beige"],
  },
  {
    id: "3",
    name: "Elegant Wrap Dress",
    price: 189,
    image: "/elegant-wrap-dress.jpg",
    thumbnail: "/elegant-flowing-dress.png",
    category: "women",
    rating: 5.0,
    reviews: 156,
    description: "Timeless wrap dress that flatters all body types. Versatile for office or evening.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Emerald"],
  },
  {
    id: "4",
    name: "Sustainable Joggers",
    price: 89,
    image: "/sustainable-joggers.jpg",
    thumbnail: "/joggers.jpg",
    category: "new",
    rating: 4.7,
    reviews: 67,
    description: "Eco-friendly joggers crafted from recycled materials. Comfortable and sustainable.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Olive"],
  },
  {
    id: "5",
    name: "Silk Camisole",
    price: 79,
    image: "/silk-camisole.jpg",
    thumbnail: "/camisole.jpg",
    category: "women",
    rating: 4.8,
    reviews: 98,
    description: "Premium silk camisole that works as a layering piece or standalone top.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Nude", "Champagne"],
  },
  {
    id: "6",
    name: "Classic Blazer",
    price: 249,
    image: "/classic-blazer.png",
    thumbnail: "/blazer.jpg",
    category: "women",
    rating: 4.9,
    reviews: 143,
    description: "Tailored blazer perfect for professional and casual occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel", "White"],
  },
  {
    id: "7",
    name: "Chino Pants",
    price: 99,
    image: "/chino-pants.png",
    thumbnail: "/chinos.jpg",
    category: "men",
    rating: 4.7,
    reviews: 112,
    description: "Versatile chino pants perfect for work or casual wear.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
  },
  {
    id: "8",
    name: "Wool Coat",
    price: 349,
    image: "/cozy-wool-coat.png",
    thumbnail: "/classic-wool-coat.png",
    category: "new",
    rating: 5.0,
    reviews: 87,
    description: "Premium wool coat for winter elegance. Warm, durable, and timeless.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Charcoal"],
  },
]
