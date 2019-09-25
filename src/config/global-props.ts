import {
  Href,
  Location,
  LocationDescriptorObject,
  LocationListener, LocationState,
  Path,
  TransitionPromptHook,
  UnregisterCallback
} from "history";

export interface CustomHistory {
  length: number,
  action: "PUSH" | "REPLACE" | "POP",
  location: Location<any>;
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

  location?: {
    hash: string
    pathname: string
    search: string
    state: string
  };

  match?: {
    isExact: boolean,
    params: {
      [key: string]: string
    },
    path: string,
    url: string
  }

}
