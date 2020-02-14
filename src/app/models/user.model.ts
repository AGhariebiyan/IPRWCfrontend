export class User {
  private _id: number;
  private _email: string;
  private _password: string;
  private _accountType: string;
  private _jwttoken: string;

  //Aangemelde gebruiker
  constructor(id: number, email: string, password: string, accountType: string, jwttoken: string) {
    this._id = id;
    this._email = email;
    this._password = password;
    this._accountType = accountType;
    this._jwttoken = jwttoken;
  }

  // get name(): string {
  //   return this._name;
  // }
  //
  // set name(value: string) {
  //   this._name = value;
  // }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get accountType(): string {
    return this._accountType;
  }

  set accountType(value: string) {
    this._accountType = value;
  }

  get jwttoken(): string {
    return this._jwttoken;
  }

  set jwttoken(value: string) {
    this._jwttoken = value;
  }
}
