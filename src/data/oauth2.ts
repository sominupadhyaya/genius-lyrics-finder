// download lib for oauth2
import {ClientCredentials, ResourceOwnerPassword, AuthorizationCode } from "simple-oauth2"
import {CLIENT_ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET, URL} from "./client"

//simple oauth2




const config = {
    client : {
        id : CLIENT_ID,
        secret : CLIENT_SECRET
    },
    auth : {
        tokenHost : URL
    }
}

const hello = ""
async function run(){
    const client = new AuthorizationCode(config)

    const authorizeUri = client.authorizeURL({
        redirect_uri : "http://localhost:5173/something",
        scope : "me",
        state : "please work"
    })
}


