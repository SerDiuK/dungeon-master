import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventuresStore } from '../../store/adventures.store';
import { CreateAdventureDialogComponent } from '../create-adventure-dialog/create-adventure-dialog.component';
import { Router, RouterModule } from '@angular/router';
import { CreateAdventureDto } from '@dm/shared-data-model';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ScenariosStore } from '@dm/frontend-scenario';

@Component({
  selector: 'dm-adventures',
  imports: [CommonModule, CreateAdventureDialogComponent, RouterModule, ButtonModule, DataViewModule],
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventuresComponent implements OnInit {
  private readonly adventuresStore = inject(AdventuresStore);
  private readonly scenariosStore = inject(ScenariosStore);
  private readonly router = inject(Router);

  adventures = this.adventuresStore.adventures;
  scenarios = this.scenariosStore.scenarios;
  showDialog = signal(false);

  async ngOnInit() {
    await this.adventuresStore.getAdventures();
  }

  async createAdventure(newAdventure: CreateAdventureDto) {
    const adventure = await this.adventuresStore.createAdventure(newAdventure);
    this.showDialog.set(false);
    this.router.navigate(['adventures', adventure._id]);
  }

  async openDialog() {
    this.showDialog.set(true);

    await this.scenariosStore.getScenarios();
  }
}
