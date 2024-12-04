import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dm-scenario',
  imports: [CommonModule],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScenarioComponent {}
