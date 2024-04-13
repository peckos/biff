import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Użytkownicy',
        icon: 'pi pi-fw pi-file',
        routerLink: 'users2'
      },
      {
        label: 'Książki',
        icon: 'pi pi-fw pi-file',
        routerLink: 'books'
      }
    ];
  }
}
