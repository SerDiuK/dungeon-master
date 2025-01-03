import { ChangeDetectionStrategy, Component, Input, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CreateScenarioDto } from '@dm/shared-data-model';

@Component({
  selector: 'dm-create-scenario-dialog',
  imports: [CommonModule, ReactiveFormsModule, DialogModule, ButtonModule, TextareaModule, InputTextModule],
  templateUrl: './create-scenario-dialog.component.html',
  styleUrl: './create-scenario-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateScenarioDialogComponent {
  visible = input(false);

  create = output<CreateScenarioDto>();
  close = output();

  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
  });

  submit() {
    if (this.form.valid) {
      this.create.emit(this.form.getRawValue());
    }
  }
}
