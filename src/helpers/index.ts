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

  }
}
