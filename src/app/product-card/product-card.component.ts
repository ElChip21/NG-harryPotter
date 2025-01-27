import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Product } from '../product';
import { DatePipe } from '@angular/common';
import { ProductService } from '../product.service';
import { trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  animations: [
    trigger('flyAnimation', [
      state('static', style({ transform: 'translateY(0)', opacity: 1 })),
      state('levitating', style({ transform: 'translateY(-100px) scale(1)' })),
      state('flying', style({ transform: 'translateY(-3000px) rotate(20deg) rotate(-60deg)', opacity: 0 })),
      transition('static => levitating', animate('0.5s ease-in-out')),
      transition('levitating => flying', animate('1s ease-in-out')),
      transition('flying => static', animate('1s ease-out'))
    ]),
    trigger('cardAnimation', [
      state('gryffindor', style({ borderWidth: '2px', borderColor: '#b01d18' })),
      state('slytherin', style({ borderWidth: '2px', borderColor: '#2E8B57' })),
      state('ravenclaw', style({ borderWidth: '2px', borderColor: '#4B8B9E' })),
      state('hufflepuff', style({ borderWidth: '2px', borderColor: '#F9E600' })),
    ])
  ],
  selector: 'app-product-card',
  imports: [DatePipe],
  template: `
  <div class="h-70 p-6 rounded-2xl shadow-lg bg-white transition-all ease-in-out"
      [@cardAnimation]="houseAnimationState" [@flyAnimation]="animationState">
    
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">{{ product.name }}</h1>
      <button (click)="switchFav()" class="focus:outline-none transition-transform transform hover:scale-110">
        <span class="text-3xl text-red-500">
          {{ product.isFavorite ? '💚' : '🤍' }}
        </span>
      </button>
    </div>

    <p class="text-sm text-gray-600 mb-2">{{ product.createdDate | date : 'fullDate' : '' : 'fr' }}</p>

    <p class="text-sm text-gray-500 font-medium">{{ product.grade }}</p>

    <div class="mt-4 text-sm">
      <div class="mb-2">
        <strong class="text-gray-700">Maison: </strong> 
        <span class="text-gray-900 font-semibold">{{ product.house }}</span>
      </div>
      <div class="mb-2">
        <strong class="text-gray-700">Rareté: </strong>
        <span class="text-gray-900 font-semibold">{{ product.rarity }}</span>
      </div>
    </div>
  </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  @Input({ required: true }) product: Product = { id: 0, name: '', isFavorite: false, createdDate: new Date(), rarity: '', house: '', grade: '' };
  @Input() isFlying: boolean = false;
  @Output() addItemEvent = new EventEmitter<number>();

  animationState: 'static' | 'levitating' | 'flying' = 'static';
  productService = inject(ProductService);

  switchFav() {
    this.productService.switchFav(this.product);
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }
  get houseAnimationState() {
    return this.product.house.toLowerCase();
  }

  toggleFly() {
    this.isFlying = !this.isFlying;
  }
  ngOnChanges() {
    if (this.isFlying) {
      this.animationState = 'levitating';
      setTimeout(() => this.animationState = 'flying', 800);
      setTimeout(() => this.animationState = 'static', 3000);
    }
  }
}