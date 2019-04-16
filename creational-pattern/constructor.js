export class Avenger {
  constructor(name, specialPowers) {
    this._name = name;
    this._specialPowers = specialPowers;

    this.getDetails = function() {
      return `${this._name}'s special power is ${this._specialPowers}`;
    };
  }
}