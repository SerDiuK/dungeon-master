import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-add-npc-dialog',
  imports: [CommonModule],
  templateUrl: './add-npc-dialog.component.html',
  styleUrl: './add-npc-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNpcDialogComponent {}
