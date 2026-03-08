export class Authregister {

    // property formregister
    public firstname: String = ""
    public lastname: String = ""
    public email: String = ""
    public password: String = ""


    constructor(
        firstname: String,
        lastname: String,
        email: String,
        password: String
    ) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
        this.password = password
    }

    /**
     * name
     */
    public async apiregister() {

        const respone = await fetch("http://localhost:3000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // The body of the request, stringified
            body: JSON.stringify({
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            })
        });
        
    }
}