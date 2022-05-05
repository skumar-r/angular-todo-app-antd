import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { LocalNotifications } from '@capacitor/local-notifications';

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
    { value: 'active', label: 'Pending' },
    { value: 'done', label: 'Completed' },
  ];

  bioSection = new FormGroup({
    filter: new FormControl('all'),
  });

  position: NzTabPosition = 'bottom';
  apiResponse = "";

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

//wsproxy_api_url = 'https://webservices.mynet-chef.com/vendor/v1/getAllVendors';
wsproxy_api_url = 'http://samplebootstrap-env.eba-fbm8bt3y.us-east-1.elasticbeanstalk.com/wsproxy2';

headerParams = {
  'password': 'margqa',
  'userid': 'margqa',
  'sitename': 'margqa-2-5',
  'connexLoginToken': 'test123',
  'Accept': 'application/json',
  'authenticationtoken': 'lc*tno@@12$$!((&&gw#apr632hckajsh54@duysuyasty15'

};
config = {
  headers: this.headerParams,
  params: {
      auditLog: false
  },
};

 callAPI(){
  LocalNotifications.checkPermissions().then( available => {
    LocalNotifications.requestPermissions().then( res => {
      
    });
    
  });
 
    axios.get(this.wsproxy_api_url, this.config)
        .then(res => {  
          this.apiResponse = res.data; 
          LocalNotifications.schedule({
            notifications: [
              {
                title: "API Invoked",
                body: res.data,
                id: 1,
                //schedule: { at: new Date(Date.now()) },
                sound: undefined,
                attachments: undefined,
                actionTypeId: "",
                extra: null
              }
            ]
          });
        })
        .catch( reason => {           
          this.apiResponse = reason.data;
          LocalNotifications.schedule({
            notifications: [
              {
                title: "API Invoked",
                body: reason,
                id: 1,
                //schedule: { at: new Date(Date.now()) },
                sound: undefined,
                attachments: undefined,
                actionTypeId: "",
                extra: null
              }
            ]
          });
        });
        
  }

}
