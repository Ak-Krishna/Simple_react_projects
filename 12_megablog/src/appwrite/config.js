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
  async updatePost({slug,content,title,status}){
    try {
        return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{title,content,status})
    } catch (error) {
        console.log("post is not updated due to internal error")
    }
  }

  //function for delete post
  async deletePost(slug){
    try {
        await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
    } catch (error) {
        console.log("post not get")
    }
  }
}
