import { Injectable } from '@angular/core';
import { AppRouter } from '@dm/backend-trpc';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

@Injectable({
  providedIn: 'root',
})
export class TrpcService {
  private client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/trpc',
      }),
    ],
  });

  getClient() {
    return this.client;
  }
}
