import React from "react";
import { services } from "../constants/services";
import ServiceCard from "../components/ServiceCard";

const Service = () => {
  return (
    <section
      className="section service px-[15px] "
      id="service"
      aria-labelledby="service-label"
    >
      <p className="section-subtitle container px-[10px] mb-[55px] " id="service-label">
        My Services
      </p>
      <ul className="service-list">
        {services.map((service, index) => (
            <ServiceCard key={`${index}_${service.title}`} service={service} />
        ))}
      </ul>
    </section>
  );
};

export default Service;
