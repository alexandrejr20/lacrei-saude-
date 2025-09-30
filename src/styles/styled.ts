import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      text: string;
    };
  }
}
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bg: '#F0F0F0',
    text: '#333333',
  },
};
