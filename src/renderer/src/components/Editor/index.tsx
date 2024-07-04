import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Document.extend({
        content: "heading block*",
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: "Digite algum texto aqui...",
        emptyEditorClass:
          "before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none",
      }),
    ],
    // content: `
    //     <h1>Back-end</h1>
    //     <strong>Esse é o documento que explica sobre back-end</strong>

    //     `,

    autofocus: "end",
    editorProps: {
      attributes: {
        class: "focus:outline-none prose prose-invert",
      },
    },
  });
  return (
    <>
      <EditorContent className="w-[65ch]" editor={editor} />
    </>
  );
}
