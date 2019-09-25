import React from "react";
import "./styles.scss"

export interface ErrorMessageInterface {
  title: string | JSX.Element,
  subTitle: string | JSX.Element,
  buttonText?: string,
  buttonPress?: () => void
}

export const ErrorMessage = (props: ErrorMessageInterface) => {

  let { title, subTitle, buttonText, buttonPress } = props;

  return (
    <div className="error-message">
      <div className="title">{ title }</div>
      <div className="sub-title">{ subTitle }</div>
      { buttonPress && buttonText ? <button onClick={buttonPress}>{ buttonText }</button> : '' }
    </div>
  )

};
