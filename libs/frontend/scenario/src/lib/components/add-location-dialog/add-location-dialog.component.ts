import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-add-location-dialog',
  imports: [CommonModule],
  templateUrl: './add-location-dialog.component.html',
  styleUrl: './add-location-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLocationDialogComponent {}
