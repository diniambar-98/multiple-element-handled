import { When, Then, Given } from 'cucumber';
import Attr from '../pageobjects/pageObject.js';

Given(/^homePage Website$/, () => {
 Attr.openPage();
}); 

When(/^User get the element$/, () => {
 Attr.poolElement();
}); 

Then(/^User can filter the element$/, () => {
 Attr.filterElement();
}); 




