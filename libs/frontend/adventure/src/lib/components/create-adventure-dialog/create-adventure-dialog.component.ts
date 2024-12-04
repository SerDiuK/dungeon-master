import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TrpcService } from '@dm/frontend-shared';
import { CreateAdventureDto } from '@dm/shared-data-model';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-adventure-dialog.component.html',
  styleUrl: './create-adventure-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateAdventureDialogComponent {
  readonly trcpClient = inject(TrpcService);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    scenario: new FormControl('', Validators.required),
  });

  startAdventure(): void {
    this.trcpClient.getClient().adventure.createAdventure.mutate(this.form.value as CreateAdventureDto);
  }
}
