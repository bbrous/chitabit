import * as React from "react";
import { EditorState, convertToRaw } from "draft-js";
import draftJsToHtml from "draftjs-to-html";

export default function DraftToHtml(draft) {
  let html_output = "";
  if (draft) {
    const content = draft.getCurrentContent();
    const raw = convertToRaw(content);
    html_output = draftJsToHtml(raw);
  }

  return <div style={{ width: "100%" }} dangerouslySetInnerHTML={{ html_output }} />;
}
