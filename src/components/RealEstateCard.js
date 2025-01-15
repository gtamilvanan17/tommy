// src/components/RealEstateCard.js
import React from 'react';
import { Card, CardMedia, Box, Typography, Chip } from '@mui/material';
import { InfoRounded } from '@mui/icons-material';

const RealEstateCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: 1,
      }}
    >
      <CardMedia
        component="img"
        width="100"
        height="100"
        alt="123 Main St, Phoenix, AZ cover"
        src="src/assets/images/bg-profile.jpeg" // Ensure this path is correct or change it to a valid image path
        sx={{
          borderRadius: '6px',
          width: { xs: '100%', sm: 100 },
        }}
      />
      
      <Box sx={{ alignSelf: 'center', ml: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight="regular">
          123 Main St, Phoenix, AZ, USA
        </Typography>
        <Typography fontWeight="bold" noWrap gutterBottom>
          $280k - $310k
        </Typography>
        <Chip
          size="small"
          variant="outlined"
          icon={<InfoRounded />}
          label="Confidence score: 85%"
          sx={(theme) => ({
            '.MuiChip-icon': { fontSize: 16, ml: '4px', color: 'success.500' },
            bgcolor: 'success.50',
            borderColor: 'success.100',
            color: 'success.900',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.700',
              color: 'success.200',
              borderColor: 'success.900',
            }),
          })}
        />
      </Box>
    </Card>
  );
};

export default RealEstateCard;