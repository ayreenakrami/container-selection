import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const RecommendedContainer = (props) => {
  const container = props.matchingContainer?.containerType || 'No Container found';

  return (
    <Box sx={{ mt: 4, p: 3, border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center" marginBottom={1}>
            <Typography variant="subtitle1">Total Volume:</Typography>
            <Typography variant="h6">{props.totalVolume} cm³</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center" marginBottom={1}>
            <Typography variant="subtitle1">Total Weight:</Typography>
            <Typography variant="h6">{props.totalWeight} kg</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle1">Recommended Container:</Typography>
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>{container}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="subtitle2" sx={{ color: 'gray' }}>Note: This is just a recommendation based on the given inputs. Actual container size may vary depending on other factors.</Typography>
    </Box>
  );
};

export default RecommendedContainer;