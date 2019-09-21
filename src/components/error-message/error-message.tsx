import React from "react";
import "./error-message.scss"

export interface ErrorMessageInterface {
  title: string,
  subTitle: string,
  buttonText?: string,
  buttonPress?: () => void
}

export class ErrorMessage extends React.Component<ErrorMessageInterface>{

  render() {

    let {title, subTitle, buttonText, buttonPress} = this.props;

    return (
      <div className="error-message">
        <p>{ title }</p>
        <p>{ subTitle }</p>
        { buttonPress && buttonText ? <button onClick={buttonPress}>{ buttonText }</button> : '' }
      </div>
    )


  }


}
