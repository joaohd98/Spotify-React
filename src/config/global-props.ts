import History from "react-router-dom";

export interface GlobalProps {

  history?: any;

  location?: {
    hash: string
    pathname: string
    search: string
    state: string
  };

}
