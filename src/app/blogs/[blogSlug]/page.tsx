import DetailHeading from "@/components/blogs/DetailHeading";
import TableOfContent from "@/components/blogs/TableOfContent";
import { Button } from "@/components/ui/Button";
import mdxConfig from "@/config/mdxConfig";
import { getBlogBySlug, getBlogSlugs } from "@/services/blogService";
import { IBlog } from "@/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ScrollProgressBar from "@/components/blogs/ScrollProgressBar";
import siteConfig from "@/config/siteConfig";
import { Metadata } from "next";

interface BlogParams {
  params: { blogSlug: string };
}

export function generateMetadata({ params }: BlogParams): Metadata {
  const { blogSlug } = params;
  const { data } = getBlogBySlug(blogSlug);
  return {
    title: `${data.title} | ${siteConfig.brand}`,
    description: data.excerpt,
    openGraph: {
      images: [data.thumbnail],
    },
  };
}

export function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    blogSlug: slug,
  }));
}

export default function BlogDetail({ params }: BlogParams) {
  const { blogSlug } = params;
  const { data, content } = getBlogBySlug(blogSlug);

  return (
    <div>
      <ScrollProgressBar />

      {/* Blog Content */}
      <article className="py-10 md:py-20">
        <DetailHeading {...(data as IBlog)} />

        <main>
          <div className="container">
            <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
              <div className="prose max-w-none">
                <MDXRemote
                  source={content}
                  components={mdxConfig.components}
                  options={{
                    //@ts-ignore
                    mdxOptions: mdxConfig.options,
                  }}
                />
              </div>

              <aside className="hidden lg:block">
                <div className="sticky top-[calc(var(--navbar-height)+3rem)] h-full max-h-[calc(75vh)] overflow-scroll p-4">
                  <TableOfContent />
                </div>
              </aside>
            </div>
          </div>
        </main>
        {/* Back to blogs */}
        <div className="mt-14">
          <div className="container">
            <Button size="lg" asChild>
              <Link href="/blogs" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Trở về Blog
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
