import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplySortPipe } from './product.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent, HeaderComponent, FooterComponent, FormsModule, ApplySortPipe, SearchPipe],
  template: `
  <app-header (searchQuery)="onSearch($event)" />
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="w-full max-w-5xl bg-white rounded-lg p-6">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-extrabold text-gray-900">Welcome to {{ title }}!</h1>
          <h2 class="text-xl text-gray-600 mt-2">{{ countFav }} 💚 favoris</h2>
          <div class="text-center mb-6">
            <button 
              class="px-4 py-2 bg-amber-600 text-black rounded-md hover:bg-amber-200 focus:outline-none transition-all"
              (click)="toggleLeviosa()">
              ✨ Wingardium Leviosa ! ✨
            </button>
            <p class="text-sm text-amber-400 mt-2">(Clique pour lancer un sort 💫)</p>
          </div>
          <div class="mt-4">
            <select [(ngModel)]="sortSelected" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300">
              @for (so of sortOptions; track so) {
                <option [value]="$index">{{ so }}</option>
              }
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          @for (p of (products | search:searchQuery | applySort:sortSelected); track p.id) {
            <app-product-card [product]="p" [isFlying]="isFlying" (addItemEvent)="addItem($event)"/>
          }
        </div>

      </div>
    </div>
    <app-footer></app-footer>
    <router-outlet />
  `,
  styles: [],
})

export class AppComponent {
  title = 'Harry Potter CARD';
  sortOptions = ['A-Z', 'Z-A', 'plus récent', 'plus ancien'];
  sortSelected = "0";
  countFav = 0;
  productService = inject(ProductService);
  products = this.productService.getProducts();
  searchQuery = '';
  isFlying = false;

  toggleLeviosa() {
    this.isFlying = !this.isFlying;
  }

  addItem(item: number) {
    this.countFav += item;
  }
  onSortChange() {
    console.log('Sort selected:', this.sortSelected);
  }
  onSearch(query: string): void {
    this.searchQuery = query;
  }
}
