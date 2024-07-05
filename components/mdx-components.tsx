import Image from "next/image";
import * as React from "react";
import * as runtime from "react/jsx-runtime";

import { Callout } from "@/components/callout";
import { cn } from "@/lib/utils";

const useMDXComponent = (code: any) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: ({ className, ...props }: { className?: any }) => (
    <h1
      className={cn(
        "scroll-m-20 border-b pb-1 font-bold text-4xl tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className?: any }) => (
    <h2
      className={cn(
        "mt-5 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 -mb-2",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className?: any }) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className?: any }) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className?: any }) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className?: any }) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className?: any }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className?: any }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className?: any }) => (
    <ul className={cn("prose-ul:list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: { className?: any }) => (
    <ol className={cn("prose-ol:list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: { className?: any }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className?: any }) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { className?: any }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: { className?: any }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: { className?: any }) => (
    <tr
      className={cn("even:bg-muted m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: { className?: any }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className?: any }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className?: any }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  Image: ({ className, ...props }: { className?: any }) => (
    <div className="justify-center">
      <Image className={cn("rounded-md border mb-10", className)} alt={alt} {...props} />
    </div>
  ),
  Callout: ({ className, ...props }: { className?: any }) => (
    <Callout {...props} />
  ),
};
interface MdxProps {
  code: any;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
