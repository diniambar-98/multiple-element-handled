import Page from './page';

class Attr extends Page {
  get className() { return $('._1__lJ');}

 openPage() {
   super.open(`${browser.options.baseUrl}/singapore`)
 }

  poolElement() {
    super.getMultipleElement(this.className)
  }

  filterElement() {
    super.filterMultipleElement(this.className, 'Popular projects')
  }
}

export default new Attr();
