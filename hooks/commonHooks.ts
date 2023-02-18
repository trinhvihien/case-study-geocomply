import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

BeforeAll(async function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
