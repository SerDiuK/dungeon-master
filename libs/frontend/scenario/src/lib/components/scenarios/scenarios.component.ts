import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DataViewModule } from 'primeng/dataview';
import { TrpcService } from '@dm/frontend-shared';
import { Scenario } from '@dm/shared-data-model';

@Component({
  selector: 'dm-scenarios',
  imports: [CommonModule],
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScenariosComponent implements OnInit {
  private readonly trpcClient = inject(TrpcService).getClient();

  scenarios = signal<Scenario[]>([]);

  async ngOnInit() {
    const scenarios = (await this.trpcClient.scenario.getScenarios.query()) as Scenario[];

    this.scenarios.set(scenarios);
  }

  openCreateScenario() {
    console.log('OPEN CREATE SCENARIO DIALOG (maybe a grid???)');
  }
}
