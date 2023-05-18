import React, { useState } from "react";
import "./App.css";
import RecommendedContainer from "./components/RecommendedContainer";
import UserForm from "./components/UserForm";
import ItemList from "./components/ItemList";
import ContainersList from "./components/ContainersList";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import { CONTAINERS } from './constants/contants';

const App = () => {

  const [items, setItems] = useState([]);

  // Removed "return" as it's a single statement.
  let totalVolume = items.reduce((acc, curr) => acc + curr.volume, 0);
  // Removed "return" as it's a single statement.
  let totalWeight = items.reduce((acc, curr) => acc + Number(curr.weight), 0);

  // Previously we were iterating through the items individually for finding the maximum for height, length and width.
  // Improved this by adding Array.reduce to perform this in a single iteration of the items array.
  const { maxItemHeight, maxItemLength, maxItemWidth } = items.reduce(
    (acc, item) => ({
      maxItemHeight: Math.max(acc.maxItemHeight, item.height),
      maxItemLength: Math.max(acc.maxItemLength, item.length),
      maxItemWidth: Math.max(acc.maxItemWidth, item.width),
    }),
    { maxItemHeight: 0, maxItemLength: 0, maxItemWidth: 0 }
  );

  //Implemented the Array.find function for improving the efficiency of the code to avoid iterating through the complete CONTAINERS Array.
  const bestContainer = CONTAINERS.find(
    ({ maxPayloadWeight, maxPayloadVolume, height, length, width }) =>
      totalWeight <= maxPayloadWeight &&
      totalVolume <= maxPayloadVolume &&
      maxItemHeight <= height &&
      maxItemLength <= length &&
      maxItemWidth <= width
  );

  return (
    <Box sx={{ bgcolor: "#f9f9f9" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      <Box gridColumn="span 12">
        <Header />
      </Box>
      <Box gridColumn="span 12">
        <UserForm items={items} setItems={setItems} />
      </Box>
      <Box gridColumn="span 8">
        <ItemList items={items} setItems={setItems} />
      </Box>
      <Box gridColumn="span 4">
        {items.length > 0 && (
          <RecommendedContainer
            totalVolume={totalVolume}
            totalWeight={totalWeight}
            matchingContainer={bestContainer}
          />
        )}
      </Box>
      <Box gridColumn="span 12">
        <ContainersList CONTAINERS={CONTAINERS} />
      </Box>
    </Box>
  );
};
export default App;
