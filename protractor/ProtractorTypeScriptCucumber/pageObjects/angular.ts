import { ElementFinder, element, by } from "protractor";

export class Angular
{
    search:ElementFinder;
constructor()
{
    this.search=element(by.css("input[type='search']"));
}
}