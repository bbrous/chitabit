import * as React from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftJsToHtml from "draftjs-to-html";

export default function DraftToHtml({ draft }) {
  let __html = "";
  if (draft) {
    const content = draft.getCurrentContent();
    const raw = convertToRaw(content);
    __html = draftJsToHtml(raw);
  }

  return <div style={{ width: "100%" }} dangerouslySetInnerHTML={{ __html }} />;
}

