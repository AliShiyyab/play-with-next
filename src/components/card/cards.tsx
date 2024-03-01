import React from 'react';
import CardDetails from "@/components/card/card";
import {Grid} from "@mui/material";

const Cards = () => {

    const listOfCards = () => {
        let list = [];
        for (let i = 0; i < 12; i++) {
            list.push(<CardDetails key={i}/>)
        }
        return list;
    }

    return (
        <div className={'w-full px-4'}>
            <Grid container spacing={2}>
                {listOfCards().length > 0 ? listOfCards().map((val, index) => (
                    <Grid flex={"2"}  item xs={12} sm={6} md={4} lg={4} key={index}>
                            {val}
                    </Grid>)
                ) : null}
            </Grid>
        </div>
    );
}
export default Cards;