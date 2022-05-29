import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByClasse'
})
export class FilterByClassePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.classe.nom.toLocaleLowerCase().includes(searchText);
    });
  }

}
