import * as React from "react";
import './styles.scss'
import spinner from "../../assets/spinner.svg";

export const LoadingSpinner = () => {

  return (

    <div className="loading-spinner">
      <img src={spinner} alt="spinner"/>
      <p>Carregando...</p>
    </div>

  )

};
