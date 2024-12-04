import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-adventure',
  imports: [CommonModule],
  templateUrl: './adventure.component.html',
  styleUrl: './adventure.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventureComponent {}
