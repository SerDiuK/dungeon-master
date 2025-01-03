import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ScenariosStore } from '../../store/scenarios.store';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { Scenario } from '@dm/shared-data-model';

@Component({
  selector: 'dm-scenario',
  imports: [CommonModule],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScenarioComponent implements OnInit {
  private readonly scenariosStore = inject(ScenariosStore);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  scenario = signal<Scenario | null>(null);
  loading = this.scenariosStore.loading;

  async ngOnInit() {
    this.route.paramMap
      .pipe(
        filter((data) => !!data),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(async (params) => {
        const scenario = await this.scenariosStore.getScenarioById(params.get('id') as string);

        this.scenario.set(scenario);
      });
  }
}
