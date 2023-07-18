import { Component } from '@angular/core';

interface Item {
  name: string;
  cost: string;
}

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  showList:boolean = true;

  columnsToDisplay: string[] = ['name', 'cost'];

  items: Item[] = [
    { name: 'Item 1', cost: '10 USD' },
    { name: 'Item 2', cost: '20 USD' },
    { name: 'Item 3', cost: '30 USD' },
    { name: 'Item 4', cost: '40 USD' },
    { name: 'Item 5', cost: '50 USD' },
  ]

  toggleList() {
  this.showList = !this.showList;
};
}

