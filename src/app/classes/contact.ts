export class Contact{
    public id:String;
    public name:String;
    public email:String;
    public phone:String;
    public city:String;
    public message:String;
    public reason:String;
    public token:String;

    constructor(){
        this.id = null;
        this.name = null;
        this.email = null;
        this.phone = null;
        this.city = null;
        this.message = null;
        this.reason = "1";
        this.token = null;
    }
}