import { convertFromRaw,  EditorState } from "draft-js";

/*
Takes Draft JS Raw output
*/

export default function stringToDraftState(text) {
  try {
    const json = JSON.parse(text);
    const raw = convertFromRaw(json);
    const state = EditorState.createWithContent(raw);
    console.log(state);
    return state;
  } catch (e) {
    return EditorState.createEmpty();
  }
}