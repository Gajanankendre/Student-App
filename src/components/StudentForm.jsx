import React, { useEffect, useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, Box, FormLabel, FormControl, Checkbox, FormGroup } from '@mui/material';

const StudentForm = ({ addStudent, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    courses: [],
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        age: '',
        gender: '',
        courses: [],
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCoursesChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      courses: checked
        ? [...prev.courses, name]
        : prev.courses.filter(course => course !== name)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        required
      />
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          row
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      
      <FormControl sx={{ mt: 2 }}>
        <FormLabel>Courses</FormLabel>
        <FormGroup row sx={{ mt: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="Math"
                checked={formData.courses.includes('Math')}
                onChange={handleCoursesChange}
              />
            }
            label="Math"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Science"
                checked={formData.courses.includes('Science')}
                onChange={handleCoursesChange}
              />
            }
            label="Science"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="English"
                checked={formData.courses.includes('English')}
                onChange={handleCoursesChange}
              />
            }
            label="English"
          />
        </FormGroup>
      </FormControl>

      <Button variant="contained" type="submit">
        {initialData ? 'Update' : 'Submit'}
      </Button>
    </Box>
  );
};

export default StudentForm;
