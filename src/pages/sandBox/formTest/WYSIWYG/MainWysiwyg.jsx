
/*  WYSIWYG from code sandbox
https://codesandbox.io/s/loving-pine-ec4ty?file=/src/styles.css:0-58

need to install 
   react-draft-wysiwyg
   draft-js
   draftjs-to-html
   etc
*/


import React from "react";
import { useForm, Controller } from "react-hook-form";
import WYSIWYGEditor from "./WYSIWYG";

const MainWysiwyg = () => {
  /**
   * react-hook-form library
   */
  const { handleSubmit, control } = useForm({
    mode: "onChange"
  });

  // Handle Data Submit to APi for SignUp

  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <section>
      <h1>CODE SANDBOX EXAMPLE</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<WYSIWYGEditor />}
          name="editor_content"
          control={control}
        />

        <button type="submit" className="signup-button">
          Next
        </button>
      </form>
    </section>
  );
};
export default MainWysiwyg;