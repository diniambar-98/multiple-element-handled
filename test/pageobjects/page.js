import reporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import mergeImg from 'merge-img';

const timeout = 15000;

const methodOptions = {
  returnAllCompareData: true,
};

export default class Page {
 
 
  getMultipleElement(element) {
    browser.execute(() => {
      Array.from(document.querySelectorAll(element))
    })
  }

  filterMultipleElement(element,text) {
    const pool = this.getMultipleElement(element).map( element => element.innerText )
    const select = pool.filter(checkTitle);

    function checkTitle(Title) {
      return Title == text;
    }
  }
 
}
