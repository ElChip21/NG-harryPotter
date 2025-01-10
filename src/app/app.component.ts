import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ApplySortPipe  } from './product.pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, FormsModule, ApplySortPipe],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <h2>{{countFav}} favorites </h2>
    <select [(ngModel)]="sortSelected">
      @for (so of sortOptions; track so) {
        <option [value]="$index">{{so}}</option>
      }
    </select>

    @for (p of (products | applySort:sortSelected); track p.id) {
      <app-product-card 
        [product]="p"
        (addItemEvent)="addItem($event)"
      />
    }
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ng-pokemon';
  sortOptions = ['A-Z', 'Z-A', 'plus récent', 'plus ancien'];
  sortSelected = "0";
  countFav = 0;
  productService = inject(ProductService);
  products = this.productService.getProducts();

  addItem(item: number) {
    this.countFav += item;
  }
    onSortChange() {
      console.log('Sort selected:', this.sortSelected);
    }
}
