import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrpcService } from '@dm/frontend-shared';

@Component({
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  private readonly trpcClient = inject(TrpcService).getClient();

  create() {
    this.trpcClient.user.createUser.mutate({
      name: 'Barry Bono',
      email: 'barry@bono.com',
      password: 'securePass',
    });
  }

  getAll() {
    this.trpcClient.user.getUsers.query();
  }
}
