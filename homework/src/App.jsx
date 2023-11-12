import React, {useState} from 'react';

import StudentList from './components/StudentList/StudentList';
import StudentForm from './components/StudentForm/StudentForm';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function App(props) {

  const [newStudentItem, setNewStudentItem] = useState({});

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <h1>Students</h1>
        <StudentList newStudentItem={newStudentItem} />
        <StudentForm liftingStudentItem={setNewStudentItem} />
      </Paper>
    </Container>
  );
}

export default App;