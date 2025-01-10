import { Component, Input, EventEmitter, Output, inject} from '@angular/core';
import { Product } from '../product';
import { DatePipe } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe],
  template: `
  <div>
    <h1>{{product.name}}</h1>
    <p>{{ product.createdDate | date: 'mediumDate':'fr' }}</p>
  @if (product.isFavorite) {
    <span><b>Favorite product</b>
    <button (click)="switchFav()">Do Fav</button>
    </span>
  } @else {
    <span>Simple product
    <button (click)="switchFav()">Do Fav</button>
    </span> 
  }
  </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  @Input({required:true}) product : Product = {id: 0, name: '', isFavorite: false, createdDate: new Date()};
  @Output() addItemEvent = new EventEmitter<number>();

  productService = inject(ProductService);
  switchFav() {
    this.productService.switchFav(this.product);
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
}
