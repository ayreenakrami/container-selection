import React, { useState } from "react";
import "./App.css";
import RecommendedContainer from "./components/RecommendedContainer";
import UserForm from "./components/Forms";
import ItemList from "./components/ItemList";
import ContainersList from "./components/ContainersList";
import Header from "./components/Header";
import Box from "@mui/material/Box";


const App = () => {
    const CONTAINERS = [
        {
            id: 1,
            containerType: "20 Standard",
            length: 589,
            width: 235,
            height: 239,
            maxPayloadWeight: 28200,
            maxPayloadVolume: 33.2,
        },
        {
            id: 2,
            containerType: "40 Standard",
            length: 1202,
            width: 235,
            height: 239,
            maxPayloadWeight: 28200,
            maxPayloadVolume: 67.7,
        },
        {
            id: 3,
            containerType: "20 High Cube",
            length: 598,
            width: 235,
            height: 269,
            maxPayloadWeight: 28200,
            maxPayloadVolume: 37.3,
        },
        {
            id: 4,
            containerType: "40 High Cube",
            length: 1202,
            width: 235,
            height: 269,
            maxPayloadWeight: 28200,
            maxPayloadVolume: 76.3,
        },
    ];
    const [items, setItems] = useState([]);

    let totalVolume = items.reduce((acc, curr) => {
        return acc + curr.volume;
    }, 0);

    let totalWeight = items.reduce((acc, curr) => {
        return acc + Number(curr.weight);
    }, 0);

    let bestContainer = CONTAINERS.filter(
        (container) =>
            totalWeight <= container.maxPayloadWeight &&
            totalVolume <= container.maxPayloadVolume
    );
    let matchingContainer = bestContainer.sort(
        (a, b) => a.maxPayloadVolume - b.maxPayloadVolume
    )[0];

    return (
        <Box sx={{ bgcolor: '#f9f9f9' }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 12">
                <Header />
            </Box>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6'> */}
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
                        matchingContainer={matchingContainer}
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
