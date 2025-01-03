import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateAdventureDto, Scenario } from '@dm/shared-data-model';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'dm-create-adventure-dialog',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DialogModule, DropdownModule, InputTextModule],
  templateUrl: './create-adventure-dialog.component.html',
  styleUrl: './create-adventure-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAdventureDialogComponent {
  visible = input(false);
  scenarios = input<Scenario[]>([]);

  create = output<CreateAdventureDto>();
  close = output();

  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }),
    scenarioId: new FormControl('', { validators: [Validators.required], nonNullable: true }),
  });

  submit() {
    console.log('submit', this.form.valid);

    if (this.form.valid) {
      console.log('submit');
      this.create.emit(this.form.getRawValue());
    }
  }
}
