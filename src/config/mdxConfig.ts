import Img from "@/components/mdx/Img";
import Pre from "@/components/mdx/Pre";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";

const mdxConfig = {
  components: {
    pre: Pre,
    img: Img,
  },
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: { className: ["anchor"] },
        },
        { behaviour: "wrap" },
      ],
      rehypeHighlight,
      rehypeCodeTitles,
    ],
  },
};

export default mdxConfig;
