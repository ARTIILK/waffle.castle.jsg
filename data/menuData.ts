import { MenuItem, SpecialOffer } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // Chocolate Classics
  {
    id: '1',
    name: 'Belgian Chocolate',
    description: 'Classic rich Belgian chocolate on a crispy waffle base.',
    price: 129,
    category: 'Chocolate Classics',
    isBestseller: true,
    isVeg: true,
  },
  {
    id: '2',
    name: 'Hazelnut Heaven Nutella',
    description: 'Loaded with premium Nutella and hazelnuts.',
    price: 149,
    category: 'Chocolate Classics',
    isCastleKingChoice: true,
    isVeg: true,
  },
  
  // Crunchy Chocolate
  {
    id: '3',
    name: 'KitKat Choco',
    description: 'Crunchy KitKat bits with melted chocolate.',
    price: 169,
    category: 'Crunchy Chocolate',
    isVeg: true,
  },
  {
    id: '4',
    name: 'Biscoff Royal',
    description: 'The caramelized taste of Lotus Biscoff spread and crumbs.',
    price: 169,
    category: 'Crunchy Chocolate',
    isCastleKingChoice: true,
    isVeg: true,
  },

  // Royal Classics
  {
    id: '5',
    name: 'Honey Butter',
    description: 'Simple, sweet, and perfectly golden.',
    price: 89,
    category: 'Royal Classics',
    isVeg: true,
  },
  {
    id: '6',
    name: 'Strawberry Cream Cheese',
    description: 'Sweet strawberry compote meets tangy cream cheese.',
    price: 119,
    category: 'Royal Classics',
    isVeg: true,
  },

  // Chill Thrill Shakes
  {
    id: '7',
    name: 'Hazelnut Dream (Nutella)',
    description: 'A thick shake blended with pure Nutella joy.',
    price: 149,
    category: 'Chill Thrill Shakes',
    isBestseller: true,
    isVeg: true,
  },
  {
    id: '8',
    name: 'Snickerlicious Milk Choco',
    description: 'Peanuts, caramel, and chocolate in a glass.',
    price: 149,
    category: 'Chill Thrill Shakes',
    isVeg: true,
  },
  {
    id: '9',
    name: 'Cold Coffee',
    description: 'Classic brewed refreshment to wake you up.',
    price: 95,
    category: 'Chill Thrill Shakes',
    isVeg: true,
  },

  // Waffle Cakes
  {
    id: '10',
    name: 'Death by Chocolate Cake',
    description: 'Double layer waffle cake overloaded with chocolate.',
    price: 299,
    category: 'Waffle Cakes',
    isVeg: true,
  },
  {
    id: '11',
    name: 'Red Velvet Fantasy',
    description: 'Red velvet base with white chocolate and cheese cream.',
    price: 299,
    category: 'Waffle Cakes',
    isVeg: true,
  },

  // Waff-wich
  {
    id: '12',
    name: 'Royal Rocky Roads',
    description: 'Chocolate base, chocolate ice cream, oreos & almonds.',
    price: 189,
    category: 'Ice Cream Waff-wich',
    isCastleKingChoice: true,
    isVeg: true,
  },
  
  // Mini Treats
  {
    id: '13',
    name: 'Mini Pancakes (4pcs)',
    description: 'Bite-sized happiness with your choice of chocolate.',
    price: 59,
    category: 'Mini Treats',
    isVeg: true,
  }
];

export const MONTHLY_SPECIALS: MenuItem[] = [
  {
    id: 'special-1',
    name: 'Mango Mania Waffle',
    description: 'Fresh seasonal mangoes with vanilla cream.',
    price: 159,
    category: 'Royal Classics',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=101'
  },
  {
    id: 'special-2',
    name: 'Blueberry Blast Shake',
    description: 'Exotic blueberries blended into a thick shake.',
    price: 169,
    category: 'Chill Thrill Shakes',
    isVeg: true,
    image: 'https://picsum.photos/400/300?random=102'
  }
];

export const OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Castle Hour Specials',
    description: 'Get 15% OFF on all Waffles and Shakes!',
    validTime: '1 PM - 5 PM',
    discount: '15% OFF',
    image: 'https://picsum.photos/600/300?random=200'
  },
  {
    id: 'offer-2',
    title: 'Castle King Surprise',
    description: 'Free Belgian Choco Mini Pancake on purchase of ₹400+',
    discount: 'FREE GIFT',
    image: 'https://picsum.photos/600/300?random=201'
  }
];