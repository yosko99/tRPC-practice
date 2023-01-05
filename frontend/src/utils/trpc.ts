import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '../../../backend/appRouter';

export const trpc = createTRPCReact<AppRouter>();
