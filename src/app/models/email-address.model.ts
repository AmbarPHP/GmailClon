import { Email } from "../models/email.model";
import { AddressType } from "./address-type.model";
import { Address } from "./address.model";

export class EmailAddress {
    public idEmailAddress:number;
    public idEmail:Email;
    public idAddress:Address;
    public idAddressType:AddressType;

    constructor(){
        this.idEmailAddress=1;
        this.idEmail=new Email();
        this.idAddress= new Address();
        this.idAddressType= new AddressType();
    }
}
