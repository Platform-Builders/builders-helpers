import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    white: string;
  }
}

export * from './web';
