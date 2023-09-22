import Img from "@/components/mdx/Img";
import Pre from "@/components/mdx/Pre";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import HereButton from "@/components/mdx/HereButton";
import Figure from "@/components/mdx/Figure";
import YoutubeVideo from "@/components/mdx/YoutubeVideo";
import Callout from "@/components/mdx/Callout";

const mdxConfig = {
  components: {
    pre: Pre,
    img: Img,
    HereButton: HereButton,
    Figure: Figure,
    YoutubeVideo: YoutubeVideo,
    Callout: Callout,
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
