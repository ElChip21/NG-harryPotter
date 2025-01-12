import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    <Product>{ id: 0, name: 'Harry Potter', isFavorite: false, createdDate: new Date(1980, 6, 31), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 1, name: 'Ronald Weasley', isFavorite: false, createdDate: new Date(1980, 3, 1), rarity: 'common', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 2, name: 'Hermione Granger', isFavorite: false, createdDate: new Date(1979, 8, 19), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 3, name: 'Neville Longbottom', isFavorite: false, createdDate: new Date(1980, 7, 30), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 4, name: 'Albus Dumbledore', isFavorite: false, createdDate: new Date(1881, 7, 30), rarity: 'very rare', house: 'Gryffindor', grade: 'Headmaster' },
    <Product>{ id: 5, name: 'Severus Snape', isFavorite: false, createdDate: new Date(1960, 1, 9), rarity: 'rare', house: 'Slytherin', grade: 'Professor' },
    <Product>{ id: 6, name: 'Draco Malfoy', isFavorite: false, createdDate: new Date(1980, 5, 5), rarity: 'rare', house: 'Slytherin', grade: 'Student' },
    <Product>{ id: 7, name: 'Luna Lovegood', isFavorite: false, createdDate: new Date(1981, 2, 13), rarity: 'rare', house: 'Ravenclaw', grade: 'Student' },
    <Product>{ id: 8, name: 'Ginny Weasley', isFavorite: false, createdDate: new Date(1981, 7, 11), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 9, name: 'Fred Weasley', isFavorite: false, createdDate: new Date(1978, 3, 1), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 10, name: 'George Weasley', isFavorite: false, createdDate: new Date(1978, 3, 1), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 11, name: 'Minerva McGonagall', isFavorite: false, createdDate: new Date(1935, 9, 4), rarity: 'very rare', house: 'Gryffindor', grade: 'Professor' },
    <Product>{ id: 12, name: 'Hagrid', isFavorite: false, createdDate: new Date(1928, 11, 6), rarity: 'rare', house: 'Gryffindor', grade: 'Gamekeeper' },
    <Product>{ id: 13, name: 'Sirius Black', isFavorite: false, createdDate: new Date(1960, 10, 11), rarity: 'rare', house: 'Gryffindor', grade: 'Student' },
    <Product>{ id: 14, name: 'Remus Lupin', isFavorite: false, createdDate: new Date(1960, 2, 10), rarity: 'rare', house: 'Gryffindor', grade: 'Professor' },
    <Product>{ id: 15, name: 'Norbert Dragonneau', isFavorite: false, createdDate: new Date(1897, 4, 29), rarity: 'rare', house: 'Hufflepuff', grade: 'Magizoologist' },
  ];
  
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products[id];
  }
  switchFav(product: Product) {
  product.isFavorite = !product.isFavorite;

  }
}