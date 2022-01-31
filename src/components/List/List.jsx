import React, { useState } from "react";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import "./style.css";
import {
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

export const List = () => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  const places = [
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
    { name: "coool" },
  ];

  return (
    <div className="container">
      <h2>Reastarunt, Hotels and Atraction around you</h2>
      <>
        <FormControl className="formControl">
          <InputLabel id="type">Type</InputLabel>
          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="formControl">
          <InputLabel id="rating">Rating</InputLabel>
          <Select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid
          container
          spacing={3}
          className="list"
          style={{ marginTop: "20px" }}
        >
          {places?.map((place, i) => (
            // ref={elRefs[i]}
            <Grid key={i} item xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </>
    </div>
  );
};
