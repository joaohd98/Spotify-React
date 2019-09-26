import {
  Href,
  Location,
  LocationDescriptorObject,
  LocationListener, LocationState,
  Path,
  TransitionPromptHook,
  UnregisterCallback
} from "history";

export interface CustomLocation {
  hash: string
  pathname: string
  search: string
  state: {
    [key: string]: string
  }
}
export interface CustomHistory {
  length: number,
  action: "PUSH" | "REPLACE" | "POP",
  location: CustomLocation;
  push(path: Path, state?: any): void;
  push(location: LocationDescriptorObject<any>): void;
  replace(path: Path, state?: any): void;
  replace(location: LocationDescriptorObject<any>): void;
  go(n: number): void;
  goBack(): void;
  goForward(): void;
  block(
    prompt?: boolean | string | TransitionPromptHook<any>,
  ): UnregisterCallback;
  listen(listener: LocationListener<any>): UnregisterCallback;
  createHref(location: LocationDescriptorObject<any>): Href;
}

export interface GlobalProps {

  history?: CustomHistory;

  location?: CustomLocation;

  match?: {
    isExact: boolean,
    params: {
      [key: string]: string
    },
    path: string,
    url: string
  }

}
