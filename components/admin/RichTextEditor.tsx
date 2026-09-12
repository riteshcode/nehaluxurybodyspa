"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

type Props = {
  content: string;
  onChange: (html: string) => void;
};

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[300px] rounded-b-xl border border-t-0 border-charcoal/15 px-4 py-3 focus:outline-none",
      },
    },
  });

  // Keep editor in sync if `content` prop changes externally (e.g. Edit button)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const btnClass = (active: boolean) =>
    `rounded px-2.5 py-1.5 text-xs font-medium transition ${
      active
        ? "bg-ink text-cream"
        : "bg-cream-dim text-ink hover:bg-charcoal/10"
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-1.5 rounded-t-xl border border-charcoal/15 bg-white/80 p-2">
        {[1, 2, 3, 4, 5].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 }).run()
            }
            className={btnClass(editor.isActive("heading", { level }))}
          >
            H{level}
          </button>
        ))}
        <span className="mx-1 w-px bg-charcoal/15" />
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={btnClass(editor.isActive("paragraph"))}
        >
          P
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btnClass(editor.isActive("bold"))}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btnClass(editor.isActive("italic"))}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btnClass(editor.isActive("bulletList"))}
        >
          List
        </button>
        <span className="mx-1 w-px bg-charcoal/15" />
        <button type="button" onClick={setLink} className={btnClass(editor.isActive("link"))}>
          Link
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className={btnClass(false)}
        >
          Remove Link
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}