import { ReactNode } from "react";
import { CopyToClipboard } from "./CopyToClipboard";

interface IPre {
  children?: ReactNode;
  theme?: string;
  showLineNumbers?: boolean;
}

export default function Pre({ children, theme, showLineNumbers }: IPre) {
  return (
    <CopyToClipboard>
      <pre
        className={`font-jetbrains overflow-x-auto rounded-lg px-4 py-3 w-full ${
          theme ? `${theme}-theme` : "bg-syntaxBg"
        } ${showLineNumbers ? "line-numbers" : ""}`}
      >
        {children}
      </pre>
    </CopyToClipboard>
  );
}
