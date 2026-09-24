import { Product } from '../types';
import googleTeeFlatlay from '../assets/images/google_tee_flatlay_1790232687658.jpg';
import classicHoodieImg from '../assets/images/classic_hoodie_product_1790232717415.jpg';
import oversizedHoodieImg from '../assets/images/oversized_hoodie_product_1790232759799.jpg';
import premiumWatchImg from '../assets/images/premium_watch_product_1790232741024.jpg';
import cargoShortsImg from '../assets/images/cargo_shorts_product_1790232774199.jpg';
import googleBackpackImg from '../assets/images/google_black_backpack_1790232788118.jpg';
import whiteShirtImg from '../assets/images/white_shirt_product_1790232865545.jpg';
import blackCapImg from '../assets/images/black_cap_product_1790232882738.jpg';
import poloShirtImg from '../assets/images/polo_shirt_product_1790232895035.jpg';
import denimJacketImg from '../assets/images/denim_jacket_product_1790232703465.jpg';
import womenCasualTopImg from '../assets/images/women_casual_top_1790232909293.jpg';
import womenRibbedTopImg from '../assets/images/women_ribbed_top_1790232924588.jpg';
import womenKurtiImg from '../assets/images/women_cotton_kurti_1790232939035.jpg';

// Curated high quality fashion imagery for each category
export const PRODUCTS: Product[] = [
  // ==================== MEN: T-SHIRTS ====================
  {
    id: 'men-tee-1',
    name: 'Classic Google Logo Tee',
    category: 'men',
    subcategory: 't-shirts',
    price: 1299,
    originalPrice: 1899,
    discountPercentage: 31,
    rating: 4.8,
    reviewCount: 1412,
    images: [
      googleTeeFlatlay,
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Classic fit pure combed cotton tee featuring the iconic Google multicolor logo embroidery on the chest. Designed for everyday comfort with taped neck and shoulder seams.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Heather Grey', hex: '#E2E8F0' },
      { name: 'Onyx Black', hex: '#1E293B' },
      { name: 'Google Blue', hex: '#4285F4' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Combed Ring-Spun Cotton (180 GSM)',
    fit: 'Regular Comfort Fit',
    inStock: true
  },
  {
    id: 'men-tee-2',
    name: 'Premium Cotton Graphic Tee',
    category: 'men',
    subcategory: 't-shirts',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 32,
    rating: 4.6,
    reviewCount: 890,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Modern abstract algorithmic graphic print crafted on pre-shrunk bio-washed cotton. Soft hand-feel with vibrant color retention wash after wash.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Charcoal Black', hex: '#1E293B' },
      { name: 'Forest Green', hex: '#1E3A2F' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '100% Bio-Washed Organic Cotton',
    fit: 'Modern Regular Fit',
    inStock: true
  },
  {
    id: 'men-tee-3',
    name: 'Minimalist Crew Neck Tee',
    category: 'men',
    subcategory: 't-shirts',
    price: 1299,
    originalPrice: 1899,
    discountPercentage: 31,
    rating: 4.5,
    reviewCount: 1210,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Subtle tone-on-tone micro monogram hem tag. Built for versatile layering under shirts or blazers.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Slate Grey', hex: '#64748B' },
      { name: 'Warm Off-White', hex: '#F8FAFC' },
      { name: 'Navy Blue', hex: '#1E3A8A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: false,
    fabric: '95% Supima Cotton, 5% Elastane',
    fit: 'Tailored Slim Fit',
    inStock: true
  },
  {
    id: 'men-tee-4',
    name: 'Oversized Streetwear Tee',
    category: 'men',
    subcategory: 't-shirts',
    price: 1599,
    originalPrice: 2299,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 1540,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Drop-shoulder silhouette made from heavyweight 240 GSM single jersey cotton. High-density ribbed collar that maintains shape.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Washed Clay', hex: '#78350F' },
      { name: 'Vintage Black', hex: '#0F172A' },
      { name: 'Olive Drab', hex: '#3F6212' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: 'Heavyweight 240 GSM Cotton',
    fit: 'Boxy Oversized Fit',
    inStock: true
  },

  // ==================== MEN: POLO T-SHIRTS ====================
  {
    id: 'men-polo-1',
    name: 'Signature Polo',
    category: 'men',
    subcategory: 'polo-t-shirts',
    price: 1999,
    originalPrice: 2899,
    discountPercentage: 31,
    rating: 4.6,
    reviewCount: 1100,
    images: [
      poloShirtImg,
      'https://images.unsplash.com/photo-1625910513413-7a760fcf1479?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Refined piqué polo with mother-of-pearl buttons and signature 4-color accent piping along the collar edge. Perfect for smart-casual wear.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Sage Green', hex: '#4D7C0F' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Piqué Cotton (220 GSM)',
    fit: 'Regular Fit',
    inStock: true
  },
  {
    id: 'men-polo-2',
    name: 'Athletic Polo',
    category: 'men',
    subcategory: 'polo-t-shirts',
    price: 1799,
    originalPrice: 2499,
    discountPercentage: 28,
    rating: 4.5,
    reviewCount: 640,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1625910513413-7a760fcf1479?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Engineered moisture-wicking quick-dry fabric with 4-way stretch. Features laser-perforated back panel for maximum breathability.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Steel Blue', hex: '#0284C7' },
      { name: 'Carbon Grey', hex: '#334155' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '88% Recycled Poly, 12% Spandex',
    fit: 'Athletic Performance Fit',
    inStock: true
  },
  {
    id: 'men-polo-3',
    name: 'Slim Fit Polo',
    category: 'men',
    subcategory: 'polo-t-shirts',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 30,
    rating: 4.5,
    reviewCount: 920,
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Tapered sleeves and contoured chest for an impeccably sharp profile. Ribbed cuffs with fine contrast trim.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Burgundy Red', hex: '#991B1B' },
      { name: 'Jet Black', hex: '#0F172A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Mercerized Cotton',
    fit: 'Slim Fit',
    inStock: true
  },
  {
    id: 'men-polo-4',
    name: 'Premium Embroidered Polo',
    category: 'men',
    subcategory: 'polo-t-shirts',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 780,
    images: [
      'https://images.unsplash.com/photo-1625910513413-7a760fcf1479?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Micro-embroidered Google icon in tonal stitch on left chest. Double-faced knitted collar with anti-curl technology.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Sand Beige', hex: '#D6D3D1' },
      { name: 'Deep Navy', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Giza Cotton',
    fit: 'Classic Tailored',
    inStock: true
  },

  // ==================== MEN: SHIRTS ====================
  {
    id: 'men-shirt-1',
    name: 'Oxford White Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 2199,
    originalPrice: 3199,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 1650,
    images: [
      whiteShirtImg,
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'The quintessential crisp white button-down woven in enduring Oxford cloth. Features curved hem and subtle Google logo engraving on resin buttons.',
    sizes: ['38', '40', '42', '44', '46'],
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Sky Blue', hex: '#BAE6FD' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Oxford Cotton',
    fit: 'Regular Fit',
    inStock: true
  },
  {
    id: 'men-shirt-2',
    name: 'Checked Casual Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 29,
    rating: 4.5,
    reviewCount: 840,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Yarn-dyed micro check pattern with spread collar. Soft brushed finish that feels broken-in from day one.',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Navy & Red', hex: '#1E3A8A' },
      { name: 'Olive Green', hex: '#365314' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '100% Brushed Cotton Flannel',
    fit: 'Casual Relaxed Fit',
    inStock: true
  },
  {
    id: 'men-shirt-3',
    name: 'Linen Summer Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.8,
    reviewCount: 930,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pure French linen tailored for warm summer afternoons. Naturally breathable and lightweight with an easy mandarin collar.',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Natural Sand', hex: '#E7E5E4' },
      { name: 'Seafoam Mint', hex: '#A7F3D0' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Pure French Flax Linen',
    fit: 'Relaxed Summer Fit',
    inStock: true
  },
  {
    id: 'men-shirt-4',
    name: 'Formal Business Shirt',
    category: 'men',
    subcategory: 'shirts',
    price: 2299,
    originalPrice: 3199,
    discountPercentage: 28,
    rating: 4.6,
    reviewCount: 1120,
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Wrinkle-resistant twill weave with stiffened spread collar and French cuffs. Remains immaculate through long boardroom meetings.',
    sizes: ['38', '40', '42', '44', '46'],
    colors: [
      { name: 'Sky Stripe', hex: '#BAE6FD' },
      { name: 'Chalk White', hex: '#FFFFFF' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Non-Iron Cotton Twill',
    fit: 'Slim Executive Fit',
    inStock: true
  },

  // ==================== MEN: VESTS ====================
  {
    id: 'men-vest-1',
    name: 'Active Sports Vest',
    category: 'men',
    subcategory: 'vests',
    price: 899,
    originalPrice: 1299,
    discountPercentage: 30,
    rating: 4.5,
    reviewCount: 520,
    images: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Deep armholes and racerback design for total mobility. Ultra-light mesh that accelerates evaporative cooling.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#0F172A' },
      { name: 'Vibrant Blue', hex: '#2563EB' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '100% Recycled Polyester Mesh',
    fit: 'Athletic Cut',
    inStock: true
  },
  {
    id: 'men-vest-2',
    name: 'Cotton Sleeveless Vest',
    category: 'men',
    subcategory: 'vests',
    price: 799,
    originalPrice: 1099,
    discountPercentage: 27,
    rating: 4.4,
    reviewCount: 680,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pure combed ribbed cotton tank vest. Ideal as an undershirt or for low-key lounging.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Grey Melange', hex: '#94A3B8' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: false,
    fabric: '100% Ribbed Cotton',
    fit: 'Regular Stretch Fit',
    inStock: true
  },
  {
    id: 'men-vest-3',
    name: 'Gym Training Vest',
    category: 'men',
    subcategory: 'vests',
    price: 999,
    originalPrice: 1499,
    discountPercentage: 33,
    rating: 4.7,
    reviewCount: 430,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Anti-odor treated poly-spandex blend with reflective logo print on the back spine for night workouts.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Army Green', hex: '#365314' },
      { name: 'Carbon Black', hex: '#1E293B' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '90% Poly, 10% Spandex',
    fit: 'Compression Fit',
    inStock: true
  },

  // ==================== MEN: SHORTS ====================
  {
    id: 'men-short-1',
    name: 'Casual Cotton Shorts',
    category: 'men',
    subcategory: 'shorts',
    price: 1399,
    originalPrice: 1999,
    discountPercentage: 30,
    rating: 4.6,
    reviewCount: 910,
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Drawstring elastic waistband with side pockets and a back welt pocket. 7-inch inseam hit just above the knee.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Khaki Beige', hex: '#D7D3C8' },
      { name: 'Navy Blue', hex: '#1E3A8A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '98% Cotton, 2% Spandex',
    fit: 'Regular Casual Fit',
    inStock: true
  },
  {
    id: 'men-short-2',
    name: 'Running Shorts',
    category: 'men',
    subcategory: 'shorts',
    price: 1299,
    originalPrice: 1799,
    discountPercentage: 27,
    rating: 4.7,
    reviewCount: 620,
    images: [
      'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Built-in supportive liner, zippered phone pocket, and side slits for unrestricted stride mobility.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matte Black', hex: '#0F172A' },
      { name: 'Cobalt Blue', hex: '#2563EB' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Quick-Dry Polyester',
    fit: 'Athletic 5" Inseam',
    inStock: true
  },
  {
    id: 'men-short-3',
    name: 'Cargo Shorts',
    category: 'men',
    subcategory: 'shorts',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    rating: 4.5,
    reviewCount: 1680,
    images: [
      cargoShortsImg,
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Utilitarian multi-pocket design crafted from sturdy cotton ripstop fabric with reinforced stress points.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Olive Green', hex: '#3F6212' },
      { name: 'Desert Tan', hex: '#CA8A04' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Cotton Ripstop',
    fit: 'Relaxed Cargo Fit',
    inStock: true
  },

  // ==================== MEN: PANTS ====================
  {
    id: 'men-pant-1',
    name: 'Chino Pants',
    category: 'men',
    subcategory: 'pants',
    price: 2199,
    originalPrice: 3199,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 1320,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Garment-dyed stretch cotton chinos with a versatile clean front. Transitions seamlessly from office presentations to dinner.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'British Khaki', hex: '#B45309' },
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Stone Grey', hex: '#64748B' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '97% Cotton, 3% Elastane',
    fit: 'Slim Tapered Fit',
    inStock: true
  },
  {
    id: 'men-pant-2',
    name: 'Slim Fit Trousers',
    category: 'men',
    subcategory: 'pants',
    price: 2499,
    originalPrice: 3599,
    discountPercentage: 30,
    rating: 4.6,
    reviewCount: 880,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Precision tailored flat-front trousers with crease retention finish. Interior curtain waistband for shirt grip.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Charcoal Grey', hex: '#334155' },
      { name: 'Midnight Black', hex: '#0F172A' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Polyester-Viscose Stretch Blend',
    fit: 'Modern Slim Fit',
    inStock: true
  },
  {
    id: 'men-pant-3',
    name: 'Jogger Pants',
    category: 'men',
    subcategory: 'pants',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 29,
    rating: 4.8,
    reviewCount: 1420,
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'French terry fleece joggers with ribbed ankle cuffs, drawcord waistband, and waterproof zip pockets.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Heather Grey', hex: '#94A3B8' },
      { name: 'Jet Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% French Terry Cotton',
    fit: 'Athletic Tapered Fit',
    inStock: true
  },
  {
    id: 'men-pant-4',
    name: 'Formal Trousers',
    category: 'men',
    subcategory: 'pants',
    price: 2599,
    originalPrice: 3699,
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 760,
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Luxurious wool-touch fabric crafted for crisp drape and anti-crease endurance throughout long business trips.',
    sizes: ['32', '34', '36', '38'],
    colors: [
      { name: 'Deep Navy', hex: '#0F172A' },
      { name: 'Mocha Brown', hex: '#451A03' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Fine Worsted Wool Blend',
    fit: 'Classic Tailored Fit',
    inStock: true
  },

  // ==================== MEN: PYJAMAS ====================
  {
    id: 'men-pyjama-1',
    name: 'Comfort Lounge Pyjama',
    category: 'men',
    subcategory: 'pyjamas',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    rating: 4.8,
    reviewCount: 940,
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Buttery-soft brushed modal pyjama bottoms with elasticated drawstring waist and deep side hand pockets.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Heather Grey', hex: '#64748B' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '95% MicroModal, 5% Spandex',
    fit: 'Easy Relaxed Fit',
    inStock: true
  },
  {
    id: 'men-pyjama-2',
    name: 'Soft Cotton Nightwear',
    category: 'men',
    subcategory: 'pyjamas',
    price: 1299,
    originalPrice: 1799,
    discountPercentage: 27,
    rating: 4.6,
    reviewCount: 610,
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pure breathable cotton woven with fine checks. Open bottom hem for breezy sleep comfort.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Sky Blue Check', hex: '#38BDF8' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Soft Cotton',
    fit: 'Straight Fit',
    inStock: true
  },
  {
    id: 'men-pyjama-3',
    name: 'Premium Sleep Set',
    category: 'men',
    subcategory: 'pyjamas',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.9,
    reviewCount: 520,
    images: [
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Matching 2-piece set containing short-sleeve tee and lounge trousers with piped contrast accents.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Midnight Charcoal', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Supima Cotton & Bamboo Blend',
    fit: 'Lounge Comfort Fit',
    inStock: true
  },

  // ==================== MEN: DENIMS ====================
  {
    id: 'men-denim-1',
    name: 'Slim Fit Denim',
    category: 'men',
    subcategory: 'denims',
    price: 2499,
    originalPrice: 3599,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 1510,
    images: [
      denimJacketImg,
      'https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Japanese selvedge-inspired 12.5 oz stretch denim washed in authentic indigo with subtle whiskering.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Dark Indigo', hex: '#1E3A8A' },
      { name: 'Mid Vintage Blue', hex: '#2563EB' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '98% Cotton, 2% Elastane (12.5 oz)',
    fit: 'Slim Tapered',
    inStock: true
  },
  {
    id: 'men-denim-2',
    name: 'Relaxed Fit Jeans',
    category: 'men',
    subcategory: 'denims',
    price: 2699,
    originalPrice: 3799,
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 930,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    description: '90s skater-inspired straight leg denim with roomy thighs and high rise. Solid copper rivets.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Light Stone Wash', hex: '#93C5FD' },
      { name: 'Washed Black', hex: '#1E293B' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Rigid Cotton Denim (13 oz)',
    fit: 'Relaxed Straight Fit',
    inStock: true
  },
  {
    id: 'men-denim-3',
    name: 'Ripped Fashion Denim',
    category: 'men',
    subcategory: 'denims',
    price: 2899,
    originalPrice: 3999,
    discountPercentage: 27,
    rating: 4.5,
    reviewCount: 740,
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Hand-distressed knee slits with backing patches. Enzyme stone washed for authentic worn-in patina.',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Vintage Acid Blue', hex: '#60A5FA' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '99% Cotton, 1% Spandex',
    fit: 'Skinny Cut',
    inStock: true
  },
  {
    id: 'men-denim-4',
    name: 'Classic Blue Jeans',
    category: 'men',
    subcategory: 'denims',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 1890,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Timeless five-pocket styling with zip fly and branded metal shank button. An enduring wardrobe pillar.',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Medium Wash Indigo', hex: '#1D4ED8' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Cotton Denim',
    fit: 'Regular Straight Fit',
    inStock: true
  },

  // ==================== MEN: HOODIES ====================
  {
    id: 'men-hoodie-1',
    name: 'Google Signature Hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.8,
    reviewCount: 1800,
    images: [
      classicHoodieImg,
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Our hero sweatshirt crafted from heavy 360 GSM fleece with brushed interior. Embroidered 4-color Google typographic insignia on the chest.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Oatmeal Heather', hex: '#E2E8F0' },
      { name: 'Google Navy', hex: '#1E3A8A' },
      { name: 'Onyx Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '80% Cotton, 20% Poly Heavy Fleece (360 GSM)',
    fit: 'Comfort Fit',
    inStock: true
  },
  {
    id: 'men-hoodie-2',
    name: 'Oversized Hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 1200,
    images: [
      oversizedHoodieImg,
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Exaggerated dropped shoulders with double-layered hood without drawstrings for an ultra-clean minimalist look.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Sand Khaki', hex: '#D6D3D1' },
      { name: 'Anthracite', hex: '#334155' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: '100% French Terry Cotton (400 GSM)',
    fit: 'Oversized Boxy Fit',
    inStock: true
  },
  {
    id: 'men-hoodie-3',
    name: 'Zip-Up Hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2699,
    originalPrice: 3699,
    discountPercentage: 27,
    rating: 4.6,
    reviewCount: 890,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Full-length YKK metal zipper with split kangaroo pockets and thermal lined hood. Durable reinforced cuff ribbing.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Charcoal Black', hex: '#1E293B' },
      { name: 'Grey Marl', hex: '#94A3B8' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Cotton Fleece Blend',
    fit: 'Standard Fit',
    inStock: true
  },
  {
    id: 'men-hoodie-4',
    name: 'Winter Fleece Hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2999,
    originalPrice: 4299,
    discountPercentage: 30,
    rating: 4.9,
    reviewCount: 980,
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-pile sherpa fleece interior lining for severe cold weather protection. Windproof ribbed cuffs and thumbholes.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Deep Forest', hex: '#1E3A2F' },
      { name: 'Navy', hex: '#1E3A8A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Sherpa-Bonded Cotton Fleece',
    fit: 'Thermal Regular Fit',
    inStock: true
  },
  {
    id: 'men-hoodie-5',
    name: 'Streetwear Graphic Hoodie',
    category: 'men',
    subcategory: 'hoodies',
    price: 2599,
    originalPrice: 3599,
    discountPercentage: 27,
    rating: 4.7,
    reviewCount: 740,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Back screen print depicting developer syntax elements and modern typography. Front kangaroo pocket with silicone Google logo tag.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Black', hex: '#0F172A' },
      { name: 'Crimson Red', hex: '#991B1B' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Heavy Cotton Fleece',
    fit: 'Streetwear Boxy Fit',
    inStock: true
  },

  // ==================== WOMEN: TOPS ====================
  {
    id: 'women-top-1',
    name: 'Casual Everyday Top',
    category: 'women',
    subcategory: 'tops',
    price: 1299,
    originalPrice: 1999,
    discountPercentage: 35,
    rating: 4.6,
    reviewCount: 1200,
    images: [
      womenCasualTopImg,
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ultra-soft viscose modal blend with flattering scoop neckline and curved hemline. Breathable all-day silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Soft Blush', hex: '#FBCFE8' },
      { name: 'Cream White', hex: '#FEF3C7' },
      { name: 'Sage Mint', hex: '#D1FAE5' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '95% Viscose Modal, 5% Spandex',
    fit: 'Flattering Easy Fit',
    inStock: true
  },
  {
    id: 'women-top-2',
    name: 'Ribbed Fashion Top',
    category: 'women',
    subcategory: 'tops',
    price: 1199,
    originalPrice: 1799,
    discountPercentage: 33,
    rating: 4.5,
    reviewCount: 880,
    images: [
      womenRibbedTopImg,
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Vertical textured 2x2 rib knit with lettuce-edge hem and square collar. Perfect for high-waisted denims.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Terracotta', hex: '#B45309' },
      { name: 'Ivory', hex: '#F5F5F4' },
      { name: 'Black', hex: '#18181B' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Cotton Elastane Rib Knit',
    fit: 'Fitted Bodycon',
    inStock: true
  },
  {
    id: 'women-top-3',
    name: 'Printed Summer Top',
    category: 'women',
    subcategory: 'tops',
    price: 1399,
    originalPrice: 1999,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 1400,
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Lightweight floral-geometric botanical print with flutter sleeves and keyhole button closure at back.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Teal Meadow', hex: '#0D9488' },
      { name: 'Sunny Coral', hex: '#FB7185' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: false,
    fabric: '100% Georgette Chiffon',
    fit: 'Flowy Breezy Fit',
    inStock: true
  },
  {
    id: 'women-top-4',
    name: 'Elegant Party Top',
    category: 'women',
    subcategory: 'tops',
    price: 1799,
    originalPrice: 2499,
    discountPercentage: 28,
    rating: 4.8,
    reviewCount: 1100,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Satin crepe cowl neck sleeveless blouse with iridescent drape. Shimmers elegantly under ambient lighting.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Champagne Gold', hex: '#E2E8F0' },
      { name: 'Emerald Green', hex: '#064E3B' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Premium Silk-Satin Crepe',
    fit: 'Draped Contemporary Fit',
    inStock: true
  },

  // ==================== WOMEN: KURTIS ====================
  {
    id: 'women-kurti-1',
    name: 'Cotton Kurti',
    category: 'women',
    subcategory: 'kurtis',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    rating: 4.6,
    reviewCount: 1120,
    images: [
      womenKurtiImg,
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Straight-cut knee-length cotton kurti featuring subtle threadwork on the placket and side slits. Paired easily with palazzos or jeans.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Pastel Yellow', hex: '#FEF08A' },
      { name: 'Powder Blue', hex: '#BAE6FD' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Khadi Pure Cotton',
    fit: 'Straight Regular Fit',
    inStock: true
  },
  {
    id: 'women-kurti-2',
    name: 'Printed Kurti',
    category: 'women',
    subcategory: 'kurtis',
    price: 1599,
    originalPrice: 2299,
    discountPercentage: 30,
    rating: 4.5,
    reviewCount: 950,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Traditional Bagru hand-block print rendered in modern geometric harmony. Features 3/4 sleeves and mandarin collar.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Indigo Multi', hex: '#1E3A8A' },
      { name: 'Maroon', hex: '#881337' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: '100% Chanderi Cotton',
    fit: 'A-Line Flare Fit',
    inStock: true
  },
  {
    id: 'women-kurti-3',
    name: 'Designer Kurti',
    category: 'women',
    subcategory: 'kurtis',
    price: 1999,
    originalPrice: 2899,
    discountPercentage: 31,
    rating: 4.8,
    reviewCount: 1340,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Asymmetric flared hemline with zari piping and handcrafted fabric buttons. An exquisite festive silhouette.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Royal Mustard', hex: '#EAB308' },
      { name: 'Peacock Teal', hex: '#0F766E' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: false,
    fabric: 'Silk Chanderi with Cotton Lining',
    fit: 'Asymmetric Designer Fit',
    inStock: true
  },
  {
    id: 'women-kurti-4',
    name: 'Office Wear Kurti',
    category: 'women',
    subcategory: 'kurtis',
    price: 1699,
    originalPrice: 2399,
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 820,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Minimalist pin-tuck detailing on the front bodice. Subtle, understated elegance for 9-to-5 boardroom confidence.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Steel Grey', hex: '#64748B' },
      { name: 'Olive Moss', hex: '#3F6212' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Linen-Cotton Slub Blend',
    fit: 'Tailored Straight Fit',
    inStock: true
  },

  // ==================== WOMEN: PANTS ====================
  {
    id: 'women-pant-1',
    name: 'Straight Fit Pants',
    category: 'women',
    subcategory: 'pants',
    price: 1699,
    originalPrice: 2399,
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 940,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Clean front with comfort elastic back band. Pairs naturally with both western shirts and Indian kurtis.',
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Classic Beige', hex: '#D6D3D1' },
      { name: 'Jet Black', hex: '#0F172A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Cotton Lycra Stretch',
    fit: 'Straight Leg',
    inStock: true
  },
  {
    id: 'women-pant-2',
    name: 'Wide Leg Pants',
    category: 'women',
    subcategory: 'pants',
    price: 1999,
    originalPrice: 2799,
    discountPercentage: 28,
    rating: 4.8,
    reviewCount: 1100,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-waisted dramatic fluid drape with deep front pleats and concealed side pockets. Ultra chic and breathable.',
    sizes: ['26', '28', '30', '32'],
    colors: [
      { name: 'Cream Latte', hex: '#F5F5F4' },
      { name: 'Dark Taupe', hex: '#57534E' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Flowing Tencel Modal',
    fit: 'High-Rise Wide Leg',
    inStock: true
  },
  {
    id: 'women-pant-3',
    name: 'Formal Office Pants',
    category: 'women',
    subcategory: 'pants',
    price: 2199,
    originalPrice: 3099,
    discountPercentage: 29,
    rating: 4.7,
    reviewCount: 680,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ankle-length trousers with pressed crease and tailored slant pockets. Wrinkle resistant for long work hours.',
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Charcoal', hex: '#334155' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Poly-Viscose Stretch',
    fit: 'Ankle Slim Fit',
    inStock: true
  },
  {
    id: 'women-pant-4',
    name: 'Relaxed Trousers',
    category: 'women',
    subcategory: 'pants',
    price: 1899,
    originalPrice: 2599,
    discountPercentage: 27,
    rating: 4.5,
    reviewCount: 540,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Soft linen-viscose blend with drawstring waist and relaxed cut through hip and thigh.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Olive Green', hex: '#365314' },
      { name: 'Sand', hex: '#E7E5E4' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: false,
    isSale: true,
    fabric: 'Linen Viscose Blend',
    fit: 'Relaxed Fit',
    inStock: true
  },

  // ==================== WOMEN: DENIMS ====================
  {
    id: 'women-denim-1',
    name: 'Skinny Jeans',
    category: 'women',
    subcategory: 'denims',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 1650,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Super-stretch denim holding its shape without bagging out. High rise that sculpts and elongates the leg.',
    sizes: ['26', '28', '30', '32', '34'],
    colors: [
      { name: 'Deep Midnight Indigo', hex: '#1E3A8A' },
      { name: 'Faded Black', hex: '#1E293B' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Power-Stretch Denim',
    fit: 'High-Rise Skinny',
    inStock: true
  },
  {
    id: 'women-denim-2',
    name: 'Wide Leg Denim',
    category: 'women',
    subcategory: 'denims',
    price: 2699,
    originalPrice: 3699,
    discountPercentage: 27,
    rating: 4.8,
    reviewCount: 1420,
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Fashion-forward vintage cut with clean hem and wide sweeping legs. Finished in subtle whiskered wash.',
    sizes: ['26', '28', '30', '32'],
    colors: [
      { name: 'Light Retro Blue', hex: '#93C5FD' },
      { name: 'Off White', hex: '#F8FAFC' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Rigid Cotton Denim',
    fit: 'High-Rise Wide Leg',
    inStock: true
  },
  {
    id: 'women-denim-3',
    name: 'Mom Fit Denim',
    category: 'women',
    subcategory: 'denims',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.6,
    reviewCount: 980,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80'
    ],
    description: '90s nostalgic high waist with relaxed hips and gently tapered ankles. Super flattering for all body shapes.',
    sizes: ['26', '28', '30', '32'],
    colors: [
      { name: 'Medium Stonewash', hex: '#3B82F6' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    isSale: true,
    fabric: 'Comfort Stretch Cotton Denim',
    fit: 'High-Rise Mom Fit',
    inStock: true
  },
  {
    id: 'women-denim-4',
    name: 'Premium Stretch Jeans',
    category: 'women',
    subcategory: 'denims',
    price: 2599,
    originalPrice: 3599,
    discountPercentage: 28,
    rating: 4.7,
    reviewCount: 860,
    images: [
      'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Infused with dual-core recovery elastane to guarantee zero sagging around the knees. Clean minimal finish.',
    sizes: ['28', '30', '32', '34'],
    colors: [
      { name: 'Dark Rinse', hex: '#172554' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Dual-Stretch Denim (11 oz)',
    fit: 'Slim Bootcut',
    inStock: true
  },

  // ==================== WOMEN: SAREES ====================
  {
    id: 'women-saree-1',
    name: 'Silk Saree',
    category: 'women',
    subcategory: 'sarees',
    price: 4999,
    originalPrice: 7999,
    discountPercentage: 37,
    rating: 4.9,
    reviewCount: 860,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Pure Kanjeevaram-style silk weave with rich golden zari borders and intricate floral pallu motifs. Includes unstitched blouse piece.',
    sizes: ['Free Size (5.5m + 0.8m blouse)'],
    colors: [
      { name: 'Royal Crimson Red', hex: '#991B1B' },
      { name: 'Emerald Green', hex: '#064E3B' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Pure Mulberry Silk with Metallic Zari',
    fit: 'Traditional 6-Yard Drape',
    inStock: true
  },
  {
    id: 'women-saree-2',
    name: 'Printed Saree',
    category: 'women',
    subcategory: 'sarees',
    price: 2499,
    originalPrice: 3699,
    discountPercentage: 32,
    rating: 4.7,
    reviewCount: 710,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Feather-light organza saree adorned with delicate digital watercolor florals and scalloped embroidered border.',
    sizes: ['Free Size'],
    colors: [
      { name: 'Dusty Rose', hex: '#FDA4AF' },
      { name: 'Mint Mist', hex: '#A7F3D0' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Sheer Organza Silk',
    fit: 'Flowing Drape',
    inStock: true
  },
  {
    id: 'women-saree-3',
    name: 'Festive Saree',
    category: 'women',
    subcategory: 'sarees',
    price: 3999,
    originalPrice: 5999,
    discountPercentage: 33,
    rating: 4.8,
    reviewCount: 920,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Chanderi silk festive drape accented with sequin mirrorwork borders and tasselled pallu end.',
    sizes: ['Free Size'],
    colors: [
      { name: 'Marigold Yellow', hex: '#F59E0B' },
      { name: 'Sapphire Blue', hex: '#1D4ED8' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Chanderi Silk Blend',
    fit: 'Festive Regal Drape',
    inStock: true
  },
  {
    id: 'women-saree-4',
    name: 'Contemporary Designer Saree',
    category: 'women',
    subcategory: 'sarees',
    price: 4499,
    originalPrice: 6499,
    discountPercentage: 30,
    rating: 4.9,
    reviewCount: 650,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Modern pre-draped concept saree with architectural pleated pallu and sleek belt accessory.',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Metallic Silver Grey', hex: '#94A3B8' },
      { name: 'Midnight Plum', hex: '#581C87' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Satin Georgette with Structured Pleats',
    fit: 'Pre-Stitched Contemporary',
    inStock: true
  },

  // ==================== WOMEN: HOODIES ====================
  {
    id: 'women-hoodie-1',
    name: 'Cropped Hoodie',
    category: 'women',
    subcategory: 'hoodies',
    price: 1999,
    originalPrice: 2899,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 980,
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Raw-cut cropped hem hitting right at the natural waistline. Dropped shoulders with soft brushed fleece interior.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Pastel Lilac', hex: '#E9D5FF' },
      { name: 'Oatmeal', hex: '#F5F5F4' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: '80% Organic Cotton, 20% Recycled Poly',
    fit: 'Relaxed Cropped Fit',
    inStock: true
  },
  {
    id: 'women-hoodie-2',
    name: 'Oversized Hoodie',
    category: 'women',
    subcategory: 'hoodies',
    price: 2299,
    originalPrice: 3299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 1350,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Cocoon-like cozy oversized hoodie with cozy thumbhole sleeves and oversized front kangaroo pouch.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Matcha Green', hex: '#86EFAC' },
      { name: 'Heather Charcoal', hex: '#334155' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Heavy Cotton Terry (380 GSM)',
    fit: 'Slouchy Oversized',
    inStock: true
  },
  {
    id: 'women-hoodie-3',
    name: 'Fleece Hoodie',
    category: 'women',
    subcategory: 'hoodies',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.6,
    reviewCount: 710,
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Double-sided plush microfleece that locks in warmth during chilly evenings without adding bulk.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Snow White', hex: '#FFFFFF' },
      { name: 'Camel Tan', hex: '#D97706' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '100% Micro-Plush Polar Fleece',
    fit: 'Regular Cozy Fit',
    inStock: true
  },
  {
    id: 'women-hoodie-4',
    name: 'Casual Everyday Hoodie',
    category: 'women',
    subcategory: 'hoodies',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 29,
    rating: 4.7,
    reviewCount: 890,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Versatile zip-front sweatshirt with metal Google aglet drawcords. Soft jersey-lined hood.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Soft Grey', hex: '#E2E8F0' },
      { name: 'Navy Blue', hex: '#1E3A8A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Cotton Fleece Blend',
    fit: 'Standard Fit',
    inStock: true
  },

  // ==================== ACCESSORIES: WATCHES ====================
  {
    id: 'acc-watch-1',
    name: 'Classic Leather Watch',
    category: 'accessories',
    subcategory: 'watches',
    price: 3499,
    originalPrice: 4999,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 890,
    images: [
      premiumWatchImg,
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Sleek 40mm stainless steel case with genuine Italian vegetable-tanned leather strap and minimal Bauhaus dial index.',
    sizes: ['40mm Dial'],
    colors: [
      { name: 'Saddle Tan Leather', hex: '#92400E' },
      { name: 'Obsidian Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Stainless Steel & Italian Leather',
    fit: 'Adjustable 16-22cm Wrist',
    inStock: true
  },
  {
    id: 'acc-watch-2',
    name: 'Premium Smart Watch',
    category: 'accessories',
    subcategory: 'watches',
    price: 7999,
    originalPrice: 11999,
    discountPercentage: 33,
    rating: 4.9,
    reviewCount: 1650,
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'AMOLED edge-to-edge curved glass with 7-day battery life, heart-rate tracking, SpO2 sensor, and Google Assistant companion sync.',
    sizes: ['42mm Case'],
    colors: [
      { name: 'Matte Space Grey', hex: '#334155' },
      { name: 'Rose Gold Aluminum', hex: '#FB7185' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: 'Anodized Aluminum & Fluoroelastomer Strap',
    fit: 'Universal Quick-Release Band',
    inStock: true
  },
  {
    id: 'acc-watch-3',
    name: 'Minimal Metal Watch',
    category: 'accessories',
    subcategory: 'watches',
    price: 3899,
    originalPrice: 5499,
    discountPercentage: 29,
    rating: 4.7,
    reviewCount: 640,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Ultra-thin 6.8mm case profile with magnetic Milanese mesh steel loop band. Sapphire-coated mineral glass.',
    sizes: ['38mm Dial'],
    colors: [
      { name: 'Brushed Silver', hex: '#E2E8F0' },
      { name: 'Midnight Gunmetal', hex: '#1E293B' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '316L Surgical Stainless Steel',
    fit: 'Magnetic Mesh Clasp',
    inStock: true
  },
  {
    id: 'acc-watch-4',
    name: 'Luxury Fashion Watch',
    category: 'accessories',
    subcategory: 'watches',
    price: 4999,
    originalPrice: 6999,
    discountPercentage: 28,
    rating: 4.9,
    reviewCount: 980,
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Sunburst champagne dial with polished link bracelet, Japanese quartz movement, and 5 ATM water resistance.',
    sizes: ['41mm Dial'],
    colors: [
      { name: 'Two-Tone Gold & Steel', hex: '#EAB308' },
      { name: 'Deep Emerald Dial', hex: '#064E3B' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Ion-Plated Stainless Steel',
    fit: 'Butterfly Deployant Clasp',
    inStock: true
  },

  // ==================== ACCESSORIES: BAGS ====================
  {
    id: 'acc-bag-1',
    name: 'Handbag',
    category: 'accessories',
    subcategory: 'bags',
    price: 2999,
    originalPrice: 4299,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 820,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Structured vegan saffiano leather handbag with dual carry top handles and detachable shoulder strap.',
    sizes: ['Standard (32 x 24 x 12 cm)'],
    colors: [
      { name: 'Caramel Tan', hex: '#B45309' },
      { name: 'Onyx Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Saffiano Textured Vegan Leather',
    fit: 'Dual Compartment',
    inStock: true
  },
  {
    id: 'acc-bag-2',
    name: 'Tote Bag',
    category: 'accessories',
    subcategory: 'bags',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    rating: 4.8,
    reviewCount: 1450,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Heavyweight 16 oz natural canvas tote with reinforced box-stitched handles and interior zippered key pocket.',
    sizes: ['Spacious 18L'],
    colors: [
      { name: 'Ecru Natural', hex: '#FEF3C7' },
      { name: 'Deep Navy', hex: '#1E3A8A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Organic Heavy Cotton Canvas',
    fit: 'Shoulder Drop 28cm',
    inStock: true
  },
  {
    id: 'acc-bag-3',
    name: 'Crossbody Bag',
    category: 'accessories',
    subcategory: 'bags',
    price: 1899,
    originalPrice: 2699,
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 940,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Compact weather-resistant crossbody pouch with magnetic flap buckle. Designed for phone, wallet, and keys on the go.',
    sizes: ['Compact (20 x 14 x 6 cm)'],
    colors: [
      { name: 'Olive Drab', hex: '#3F6212' },
      { name: 'Matte Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Cordura Ballistic Nylon',
    fit: 'Adjustable Webbing Strap',
    inStock: true
  },
  {
    id: 'acc-bag-4',
    name: 'Premium Fashion Bag',
    category: 'accessories',
    subcategory: 'bags',
    price: 3699,
    originalPrice: 5199,
    discountPercentage: 28,
    rating: 4.9,
    reviewCount: 620,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Architectural crescent silhouette with custom brushed brass hardware and suede microfiber interior.',
    sizes: ['Medium'],
    colors: [
      { name: 'Espresso Brown', hex: '#451A03' },
      { name: 'Alabaster White', hex: '#F8FAFC' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: 'Supple Nappa Grain Leather',
    fit: 'Underarm Shoulder Fit',
    inStock: true
  },

  // ==================== ACCESSORIES: BACKPACKS ====================
  {
    id: 'acc-bp-1',
    name: 'Everyday Backpack',
    category: 'accessories',
    subcategory: 'backpacks',
    price: 2999,
    originalPrice: 4299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 2310,
    images: [
      googleBackpackImg,
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Minimalist weather-proof commuter backpack with dedicated 16-inch padded laptop sleeve, water bottle pocket, and luggage trolley strap.',
    sizes: ['22 Liters'],
    colors: [
      { name: 'Matte Charcoal', hex: '#1E293B' },
      { name: 'Google Navy', hex: '#1E3A8A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Water-Repellent Recycled Poly',
    fit: 'Ergonomic Air-Mesh Backing',
    inStock: true
  },
  {
    id: 'acc-bp-2',
    name: 'Travel Backpack',
    category: 'accessories',
    subcategory: 'backpacks',
    price: 3999,
    originalPrice: 5699,
    discountPercentage: 29,
    rating: 4.9,
    reviewCount: 1150,
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'TSA flight-approved clamshell opening with compression straps, shoe compartment, and concealed anti-theft passport pocket.',
    sizes: ['35 Liters'],
    colors: [
      { name: 'Stealth Black', hex: '#0F172A' },
      { name: 'Coyote Tan', hex: '#A16207' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: true,
    isSale: false,
    fabric: '1000D Cordura Nylon',
    fit: 'Sternum & Hip Support Straps',
    inStock: true
  },
  {
    id: 'acc-bp-3',
    name: 'Laptop Backpack',
    category: 'accessories',
    subcategory: 'backpacks',
    price: 2799,
    originalPrice: 3999,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 1420,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Slimline professional design with fleece-lined tech organizers, cable pass-through, and stand-alone base.',
    sizes: ['18 Liters'],
    colors: [
      { name: 'Slate Grey', hex: '#64748B' },
      { name: 'Dark Indigo', hex: '#1E3A8A' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Polyester Twill with PU Coating',
    fit: 'Padded Shoulder Straps',
    inStock: true
  },
  {
    id: 'acc-bp-4',
    name: 'Urban Mini Backpack',
    category: 'accessories',
    subcategory: 'backpacks',
    price: 2199,
    originalPrice: 3199,
    discountPercentage: 31,
    rating: 4.6,
    reviewCount: 780,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Compact 10L daily companion with gold metallic zippers and adjustable thin leatherette shoulder straps.',
    sizes: ['10 Liters'],
    colors: [
      { name: 'Dusty Pink', hex: '#FDA4AF' },
      { name: 'Pitch Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: false,
    isSale: true,
    fabric: 'Textured Vegan Leather',
    fit: 'Mini Profile',
    inStock: true
  },

  // ==================== ACCESSORIES: CAPS ====================
  {
    id: 'acc-cap-1',
    name: 'Google Logo Cap',
    category: 'accessories',
    subcategory: 'caps',
    price: 999,
    originalPrice: 1499,
    discountPercentage: 33,
    rating: 4.8,
    reviewCount: 1820,
    images: [
      blackCapImg,
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80'
    ],
    description: '6-panel structured baseball cap with high-density embroidered Google 4-color "G" emblem and adjustable brass buckle strap.',
    sizes: ['One Size Fits All'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Deep Navy', hex: '#1E3A8A' },
      { name: 'Classic Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: '100% Chino Cotton Twill',
    fit: 'Adjustable Metal Clasp',
    inStock: true
  },
  {
    id: 'acc-cap-2',
    name: 'Baseball Cap',
    category: 'accessories',
    subcategory: 'caps',
    price: 899,
    originalPrice: 1299,
    discountPercentage: 30,
    rating: 4.6,
    reviewCount: 940,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Unstructured low-profile dad cap with pre-curved visor and sweatband lining.',
    sizes: ['One Size'],
    colors: [
      { name: 'Khaki Tan', hex: '#D6D3D1' },
      { name: 'Forest Green', hex: '#166534' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Washed Cotton Twill',
    fit: 'Relaxed Low Crown',
    inStock: true
  },
  {
    id: 'acc-cap-3',
    name: 'Sports Cap',
    category: 'accessories',
    subcategory: 'caps',
    price: 1099,
    originalPrice: 1599,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 680,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Feather-light running cap with UPF 50+ sun protection and laser-perforated side cooling vents.',
    sizes: ['One Size'],
    colors: [
      { name: 'Reflective Silver', hex: '#CBD5E1' },
      { name: 'Neon Lime', hex: '#A3E635' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Quick-Dry Aeromesh',
    fit: 'Velcro Micro-Adjust',
    inStock: true
  },
  {
    id: 'acc-cap-4',
    name: 'Fashion Snapback',
    category: 'accessories',
    subcategory: 'caps',
    price: 1199,
    originalPrice: 1699,
    discountPercentage: 29,
    rating: 4.5,
    reviewCount: 820,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-crown flat brim snapback cap with 3D puff embroidery and retro green underbill.',
    sizes: ['One Size'],
    colors: [
      { name: 'Black on Black', hex: '#0F172A' },
      { name: 'Burgundy Red', hex: '#991B1B' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Wool-Acrylic Blend',
    fit: '7-Hole Snapback',
    inStock: true
  },

  // ==================== ACCESSORIES: BRACELETS ====================
  {
    id: 'acc-bracelet-1',
    name: 'Leather Bracelet',
    category: 'accessories',
    subcategory: 'bracelets',
    price: 899,
    originalPrice: 1299,
    discountPercentage: 30,
    rating: 4.6,
    reviewCount: 540,
    images: [
      'https://images.unsplash.com/photo-1611591475817-573523fdf10f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Braided full-grain saddle leather bracelet featuring a brushed magnetic stainless steel locking clasp.',
    sizes: ['19cm', '21cm'],
    colors: [
      { name: 'Cognac Brown', hex: '#92400E' },
      { name: 'Matte Black', hex: '#0F172A' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Full-Grain Cowhide & Steel',
    fit: 'Magnetic Clasp',
    inStock: true
  },
  {
    id: 'acc-bracelet-2',
    name: 'Stainless Steel Bracelet',
    category: 'accessories',
    subcategory: 'bracelets',
    price: 1299,
    originalPrice: 1899,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 680,
    images: [
      'https://images.unsplash.com/photo-1611591475817-573523fdf10f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Polished geometric curb link bracelet engineered from anti-tarnish hypoallergenic surgical steel.',
    sizes: ['20cm'],
    colors: [
      { name: 'Mirror Silver', hex: '#E2E8F0' },
      { name: 'Gunmetal Grey', hex: '#334155' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: '316L Stainless Steel',
    fit: 'Lobster Claw Clasp',
    inStock: true
  },
  {
    id: 'acc-bracelet-3',
    name: 'Chain Bracelet',
    category: 'accessories',
    subcategory: 'bracelets',
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    rating: 4.8,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1611591475817-573523fdf10f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Heavy gauge rope chain bracelet with 18k gold PVD vacuum coating for lifelong color brilliance.',
    sizes: ['18cm', '20cm'],
    colors: [
      { name: '18K Yellow Gold', hex: '#EAB308' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: 'PVD Gold Plated Brass',
    fit: 'Fold-Over Safety Clasp',
    inStock: true
  },

  // ==================== ACCESSORIES: CHAINS ====================
  {
    id: 'acc-chain-1',
    name: 'Cuban Chain',
    category: 'accessories',
    subcategory: 'chains',
    price: 1799,
    originalPrice: 2599,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 920,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    description: '6mm diamond-cut Miami Cuban link necklace with mirror-like hand polished finish. Water and sweat resistant.',
    sizes: ['20 Inch', '22 Inch', '24 Inch'],
    colors: [
      { name: 'Radiant Silver', hex: '#E2E8F0' },
      { name: 'Warm Gold', hex: '#EAB308' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Solid Stainless Steel',
    fit: 'Comfort Flat-Link Drape',
    inStock: true
  },
  {
    id: 'acc-chain-2',
    name: 'Minimal Silver Chain',
    category: 'accessories',
    subcategory: 'chains',
    price: 1299,
    originalPrice: 1799,
    discountPercentage: 27,
    rating: 4.6,
    reviewCount: 650,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Dainty 2mm box chain crafted in 925 sterling silver tone. Elegant solo or paired with pendants.',
    sizes: ['18 Inch', '20 Inch'],
    colors: [
      { name: 'Sterling Silver', hex: '#E2E8F0' }
    ],
    isTrending: false,
    isBestSeller: false,
    isNewArrival: true,
    isSale: false,
    fabric: 'Sterling Silver Plated',
    fit: 'Spring Ring Clasp',
    inStock: true
  },
  {
    id: 'acc-chain-3',
    name: 'Premium Gold Chain',
    category: 'accessories',
    subcategory: 'chains',
    price: 2499,
    originalPrice: 3499,
    discountPercentage: 28,
    rating: 4.9,
    reviewCount: 880,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Figaro pattern chain featuring alternating elongated links with triple 18k gold vapor deposition layer.',
    sizes: ['22 Inch', '24 Inch'],
    colors: [
      { name: '18K Yellow Gold', hex: '#EAB308' }
    ],
    isTrending: true,
    isBestSeller: true,
    isNewArrival: true,
    isSale: true,
    fabric: '18K PVD Gold Bonded Steel',
    fit: 'Custom Engraved Clasp',
    inStock: true
  },

  // ==================== ACCESSORIES: RINGS ====================
  {
    id: 'acc-ring-1',
    name: 'Minimal Ring',
    category: 'accessories',
    subcategory: 'rings',
    price: 699,
    originalPrice: 999,
    discountPercentage: 30,
    rating: 4.7,
    reviewCount: 780,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
    ],
    description: '4mm brushed matte finish band with comfort-fit inner bevel. Ultra-clean modern everyday band.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: 'Brushed Silver', hex: '#E2E8F0' },
      { name: 'Matte Onyx', hex: '#0F172A' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: true,
    fabric: 'Titanium Steel',
    fit: 'Comfort Inner Arc',
    inStock: true
  },
  {
    id: 'acc-ring-2',
    name: 'Fashion Statement Ring',
    category: 'accessories',
    subcategory: 'rings',
    price: 999,
    originalPrice: 1499,
    discountPercentage: 33,
    rating: 4.6,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Sculptural signet ring set with an inlaid natural black onyx gemstone face. Bold and refined.',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: 'Gold & Black Onyx', hex: '#EAB308' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Gold-Plated Brass & Genuine Onyx',
    fit: 'Signet Band',
    inStock: true
  },
  {
    id: 'acc-ring-3',
    name: 'Premium Metal Ring',
    category: 'accessories',
    subcategory: 'rings',
    price: 899,
    originalPrice: 1299,
    discountPercentage: 30,
    rating: 4.8,
    reviewCount: 610,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Tungsten carbide band with dual beveled polished edge in high-scratch resistance.',
    sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
    colors: [
      { name: 'Gunmetal Steel', hex: '#334155' }
    ],
    isTrending: false,
    isBestSeller: true,
    isNewArrival: false,
    isSale: false,
    fabric: 'Tungsten Carbide',
    fit: 'Heavyweight Solid Feel',
    inStock: true
  },
  {
    id: 'acc-ring-4',
    name: 'Engraved Ring',
    category: 'accessories',
    subcategory: 'rings',
    price: 1199,
    originalPrice: 1699,
    discountPercentage: 29,
    rating: 4.9,
    reviewCount: 520,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Precision laser-engraved with binary code patterns and subtle interior Google Apparels coordinates.',
    sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
    colors: [
      { name: 'Space Silver', hex: '#E2E8F0' },
      { name: 'Deep Gold', hex: '#EAB308' }
    ],
    isTrending: true,
    isBestSeller: false,
    isNewArrival: true,
    isSale: true,
    fabric: 'Laser-Etched Surgical Steel',
    fit: 'Flat Comfort Fit',
    inStock: true
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Rohan Sharma',
    rating: 5,
    date: '3 days ago',
    comment: 'Amazing quality and super comfortable. The Google Hoodie is my favorite! Definitely worth it.',
    verified: true,
    productName: 'Google Signature Hoodie'
  },
  {
    id: 'rev-2',
    author: 'Neha Patel',
    rating: 5,
    date: '1 week ago',
    comment: 'Loved the fit and fabric. The delivery was super fast. Will definitely shop again!',
    verified: true,
    productName: 'Classic Google Logo Tee'
  },
  {
    id: 'rev-3',
    author: 'Arjun Mehta',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Stylish, comfy and premium quality. The best online shopping experience so far!',
    verified: true,
    productName: 'Signature Polo'
  },
  {
    id: 'rev-4',
    author: 'Pooja Verma',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The Kurti material is pure breathable cotton and the fit is tailored to perfection. Arrived in beautiful eco-packaging.',
    verified: true,
    productName: 'Cotton Kurti'
  }
];

export const COUPONS = [
  {
    code: 'GOOGLE10',
    discountType: 'percentage' as const,
    value: 10,
    description: '10% off on all official apparel',
    minOrder: 999
  },
  {
    code: 'FLAT500',
    discountType: 'fixed' as const,
    value: 500,
    description: 'Flat ₹500 off on orders above ₹2,499',
    minOrder: 2499
  },
  {
    code: 'STYLE20',
    discountType: 'percentage' as const,
    value: 20,
    description: 'Flash Sale: 20% off on orders above ₹3,999',
    minOrder: 3999
  }
];
