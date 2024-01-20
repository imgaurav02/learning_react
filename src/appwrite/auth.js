import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }


    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //call another method which will directly login user
                console.log("created account");
                this.login({email, password})
                return userAccount
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            console.log("logged in");
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const currentUser = await this.account.get();
            console.log(currentUser , "Current User");
            return currentUser
        } catch (error) {
            console.log("getCurrentUser catch : ", error);
        }

        return null;
    }


    async logout(){
        try {
            await this.account.deleteSessions();  
        } catch (error) {
            console.log("logout catch : ", error);
        }
    }

}

const authService = new AuthService()

export default authService; //exporting object directly