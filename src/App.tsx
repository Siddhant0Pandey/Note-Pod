import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./Components/NewNote";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};
export type Tag = {
  id: string;
  label: string;
};

function App() {
  return (
    <>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<h1>Hello</h1>}></Route>
          <Route path="new" element={<NewNote />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/:id">
            <Route index element={<h1>This is show</h1>} />
            <Route path="edit" element={<h1>This is edit</h1>} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
