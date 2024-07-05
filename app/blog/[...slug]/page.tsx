import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import { cn, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
 import Metadata from "next";
import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/titik-3";
import Progressbar from "@/components/progressbar"; // Assuming you have a progressbar component

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  
  if (!post) {
    return null; // Return null when no post is found
  }
  return post;
}

// SEO
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <>
      <article className="container relative max-w-3xl mx-auto py-12 lg:py-12 prose dark:prose-invert">
        {post.date && (
          <time dateTime={post.date} className="text-muted-foreground block text-sm">
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mb-1 mt-2 font-heading inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="flex justify-between items-center">
          <div className="-mt-2 flex items-center space-x-3 text-sm">
            <Image
              src="/avatar.png"
              alt={siteConfig.author}
              width={38}
              height={38}
              className="rounded-full bg-white"
            />
            <div className="flex-shrink text-left leading-none">
              <p className="font-medium">{siteConfig.author}</p>
              <p className="text-muted-foreground text-[12px] -mt-3">
                @{siteConfig.links.instagram}
              </p>
            </div>
          </div>
          <ModeToggle />
        </div>
        {/* <div className="flex gap-2">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div> */}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="mt-1 bg-muted rounded-md border transition-colors"
            priority
          />
        )}
        <MDXContent code={post.body} />
        <hr className="mt-12 mb-5" />
        <div className="flex gap-2 justify-center">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </article>
      <Progressbar />
    </>
  );
}
