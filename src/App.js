import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import { Container, Typography } from '@mui/material';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    if (editingStudent) {
      // Update existing student
      setStudents((prev) =>
        prev.map((s) => (s.id === editingStudent.id ? { ...student, id: editingStudent.id } : s))
      );
    } else {
      // Add new student
      setStudents((prev) => [...prev, { ...student, id: Date.now() }]);
    }
    // Reset editing state after submission
    setEditingStudent(null);
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" textAlign="center" mt={2}>
        Student Management
      </Typography>
      <StudentForm addStudent={addStudent} initialData={editingStudent} />
      <StudentTable
        students={students}
        editStudent={editStudent}
        deleteStudent={deleteStudent}
      />
    </Container>
  );
}

export default App;
