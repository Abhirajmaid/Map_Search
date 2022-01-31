import React, { useState, useEffect } from "react";
import "./App.css";
import { getPalceData } from "./api/index";
import { CssBaseline, Grid } from "@material-ui/core";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Map } from "./components/Map/Map";

export const App = () => {
  useEffect();

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          {/* style={{ paddingLeft: "0" }} */}
          <Map />
        </Grid>
      </Grid>
    </>
  );
};
