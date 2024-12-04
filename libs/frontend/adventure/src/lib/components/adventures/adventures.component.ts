import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrpcService } from '@dm/frontend-shared';
import { Adventure } from '@dm/shared-data-model';

@Component({
  selector: 'dm-adventures',
  imports: [CommonModule],
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdventuresComponent implements OnInit {
  private readonly trpcClient = inject(TrpcService).getClient();

  async ngOnInit() {
    const adventures = (await this.trpcClient.adventure.getAdventures.query()) as Adventure[];
  }
}
