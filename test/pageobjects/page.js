const timeout = 15000;

const methodOptions = {
  returnAllCompareData: true,
};

export default class Page {
 
  open(path) {
    browser.url(path);
  }
  
  filterMultipleElement() {
    browser.execute(() => {
      Array.from(document.querySelectorAll('._1__lJ'))
    .filter(element => element.innerText == 'Popular projects');
    
  })

}

}