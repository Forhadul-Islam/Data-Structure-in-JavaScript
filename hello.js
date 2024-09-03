console.log('hello world!');

let socket;

function get_connection() {
    return `Connected to the server! observe realtime...`
}


class UserGen {
    constructor(username, model, publicKey){
        this.user = username;
        this.model = model;
        this.key = publicKey;
    }

    getUser(){
        return this.user;
    }
    getToken(){
        this.GENERATE_TOKEN(this.key);
    }
    GENERATE_TOKEN(key){
        return key;
    }
}
