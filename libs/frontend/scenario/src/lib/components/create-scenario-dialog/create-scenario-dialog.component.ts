import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-scenario-dialog.component.html',
  styleUrl: './create-scenario-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateScenarioDialogComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
}
