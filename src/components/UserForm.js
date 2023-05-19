import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Button, Typography, TextField } from '@mui/material';

const UserForm = (props) => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Form validation using useEffect
    if (
      (length && length <= 0) ||
      (width && width <= 0) ||
      (height && height <= 0) ||
      (weight && weight <= 0)
    ) {
      setError('Please enter valid values for all fields.');
    } else {
      const maxAllowedLength = 1202;
      const maxAllowedWidth = 235;
      const maxAllowedHeight = 269;
      const maxAllowedWeight = 28200;

      if (
        length > maxAllowedLength ||
        width > maxAllowedWidth ||
        height > maxAllowedHeight ||
        weight > maxAllowedWeight
      ) {
        setError("The entered dimensions exceed the maximum allowable value.");
      } else {
        setError(""); 
      }
    }
  }, [length, width, height, weight]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (error) return;

    if (error || !length || !width || !height || !weight) {
      setError('Please enter values for all fields.'); 
      return;
    }

    const newItem = {
      id: Date.now(),
      length,
      width,
      height,
      weight,
      volume: Number((length * width * height) / 1000000),
    };

    props.setItems([...props.items, newItem]);
    setError("");
    setLength("");
    setWidth("");
    setHeight("");
    setWeight("");
  };


  return (
    <Card variant="outlined" sx={{ p: 2 }}>
      <CardContent>
        {error && (
          <Typography variant="body1" color="error" sx={{ marginBottom: 2 }}>
            {error}
          </Typography>
        )}
        <Typography variant="h6" gutterBottom>
          Add Item Details
        </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <TextField
                label="Length in cm"
                variant="outlined"
                type="number"
                fullWidth
                value={length}
                onChange={(e) => setLength(e.target.value)}
                inputProps={{ min: 1, max: 1202 }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Width in cm"
                variant="outlined"
                type="number"
                fullWidth
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                inputProps={{ min: 1, max: 235 }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Height in cm"
                variant="outlined"
                type="number"
                fullWidth
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                inputProps={{ min: 1, max: 269 }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Weight in KG"
                variant="outlined"
                type="number"
                fullWidth
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                inputProps={{ min: 1, max: 28200 }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                sx={{ height: '100%' }}
              >
                Add New Item
              </Button>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
};

export default UserForm;