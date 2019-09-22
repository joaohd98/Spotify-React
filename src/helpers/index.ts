export class Helpers {

  static generateUrlGet = <T>(url: string, data: T): string => {

    let isFirstTry = true;

    for(let index in data) {

      if(isFirstTry) {

        url += "?" + index + "=" + data[index];
        isFirstTry = false;

      }

      else
        url += "&" + index + "=" + data[index];

    }

    return url;

  };

  static upperCaseFirstLetter = (text: string): string => {

    return text.charAt(0).toUpperCase() + text.slice(1);

  };

  static checkIfReachBottom = (): boolean => {

    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    return windowBottom >= docHeight;
  }


}
