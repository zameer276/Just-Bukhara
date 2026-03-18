export interface MenuItem {
  id: string;
  name: string;
  category: 'Veg' | 'Non-Veg' | 'Fast Food' | 'Beverages';
  price: string;
  image: string;
  description?: string;
}

export interface RestaurantInfo {
  name: string;
  whatsappNumber: string;
  whatsappLink: string;
  address: string;
  location: string;
  openingHours: string;
}
