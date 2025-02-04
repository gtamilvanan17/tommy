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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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

function MyWebsites() {
  const [programs] = useState([
    {
      id: 1,
      name: "Transformation",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A comprehensive workout program designed to transform your body and improve overall fitness.",
      level: "DevOps",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    {
      id: 2,
      name: "Core Strength",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Focus on building core strength and improving overall conditioning through targeted exercises.",
      level: "CTF",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    {
      id: 3,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "General",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    {
      id: 4,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "Entertainments",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    {
      id: 5,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "GitHub",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    {
      id: 6,
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "AItools",
      link: "https://example.com/", // Replace with the actual Google Drive file ID
    },
    // Add more programs if necessary...
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "devops":
        return "primary";
      case "ctf":
        return "success";
      case "general":
        return "info";
      case "entertainments":
        return "warning";
      case "github":
        return "secondary";
      case "aitools":
        return "error";
      default:
        return "default";
    }
  };

  // Filter the programs based on selected category (level)
  const filteredPrograms = selectedCategory
    ? programs.filter((program) => program.level.toLowerCase() === selectedCategory.toLowerCase())
    : programs;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Category Filter Dropdown */}
        <Box sx={{ mb: 3, width: "200px" }}>
          <FormControl fullWidth sx={{ height: 56 }}>
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={selectedCategory}
              label="Category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{
                height: "70%", // Makes sure the Select component inherits the height
                fontSize: "20px", // Adjust the font size as needed
                fontWeight: 500,
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="devops">DevOps</MenuItem>
              <MenuItem value="ctf">CTF Labs</MenuItem>
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="entertainments">Entertainments</MenuItem>
              <MenuItem value="github">Github</MenuItem>
              <MenuItem value="aitools">AI Tools</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={4}>
          {filteredPrograms.map((program) => (
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
                      href={`${program.link}`} // Modify this line with the correct file ID
                      target="_blank"
                      sx={{
                        color: "#fff",
                      }}
                    >
                      CLICK ME
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

export default MyWebsites;
