import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";


export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-6 lg:py-32">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.medium}
            className={cn("bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium", "font-sans")}
            target="_blank"
          >
            See me on Medium
          </Link>
          <h1 className={cn("text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance", "font-heading")}>
            Hello, I&apos;m Wahyu
          </h1>
          <p className={cn("max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance", "font-sans")}>
            Welcome to my blog.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className={cn("text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center", "font-heading")}>
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            post.published && (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
            )
          ))}
        </ul>
      </section>
    </>
  );
}
