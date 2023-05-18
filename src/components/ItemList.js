import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = (props) => {
  //  Used the filter method to remove an item from the list based on its unique identifier (id),  
  // whereas previously it was using splice with the item's index.
  const handleRemove = (id) => {
    const newItems = props.items.filter((item) => item.id !== id);
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
                  <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {/* The key attribute in the TableRow component is now set to item.id instead of the index.  */}
                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                    <TableCell>{item.length}</TableCell>
                    <TableCell>{item.width}</TableCell>
                    <TableCell>{item.height}</TableCell>
                    <TableCell>{item.weight}</TableCell>
                    <TableCell>{item.volume}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleRemove(item.id)} aria-label="delete">
                        {/* Using item.id instead of the index to identify the item being removed.  */}
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
