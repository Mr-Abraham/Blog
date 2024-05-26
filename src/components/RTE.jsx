import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, defaultvalue = "", label }) {
  return <div>{label && <label htmlFor="">{label}</label>}</div>;

  <Controller
    name={name || "content"}
    control={control}
    render={({ field: { onchange } }) => (
      <Editor
        initialValue:defaultvalue
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime help media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={onchange}
      />
    )}
  />;
}

export default RTE;
