export class Product {
    _id: number;
    _name: string;
    _description: string;
    _price: number;
    _amount: number;
    _image_link: string;

    constructor(name: string, description: string, price: number, amount: number, image_link: string) {
        this._name = name;
        this._description = description;
        this._price = price;
        this._amount = amount;
        this._image_link = image_link;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get imageLink(): string {
        return this._image_link;
    }

    set imageLink(value: string) {
        this._image_link = value;
    }

}
