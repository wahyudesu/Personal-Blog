import { CalendarDays, Timer } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  image?: string;
  read?: number;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  image,
  read,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-4 border-border border-b py-3 px-4 transition-colors hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
      <div>
        <h2 className={`${inter.className} text-2xl font-extrabold`}>
          <Link href={"/" + slug}>{title}</Link>
        </h2>
        <div className="flex gap-2 text-sm leading-snug text-muted-foreground">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time className="max-w-none" dateTime={date}>
                {formatDate(date)} ·
              </time>
              <Timer size={16} />
              <div className="max-w-none">{read} min read</div>
            </dd>
          </dl>
        </div>
      </div>
      <div className="flex gap-2 list-none">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
    </article>
  );
}
