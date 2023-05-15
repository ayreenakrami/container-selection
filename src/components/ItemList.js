import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = (props) => {
  const handleRemove = (index) => {
    const newItems = [...props.items];
    newItems.splice(index, 1);
    props.setItems(newItems);
  };

  return (
    <Box>
      {props.items.length > 0 && (
        <Box py={4} px={2}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#E5E7EB' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>Item no:</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Length (cm)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Width (cm)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Height (cm)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Weight (kg)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Volume (cbm)</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.items.map((item, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.width}</TableCell>
                    <TableCell>{item.height}</TableCell>
                    <TableCell>{item.weight}</TableCell>
                    <TableCell>{item.volume}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemove(index)} aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {props.items.length === 0 && (
        <Box py={0} px={2}>
          <Typography variant="body1">No items added yet.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ItemList;
