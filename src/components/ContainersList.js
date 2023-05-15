import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ContainersList = (props) => {
  return (
    <Box py={5} px={2}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#E5E7EB' }}>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Container Type</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Length (cm)</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Width (cm)</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Height (cm)</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Max Payload Weight (kg)</TableCell>
              <TableCell align='center' sx={{ fontWeight: 'bold' }}>Max Payload Volume (cbm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.CONTAINERS.map((item) => (
              <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='center' component='th' scope='row'>
                  {item.containerType}
                </TableCell>
                <TableCell align='center'>{item.length}</TableCell>
                <TableCell align='center'>{item.width}</TableCell>
                <TableCell align='center'>{item.height}</TableCell>
                <TableCell align='center'>{item.maxPayloadWeight}</TableCell>
                <TableCell align='center'>{item.maxPayloadVolume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ContainersList;
