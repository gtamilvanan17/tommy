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
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Kube Score",
      image:
        "user-images.githubusercontent.com/47952/56085330-6c0a2480-5e41-11e9-89ba-0cfddd7714a8.png",
      description: "Kubernetes object analysis for improved reliability and security.",
      level: "DevOps",
      link: "https://kube-score.com/",
    },
    {
      name: "K8s Image Swapper",
      image: "miro.medium.com/v2/resize:fit:1400/1*wOMtZQ4cb_gxIZ1HkiKOfw.jpeg",
      description: "Mirror images into your own registry and swap image references automatically.",
      level: "DevOps",
      link: "https://estahn.github.io/k8s-image-swapper/v1.5/index.html",
    },
    {
      name: "Kube Box",
      image: "astefanutti.github.io/kubebox/kubebox.png",
      description: "Terminal and Web console for Kubernetes.",
      level: "DevOps",
      link: "https://github.com/astefanutti/kubebox",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Grafana Shields IO",
      image:
        "grafana.com/media/blog/Golden-Grot-Award-Winners-2023/screenshot-Golden-Grot-winners-professional-dashboard.png",
      description: "Monitoring dashboard.",
      level: "DevOps",
      link: "https://metrics.shields.io/dashboards",
    },
    {
      name: "Try Hack Me",
      image: "tramcrazy.com/static/img/THMlogo.png",
      description: "Hands-on cyber security practice through real-world scenarios",
      level: "CTF",
      link: "https://tryhackme.com/login",
    },
    {
      name: "Hack The Box",
      image: "images.credly.com/images/3dcd637f-f94a-4405-9448-0409361214da/blob.png",
      description: "Hands-on cyber security practice through real-world scenarios.",
      level: "CTF",
      link: "https://account.hackthebox.com/login",
    },
    {
      name: "Pwned Labs",
      image: "jussimetso.com/wp-content/uploads/2024/09/pwnedlabs-logopng.png",
      description: "Hands-on cyber security practice through real-world scenarios.",
      level: "CTF",
      link: "https://pwnedlabs.io/login",
    },
    {
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "General",
      link: "https://example.com/",
    },
    {
      name: "Your name",
      image:
        "occ-0-116-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABToxGnHApQSxpAfcLfT4bl1JJSc1PNxwsdFv3e6r3ioqXmJe7-4gHW1INKPByMx1Gb0sOazAl1XiGw7zjqHz4M7IrI-xpIHrVR4.jpg?r=f6b",
      description: "A Japanese anime drama movie.",
      level: "Entertainments",
      link: "https://www.youtube.com/watch?v=xU47nhruN-Q",
    },
    {
      name: "Life in a Year",
      image:
        "occ-0-114-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcv_cUamo2KmG3kjQ32JemY0_IkD3Gjm408ClQJmYRpx9m5DgMThuV175lVjf3Pphx01lQLMVFUdhbK9C4GGJSW7M8iIA70Wq-ia.jpg?r=125",
      description: "A 17-year-old Daryn who finds out that his girlfriend is dying.",
      level: "Entertainments",
      link: "https://www.primevideo.com/detail/Life-in-a-Year/0FJYMCTYEQOI3V3RKVKTLWFDW6#:~:text=Prime%20Video%3A%20Life%20in%20a%20Year",
    },
    {
      name: "All the bright places",
      image: "variety.com/wp-content/uploads/2020/02/all-the-bright-places.jpg",
      description: "Two teens facing personal struggles form a powerful bond.",
      level: "Entertainments",
      link: "https://www.netflix.com/in/title/80208802",
    },
    {
      name: "Queen of Tears",
      image:
        "media.assettype.com/freepressjournal/2024-04/18d99c91-d9da-41c3-a232-87cf44230975/WhatsApp_Image_2024_04_19_at_14_48_15.jpeg",
      description: "The story of a married couple in a crisis.",
      level: "Entertainments",
      link: "https://www.netflix.com/in/title/81707950",
    },
    {
      name: "Put Your Head on My Shoulder",
      image:
        "occ-0-116-114.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUozDRXHk_H3Ez8yiP31YH_QdodNStMvE5PqoP1XYFpjIuUhqaKw6XZsLcApDwccKyP7AFIQQ__FF9j1-ThspAz_-YjJuuFFncTT.jpg?r=9a3",
      description:
        "An accounting major searching for her career winds up living with a genius physics student who shakes up her daily routine.",
      level: "Entertainments",
      link: "https://www.netflix.com/in/title/81200229",
    },
    {
      name: "Non Sense (Malayalam)",
      image: "kerala9.com/movie_still/nonsense/nonsense-malayalam-movie-stills-424.jpg",
      description:
        "The life of a bright school student, who is often misunderstood because of his search for humanity, changes when something unexpected happens.",
      level: "Entertainments",
      link: "https://www.netflix.com/in/title/81200229",
    },
    {
      name: "Aanandam",
      image:
        "img.onmanorama.com/content/dam/mm/en/entertainment/images/2016/Oct/23/aanandam-poster.jpg",
      description: "Seven friends visit Goa and Hampi while on their college trip.",
      level: "Entertainments",
      link: "https://www.primevideo.com/detail/Aanandam/0R5O77T5MO1YKA7I3BZHSSZIGT",
    },
    {
      name: "Prithvi (Kannada)",
      image:
        "images.filmibeat.com/img/popcorn/fan_images/524_20100222_97376900_prithvi200210_7.jpg",
      description:
        "An IAS officer, defends a village against various criminals who are contaminating the village's water supply due to their illegal activities.",
      level: "Entertainments",
      link: "https://youtu.be/W5ucY1jJA8g",
    },
    {
      name: "Hondisi Bareyiri (Kannada)",
      image:
        "img.onmanorama.com/content/dam/mm/en/entertainment/images/2016/Oct/23/aanandam-poster.jpg",
      description:
        "It focuses on their college life, leading to the responsibilities of adulthood and their struggle to find solace amidst their complex relationships.",
      level: "Entertainments",
      link: "https://www.primevideo.com/dp/amzn1.dv.gti.239e246b-bd74-4d8d-9162-5ce1089209ea?autoplay=0&ref_=atv_cf_strg_wb",
    },
    {
      name: "Thanneer Mathan Dinangal",
      image: "v3img.voot.com/v3Storage/assets/thanneer-mathan-dinangal-16x9-1710158172712.jpg",
      description:
        "Jaison, a teenager, has a crush on Keerthy, but she does not reciprocate his feelings. To make things worse, he gets in trouble with Ravi, the new teacher who is liked by everyone, especially Keerthy.",
      level: "Entertainments",
      link: "https://www.primevideo.com/detail/0H3DITHPVC7FXG7TKNAT2D4N3H/ref=atv_dp_share_cu_r",
    },
    {
      name: "Dramakey",
      image: "pic6.iqiyipic.com/image/20240702/66/d9/a_100544000_m_601_en_720_405.jpg",
      description: "Contains a collective contents of chinese dramas",
      level: "Entertainments",
      link: "https://dramakey.com/",
    },
    {
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "GitHub",
      link: "https://example.com/",
    },
    {
      name: "Advanced HIIT Program",
      image:
        "images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "High-intensity interval training program for maximum calorie burn and endurance building.",
      level: "AItools",
      link: "https://example.com/",
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
