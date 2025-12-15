export type Category = 
  | 'All'
  | 'Chill Thrill Shakes'
  | 'Royal Classics'
  | 'Chocolate Classics'
  | 'Crunchy Chocolate'
  | 'Waffle Cakes'
  | 'Ice Cream Waff-wich'
  | 'Mini Treats';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isBestseller?: boolean;
  isCastleKingChoice?: boolean;
  isVeg: boolean;
  image?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discount?: string;
  validTime?: string;
  image: string;
}