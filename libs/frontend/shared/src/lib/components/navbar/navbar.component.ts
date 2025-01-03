import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dm-navbar',
  imports: [CommonModule, MenubarModule, AvatarModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/',
    },
    {
      label: 'Scenarios',
      icon: 'pi pi-home',
      url: '/scenarios',
    },
    {
      label: 'My adventures',
      icon: 'pi pi-home',
      url: '/adventures',
    },
    {
      label: 'My characters',
      icon: 'pi pi-home',
      url: '/characters',
    },
  ];
}
