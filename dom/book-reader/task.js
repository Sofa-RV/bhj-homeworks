document.querySelectorAll('.font-size').forEach(sizeControl => {
  sizeControl.addEventListener('click', event => {
    event.preventDefault();
    const target = event.currentTarget;
    const book = document.getElementById('book');
    
    document.querySelectorAll('.font-size').forEach(el => el.classList.remove('font-size_active'));
    
    target.classList.add('font-size_active');
    
    book.classList.remove('book_fs-small', 'book_fs-big');
    
    const size = target.getAttribute('data-size');
    
    if(size === 'small') {
      book.classList.add('book_fs-small');
    } else if(size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});
