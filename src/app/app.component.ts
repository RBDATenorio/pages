import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images = [
    {
      title: 'Na praia', 
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'Praia Brava',
      url: 'https://images.unsplash.com/photo-1611148799269-63df34f63f6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJhaWElMjBicmF2YXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Praia do Sancho',
      url: 'https://images.unsplash.com/photo-1593193391560-76ce8e2b313c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJhaWElMjBkbyUyMHNhbmNob3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Praia do Leão',
      url: 'https://images.unsplash.com/photo-1553894506-d9ff27d44a90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cHJhaWElMjBkbyUyMGxlJUMzJUEzb3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

}
