import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookAuthor'
})
export class BookAuthorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
