import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { CreateScenarioDto } from '@dm/shared-data-model';
import { CreateScenarioDialogComponent } from '../create-scenario-dialog/create-scenario-dialog.component';
import { ScenariosStore } from '../../store/scenarios.store';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'dm-scenarios',
  imports: [CommonModule, ButtonModule, DataViewModule, CreateScenarioDialogComponent, RouterModule],
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScenariosComponent implements OnInit {
  private readonly scenariosStore = inject(ScenariosStore);
  private readonly router = inject(Router);

  scenarios = this.scenariosStore.scenarios;
  showDialog = signal(false);

  async ngOnInit() {
    await this.scenariosStore.getScenarios();
  }

  async createScenario(newScenario: CreateScenarioDto) {
    const scenario = await this.scenariosStore.createScenario(newScenario);
    this.showDialog.set(false);
    this.router.navigate(['scenarios', scenario._id]);
  }
}
