import config from "../config/config";
import { Client, Account, ID } from "appwrite";
import {
  userAccountCreationType,
  userLoginCredentialsType,
} from "../types/authTypes";

export class AuthService {
  client = new Client();
  account: Account | null = null;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }: userAccountCreationType) {
    try {
      const userAccount = await this.account?.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Another method to create user
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: unknown) {
      throw new Error(`Account creation failed: ${error}`);
    }
  }

  async login({ email, password }: userLoginCredentialsType) {
    try {
      return await this.account?.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(`Appwrite service login error: ${error}`);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account?.get();
    } catch (error) {
      throw new Error(`Appwrite service getCurrentUser error: ${error}`);
    }
  }

  async logOut() {
    try {
      return await this.account?.deleteSessions();
    } catch (error) {
      throw new Error(`Appwrite service logOut error: ${error}`);
    }
  }
}

const authService = new AuthService();

export default authService;
