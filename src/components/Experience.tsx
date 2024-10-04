"use client";
import React from "react";
import Headings from "./Headings";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSection";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);

  return (
    <section
      className="max-w-[40rem] scroll-mt-28 space-y-20 mb-[8rem]"
      id="experience"
      ref={ref}
    >
      <Headings>Experience</Headings>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              icon={item.icon}
              iconStyle={{ background: "white", color: "black", fontSize: "1.5rem" }}
              contentStyle={{
                boxShadow: "none",
                textAlign: "left",
                padding: "1.5rem 1.2rem",
                background: "#f4f3f6",
                marginInline: "-2rem",
              }}
              contentArrowStyle={{ borderRight: "0.5rem solid #9ca3af" }}
            >
              <h3 className="capitalize !font-medium tracking-wide dark:text-black/80">
                {item.title}
              </h3>
              <p className="!font-normal !mt-0 dark:text-black/60">{item.company}</p>
              <p className="!font-normal text-gray-500 tracking-normal dark:text-black/90">
                {item.description}
              </p>
              <p className="!font-light text-gray-500 dark:text-gray-700">{item.date}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
