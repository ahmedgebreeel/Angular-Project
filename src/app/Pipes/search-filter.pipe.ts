import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any , args?:any): any {
    if (!value) return [];
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((id :any) => {
      return JSON.stringify(id).toLowerCase().includes(args)
      });
  }

}
