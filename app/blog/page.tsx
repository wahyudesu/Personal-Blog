// pages/blog.tsx
"use client";

import React, { useState } from 'react';
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { cn, sortPosts } from "@/lib/utils";
import { Inter } from 'next/font/google';
import { TagToggle } from "@/components/view"; // Import the new TagToggle component

const inter = Inter({ subsets: ['latin'] });

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  // State to toggle tags visibility
  const [showTags, setShowTags] = useState(true);

  // Function to handle the toggle button click
  const handleTagToggle = () => {
    setShowTags(prevState => !prevState);
  };

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className={cn("inline-block font-black text-4xl lg:text-5xl", "font-heading")}>
            Blog
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-xl text-muted-foreground">
              A blog built using Velite. Posts are written in MDX.
            </p>
            <TagToggle onToggle={handleTagToggle} showTags={showTags} />
          </div>
        </div>
      </div>
      <div className="gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags, read } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={showTags ? tags : undefined} // Only pass tags if showTags is true
                      read={read}
                      showTags={showTags} // pass the state
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}
