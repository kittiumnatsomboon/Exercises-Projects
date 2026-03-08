export class Authregister{

    // property formregister
    public firstname:String = ""
    public lastname:String = ""
    public email:String = ""
    public password:String = ""


    constructor(
        firstname:String,
        lastname:String,
        email:String,
        password:String
    ){
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
    }
    
    /**
     * name
     */
    public apiregister() {
        console.log(this.firstname)
    }
}