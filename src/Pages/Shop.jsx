import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/popular/Popular";
import Offer from "../Components/offers/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLatter from "../Components/NewsLatter/NewsLatter";

const Shop = () =>{
    return (
        <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        <NewsLatter/>
        </div>
    );
};

export default Shop ;