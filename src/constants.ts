import { MenuItem, RestaurantInfo } from './types';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Just Bukhara",
  whatsappNumber: "095977 10592",
  whatsappLink: "https://wa.me/917006846210?text=Hello%20Tarboosh%20Restaurant%20I%20want%20to%20place%20an%20order",
  address: "opposite Indian Oil Petrol Pump, Magam, Jammu and Kashmir 193401",
  location: "Srinagar - Gulmarg Rd, New Colony, Waripora, Dhobiwan, Jammu and Kashmir 193404",
  openingHours: "10:00 AM - 11:00 PM (Daily)"
};

export const MENU_ITEMS: MenuItem[] = [
  // Veg Food
  { id: 'v1', name: 'Paneer Butter Masala', category: 'Veg', price: '₹280', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800' },
  { id: 'v2', name: 'Veg Biryani', category: 'Veg', price: '₹220', image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=800' },
  { id: 'v3', name: 'Dal Makhani', category: 'Veg', price: '₹240', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800' },
  { id: 'v4', name: 'Veg Fried Rice', category: 'Veg', price: '₹180', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800' },
  { id: 'v5', name: 'Mix Veg Curry', category: 'Veg', price: '₹200', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },

  // Non-Veg Food
  { id: 'nv1', name: 'Chicken Biryani', category: 'Non-Veg', price: '₹320', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800' },
  { id: 'nv2', name: 'Butter Chicken', category: 'Non-Veg', price: '₹350', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800' },
  { id: 'nv3', name: 'Chicken Tikka', category: 'Non-Veg', price: '₹300', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800' },
  { id: 'nv4', name: 'Mutton Rogan Josh', category: 'Non-Veg', price: '₹450', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80&w=800' },
  { id: 'nv5', name: 'Chicken Fried Rice', category: 'Non-Veg', price: '₹250', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800' },

  // Fast Food
  { id: 'ff1', name: 'Chicken Burger', category: 'Fast Food', price: '₹150', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800' },
  { id: 'ff2', name: 'Veg Burger', category: 'Fast Food', price: '₹120', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800' },
  { id: 'ff3', name: 'French Fries', category: 'Fast Food', price: '₹100', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800' },
  { id: 'ff4', name: 'Chicken Pizza', category: 'Fast Food', price: '₹350', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800' },
  { id: 'ff5', name: 'Sandwich', category: 'Fast Food', price: '₹130', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800' },

  // Coffee & Beverages
  { id: 'b1', name: 'Cappuccino', category: 'Beverages', price: '₹140', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800' },
  { id: 'b2', name: 'Latte', category: 'Beverages', price: '₹150', image: 'https://images.unsplash.com/photo-1593967858208-67ddb5b4c426?auto=format&fit=crop&q=80&w=800' },
  { id: 'b3', name: 'Espresso', category: 'Beverages', price: '₹100', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800' },
  { id: 'b4', name: 'Cold Coffee', category: 'Beverages', price: '₹160', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800' },
  { id: 'b5', name: 'Kashmiri Kahwa', category: 'Beverages', price: '₹120', image: 'https://images.unsplash.com/photo-1544787210-228394c3d3e2?auto=format&fit=crop&q=80&w=800' },
  { id: 'b6', name: 'Green Tea', category: 'Beverages', price: '₹80', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800' },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
];

export const SPECIAL_OFFERS = [
  {
    id: 'o1',
    title: 'Family Feast',
    description: 'Get 20% off on orders above ₹2000',
    image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'o2',
    title: 'Biryani Combo',
    description: 'Chicken Biryani + Cold Drink at just ₹349',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800'
  }
];
