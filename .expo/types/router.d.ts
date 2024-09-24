/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/emissions` | `/(tabs)/live` | `/(tabs)/pakistani_news` | `/_sitemap` | `/emissions` | `/live` | `/pakistani_news`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
