export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: categoryObject;
  images?: string[];
  creationAt: Date;
  updatedAt?: Date;



  // borrar properties that are not used
  imageUrl: string;


}

export interface categoryObject {
  id: number;
  name: string;
  image: string;
  slug: string;
  creationAt: Date;
  updatedAt: Date;
}
