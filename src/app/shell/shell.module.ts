import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [ShellComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ShellRoutingModule,
    PanelMenuModule,
    MenubarModule
  ]
})
export class ShellModule {}
