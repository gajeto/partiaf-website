export class Util {

    public static removeAccents(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    public static findString(str, str_compare) {
        if (!str) return false;
        return this.removeAccents(str.toLowerCase()).indexOf(Util.removeAccents(str_compare).toLowerCase()) > -1
    }
  
    public static isBase64(str) {
      try {
          return btoa(atob(str)) == str;
      } catch (err) {
          return false;
      }
    }

}