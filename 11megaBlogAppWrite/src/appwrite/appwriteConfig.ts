import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";
import { createPost } from "../types/authTypes";

export class Service {
  client = new Client();
  databases: Databases | null = null;
  bucket: Storage | null = null;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({
    title,
    content,
    featuredImage,
    status,
    userId,
  }: createPost) {
    try {
      return await this.databases?.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        ID.unique(),
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      throw new Error(`Appwrite service createPost error: ${error}`);
    }
  }

  async updatePost(
    slug: string,
    { title, content, featuredImage, status }: createPost
  ) {
    try {
      const documents = await this.databases?.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        [Query.equal("slug", slug)] // Correct usage of Query.equal in an array
      );

      if (documents?.total === 0) {
        throw new Error("Post not found");
      }

      const documentId = documents?.documents[0].$id;

      return await this.databases?.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId!,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      throw new Error(`Appwrite service updatePost error: ${error}`);
    }
  }

  async deletePost(slug: string) {
    try {
      const documents = await this.databases?.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        [Query.equal("slug", slug)] // Correct usage of Query.equal in an array
      );

      if (documents?.total === 0) {
        throw new Error("Post not found");
      }

      const documentId = documents?.documents[0].$id;

      await this.databases?.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId!
      );

      return true;
    } catch (error) {
      throw new Error(`Appwrite service deletePost error: ${error}`);
    }
  }

  async getPost(slug: string) {
    try {
      const documents = await this.databases?.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        [Query.equal("slug", slug)] // Correct usage of Query.equal in an array
      );

      if (documents?.total === 0) {
        throw new Error("Post not found");
      }

      const documentId = documents?.documents[0].$id;

      return await this.databases?.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        documentId!
      );
    } catch (error) {
      throw new Error(`Appwrite service getPost error: ${error}`);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases?.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
      );
    } catch (error) {
      throw new Error(`Appwrite service getPosts error: ${error}`);
    }
  }

  // Upload file
  async uploadFIle(file: File) {
    try {
      return await this.bucket?.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw new Error(`Appwrite service uploadFIle error: ${error}`);
    }
  }

  // Delete file
  async deleteFile(fileId: string) {
    try {
      await this.bucket?.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      throw new Error(`Appwrite service deleteFile error: ${error}`);
    }
  }

  // File Preview
  async getFilePreview(fileId: string) {
    try {
      return await this.bucket?.getFilePreview(config.appWriteBucketId, fileId);
    } catch (error) {
      throw new Error(`Appwrite service getFilePreview error: ${error}`);
    }
  }
}

const service = new Service();

export default service;
