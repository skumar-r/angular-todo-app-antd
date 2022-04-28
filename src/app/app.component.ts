import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mdn-angular-todo';
  selectedFilter: any;
  filteredItems: any = [];
  filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'TODO' },
    { value: 'done', label: 'Done' },
  ];

  bioSection = new FormGroup({
    filter: new FormControl('all'),
  });

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'learn', done: false },
    { description: 'play', done: false },
  ];

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.selectedFilter = this.bioSection.value.filter;
    if (this.selectedFilter === 'all') {
      this.filteredItems = Object.assign([], this.allItems);
    }
    if (this.selectedFilter === 'done') {
      this.filteredItems = Object.assign(
        [],
        this.allItems.filter((item) => {
          return item.done;
        })
      );
    }
    if (this.selectedFilter === 'active') {
      this.filteredItems = Object.assign(
        [],
        this.allItems.filter((item) => {
          return !item.done;
        })
      );
    }
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
    this.getItems();
  }

  remove(item: any) {
    this.filteredItems.splice(this.filteredItems.indexOf(item), 1);
  }
}
