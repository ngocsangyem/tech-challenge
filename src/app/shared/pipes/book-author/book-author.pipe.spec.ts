import { BookAuthorPipe } from './book-author.pipe';

describe('BookAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new BookAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
