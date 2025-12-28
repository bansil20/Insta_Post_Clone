import conf from '../configuration/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch(error){
            throw new Error(error.message);
        }
    }

    async login({ email, password }) {
        try{
            return await this.account.createSession(email, password);
        } catch(error){
            throw new Error(error.message);
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get();
        } catch(error){
            console.log("getCurrentUser error:", error.message);
        }
        return null;
    }

    async logout() {
        try{
            return await this.account.deleteSessions('current');
        } catch(error){
            throw new Error(error.message);
        }
    }
}

const authservice = new AuthService();

export default authservice;