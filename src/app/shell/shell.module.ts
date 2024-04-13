import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ShellComponent, MenuComponent],
  imports: [CommonModule, RouterModule, ShellRoutingModule, PanelMenuModule]
})
export class ShellModule {}
