import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
  Chip,
  styled,
} from "@mui/material";

// Material Dashboard 2 React components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
}));

const StyledButton = styled(Button)({
  borderRadius: "15px",
  textTransform: "none",
  padding: "6px 16px", // Reduced left and right padding
});

const StyledChip = styled(Chip)({
  borderRadius: "16px",
  fontWeight: "bold",
  margin: "4px",
});

function Devops() {
  const [programs] = useState([
    {
      id: 1,
      name: "Transformation",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A comprehensive workout program designed to transform your body and improve overall fitness.",
      level: "Intermediate",
      pdf: "docs/sample.pdf",
    },
    {
      id: 2,
      name: "Core Strength",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Focus on building core strength and improving overall conditioning through targeted exercises.",
      level: "Beginner",
      pdf: "docs/sample.pdf",
    },
    {
      id: 3,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "Advanced",
      pdf: "sample.pdf",
    },
    {
      id: 1,
      name: "Transformation",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A comprehensive workout program designed to transform your body and improve overall fitness.",
      level: "Intermediate",
      pdf: "docs/sample.pdf",
    },
    {
      id: 2,
      name: "Core Strength",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Focus on building core strength and improving overall conditioning through targeted exercises.",
      level: "Beginner",
      pdf: "docs/sample.pdf",
    },
    {
      id: 3,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "Advanced",
      pdf: "sample.pdf",
    },
  ]);

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "success";
      case "intermediate":
        return "warning";
      case "advanced":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {programs.map((program) => (
            <Grid item xs={12} sm={6} md={4} key={program.id}>
              <StyledCard>
                {/* Program Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={`https://${program.image}`}
                  alt={program.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Program Details */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6" component="h2" gutterBottom>
                      {program.name}
                    </Typography>
                    <StyledChip
                      label={program.level}
                      color={getLevelColor(program.level)}
                      size="small"
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {program.description}
                  </Typography>
                  {/* Button to Open PDF */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <StyledButton
                      variant="contained"
                      color="primary"
                      fullWidth
                      href={program.pdf}
                      target="_blank"
                      aria-label={`Open ${program.name} PDF`}
                      sx={{ color: "white" }}
                    >
                      Open PDF
                    </StyledButton>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default Devops;
