import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
                    title="Online Experiences"
                    description="Unique activities to do from home, including experiences with Broadway casts and crews."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
                    title="Unique stays"
                    description="Boats, treehouses, and more—these spaces are more than just a place to sleep."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
                    title="Entire homes"
                    description="Comfortable private places, with rooms for friends or family."
                />
            </div>

            <div className="home__section">
            <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
                    title="Online Experiences"
                    description="Unique activities to do from home, including experiences with Broadway casts and crews."
                    price="$130/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
                    title="Unique stays"
                    description="Boats, treehouses, and more—these spaces are more than just a place to sleep."
                    price="$250/night"
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
                    title="Entire homes"
                    description="Comfortable private places, with rooms for friends or family."
                    price="$380/night"
                />
            </div>
        </div>
    )
}

export default Home
