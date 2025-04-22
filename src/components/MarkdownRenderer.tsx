import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none text-sm text-justify">
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          strong: (props) => <strong className="font-semibold" {...props} />,
          em: (props) => <em className="italic" {...props} />,
          ul: (props) => (
            <ul className="list-disc list-outside pl-6 mb-3" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal list-outside pl-6 mb-3" {...props} />
          ),
          li: (props) => <li className="mb-1" {...props} />,
          a: (props) => (
            <a
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
