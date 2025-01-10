import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';


@Pipe({ name: 'applySort' })
export class ApplySortPipe implements PipeTransform {
  transform(products: Product[], sortSelected: number|string): Product[] {
    if (!products) return [];
    
    let sortedProducts = products.slice();

    switch (sortSelected) {
      case "0": // A-Z
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "1": // Z-A
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "2": // Plus récent
        sortedProducts.sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());
        break;
      case "3": // Plus ancien
        sortedProducts.sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime());
        break;
      default:
        console.error('Invalid sortSelected value:', sortSelected);
        console.error('Invalid sortSelected value:', typeof sortSelected);
        
    }
    return sortedProducts;
  }

}
