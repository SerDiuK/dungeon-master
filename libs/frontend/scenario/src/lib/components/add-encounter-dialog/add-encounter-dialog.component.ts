import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-add-encounter-dialog',
  imports: [CommonModule],
  templateUrl: './add-encounter-dialog.component.html',
  styleUrl: './add-encounter-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEncounterDialogComponent {}
