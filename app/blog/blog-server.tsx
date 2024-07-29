// pages/blog-server.tsx
import { Metadata } from "next";
import BlogPage from "./page"; // Import your client component

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

export default function BlogPageServer(props) {
  return <BlogPage {...props} />;
}
