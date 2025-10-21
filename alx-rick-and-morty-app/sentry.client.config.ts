// sentry.client.config.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN', // replace with your actual DSN
  tracesSampleRate: 1.0,
});
