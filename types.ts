
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}
