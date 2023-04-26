import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box, Button, TextField, Typography } from "@mui/material";
const Blogs = () => {
  return (
    <Box p={3} width="100%">
      <Typography pb={2} variant="h4">
        Add New Post
      </Typography>
      <TextField label="Title" fullWidth />
      <Box my={1}>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from HenryAllen!</p>"
          onReady={(editor) => {
            editor.editing.view.change((writer) => {
              writer.setStyle(
                "height",
                "300px",
                editor.editing.view.document.getRoot()
              );
              editor.editing.view.change((writer) => {
                writer.setStyle(
                  "background-color",
                  "transparent",
                  editor.editing.view.document.getRoot()
                );
              });
            });
          }}
          config={{ toolbar: { shouldNotGroupWhenFull: true } }}
        />
        <Button variant="contained" fullWidth onSubmit={() => {}}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Blogs;
