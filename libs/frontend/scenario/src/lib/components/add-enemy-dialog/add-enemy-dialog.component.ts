import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-add-enemy-dialog',
  imports: [CommonModule],
  templateUrl: './add-enemy-dialog.component.html',
  styleUrl: './add-enemy-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEnemyDialogComponent {}
