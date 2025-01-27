import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="bg-green-200 text-black p-4 sm:p-6 mb-6">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-0">
          Harry Potter CARD
        </h1>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          class="p-2 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
          (input)="onSearch($event)"
        />
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  title = 'Harry Potter CARD';
  @Output() searchQuery = new EventEmitter<string>();

  onSearch(event: any): void {
    this.searchQuery.emit(event.target.value);
  }
}
