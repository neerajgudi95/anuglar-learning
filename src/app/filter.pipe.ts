import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterStatus: string, propName: string): any {
    if (filterStatus.length === 0 || filterStatus === '') return value;
    return value.filter((item: any) => item[propName] === filterStatus);
  }
}
