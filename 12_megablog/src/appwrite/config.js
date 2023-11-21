import conf from "../conf/config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Services {
  client = new Client();
  databases;
  bucket;

  Services() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //function for creating post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Post is not created", error);
    }
  }

  // function for updating post
  async updatePost({ slug, content, title, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, status }
      );
    } catch (error) {
      console.log("post is not updated due to internal error");
    }
  }

  //function for delete post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("post not get");
    }
  }

  //function for getting post
  async getPost(slug, { queries = Query.equal("status", "active") }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        queries
      );
    } catch (error) {
      console.log(error);
    }
  }

  //function for upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log(error);
    }
  }

  //function for delete file
  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
    } catch (error) {
      console.log(error)
    }
  }
}
