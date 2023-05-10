import React from "react";
import TopSection from "../components/main/TopSection";
import EventsLocation from "../components/main/EventsLocation";
import Organizers from "../components/main/Organizers";
import PriceSection from "../components/main/PriceSection";
import EventForm from "../components/main/EventForm";
import ContactUs from "../components/main/ContactUs";
import Influencer from "../components/main/influencer";
import { Element } from "react-scroll";
import Hamian from "../components/main/Hamian";

function Index() {
  return (
    <Element name="home">
      <TopSection />
      <EventsLocation />
      <Organizers />
      <Influencer />
      <PriceSection />
      <EventForm />
      <Hamian />
      <ContactUs />
    </Element>
  );
}

export default Index;
