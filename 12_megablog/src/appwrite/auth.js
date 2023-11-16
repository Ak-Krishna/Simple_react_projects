/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import conf from "../conf/config";

export class AuthServices {
  client = new Client();
  account;

  AuthServices() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      console.log(
        "authentication failed :: Username and password is not valid"
      );
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(
        "authentication failed :: User with this username and password is not available"
      );
    }
    return null;
  }

  async logOut(){
    try {
        this.account.deleteSession('current');
        console.log("Logged out successfully");
    } catch (error) {
        console.log()
    }
  }
}

const authServices = new AuthServices();
export default authServices;
