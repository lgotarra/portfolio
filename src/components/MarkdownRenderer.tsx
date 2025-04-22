import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none text-sm text-justify">
      <ReactMarkdown
        remarkPlugins={[remarkBreaks]}
        components={{
          strong: (props) => (
            <strong className="font-semibold text-primary" {...props} />
          ),
          em: (props) => <em className="italic text-secondary" {...props} />,
          ul: (props) => (
            <ul className="list-none pl-0 my-3 space-y-2" {...props} />
          ),
          ol: (props) => (
            <ol className="list-none pl-0 my-3 space-y-2" {...props} />
          ),
          li: (props) => {
            // Usamos la columna de inicio para determinar el nivel
            const level = props.node?.position?.start.column ?? 0;

            // Si level es 1 (primer nivel), no aplicamos padding
            const paddingLeft = level > 1 ? `${(level - 2) * 1.5}rem` : "0";

            return (
              <li
                className="flex-col items-center text-sm"
                style={{ paddingLeft }}
              >
                <span
                  className={`mr-3
                    ${
                      level === 3
                        ? "text-accent"
                        : level === 5
                          ? "text-blue-500"
                          : level === 7
                            ? "text-emerald-500"
                            : "text-neutral-500"
                    }`}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "currentColor",
                    display: "inline-block",
                  }}
                />
                {props.children}
              </li>
            );
          },
          a: (props) => (
            <a
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          code: (props) => (
            <code
              className="bg-muted text-[0.85em] text-secondary font-mono px-1 py-0.5 rounded"
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
