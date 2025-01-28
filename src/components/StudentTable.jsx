import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Box, Typography } from '@mui/material';

const StudentTable = ({ students, editStudent, deleteStudent }) => {
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2" color="text.primary" sx={{ pl: 1 }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'name', 
      headerName: 'Name', 
      width: 150,
      renderCell: (params) => (
        <Typography variant="body2" color="text.primary" sx={{ pl: 1 }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'age', 
      headerName: 'Age', 
      width: 100,
      renderCell: (params) => (
        <Typography variant="body2" color="text.primary" sx={{ pl: 1 }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'gender', 
      headerName: 'Gender', 
      width: 100,
      renderCell: (params) => (
        <Typography variant="body2" color="text.primary" sx={{ pl: 1 }}>
          {params.value}
        </Typography>
      )
    },
    { 
      field: 'courses', 
      headerName: 'Courses', 
      width: 200,
      renderCell: (params) => (
        <Typography variant="body2" color="text.primary" sx={{ pl: 1 }}>
          {params.row.courses?.join(', ')}
        </Typography>
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => editStudent(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => deleteStudent(params.row.id)}
            sx={{ ml: 1 }}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', mt: 2 }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sx={{
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
            padding: '0 !important'
          }
        }}
      />
    </Box>
  );
};

export default StudentTable;
