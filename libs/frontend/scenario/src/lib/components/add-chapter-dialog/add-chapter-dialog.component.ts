import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-add-chapter-dialog',
  imports: [CommonModule],
  templateUrl: './add-chapter-dialog.component.html',
  styleUrl: './add-chapter-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddChapterDialogComponent {}
