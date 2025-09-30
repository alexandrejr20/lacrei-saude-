declare module 'jest-axe';

import 'jest';

declare module 'jest' {
  interface Matchers<R> {
    toHaveNoViolations(): R;
  }
}