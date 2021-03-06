import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis'    // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args);
    value = value.substr(0, args[0]);
    return value + '...';
  }

}
