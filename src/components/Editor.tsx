import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Paper, Box } from '@mui/material';

interface EditorProps {
  content: string;
  onContentChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, onContentChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onContentChange(editor.getHTML());
    },
  });

  return (
    <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
      <Box sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '0.5rem' }}>
        <EditorContent editor={editor} />
      </Box>
    </Paper>
  );
};

export default Editor;
