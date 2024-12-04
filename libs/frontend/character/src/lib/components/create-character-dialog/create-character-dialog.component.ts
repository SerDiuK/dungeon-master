import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-create-character-dialog',
  imports: [CommonModule],
  templateUrl: './create-character-dialog.component.html',
  styleUrl: './create-character-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCharacterDialogComponent {}
