"use client"

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const slideUp = {
  init: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.2 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};


export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 sm:pt-12 md:pb-12 md:mt-6 lg:py-32">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <a
            href={siteConfig.links.medium}
            className={cn("bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium", "font-sans")}
            target="_blank"
            rel="noreferrer"
          >
            See me on Medium
          </a>
          <h1 className={cn("text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance", "font-heading")}>
            Hello, I&apos;m Wahyu
          </h1>
          <div>
            <Typewriter
              options={{
                loop: true,
                wrapperClassName: ("max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance")
              }}
              onInit={(typewriter) => { 
                typewriter.typeString('Welcome to my blog!') 
                  .callFunction(() => { 
                    console.log('String typed out!'); 
                  }) 
                  .pauseFor(2500) 
                  .deleteAll() 
                  .callFunction(() => { 
                    console.log('All strings were deleted'); 
                  }) 
                  .start(); 
              }} 
            /> 
          </div>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my blog
            </Link>
            <a
              href={siteConfig.links.personalSite}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              View my Website
            </a>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-40">
        <h2 className={cn("text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center", "font-heading")}>
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post, index) => (
            post.published && (
              <li key={post.slug} className={index === 0 ? "first:border-t first:border-border" : ""}>
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                  read={post.read}
                />
              </li>
            )
          ))}
        </ul>
      </section>
      <Analytics />
    </>
  );
}
