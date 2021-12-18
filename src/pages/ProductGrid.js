import {
  AppBar,
  CardContent,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";

const ProductGrid = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const info = await fetch("https://fakestoreapi.com/products");
      const response = await info.json();
      setData(response);
      console.log(response);
    }
    getData();
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar gutterBottom position="static" color="secondary">
        <Toolbar>
          <Typography
            sx={{ p: 1, marginLeft: "auto", marginRight: "auto" }}
            variant="h6"
          >
            Products
          </Typography>
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {data.map((item) => (
              <Grid item key={item.id} md={4}>
                <Card
                  sx={{
                    height: "45vw",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "80%",
                      paddingTop: "150px",
                      borderRadius: "10px",
                      margin: "auto",
                    }}
                    image={item.image}
                    title={item.title}
                  />
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">
                          price : {item.price}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default ProductGrid;
