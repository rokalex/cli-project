import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from './product-list/product-list.component';
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterText: string): IProduct[] {
    
    return products.filter(product =>{
      return product.productName.indexOf(filterText) > -1;
    })
  }

}

//value(s pour tableau) est la valeur d'entrée (premier paramêtre). Ensuite on sépare avec des deux points: donc filter est le deuxième point.
//la fonction est du au fait que .filter demande une fonction. Si la fonction return vrai il garde le produit.
//indexOf javascript string et javascript array
//IProduct n'est pas trouvé. Il fallait
