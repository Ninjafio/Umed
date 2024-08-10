"use client";

import React from "react";
import { 
  AboutBlock,
  Corporate_culture,
  IntroBlock,
  VkUmed,
  WorkBlock,
  Vacancies,
  Prisoedin, } from "../blocks/Index"
import "../blocks/navigationBlock/NavigationBlock.scss";

import { NavCard } from "../components/Index";

import { Link, Element } from "react-scroll";

const HomePage = () => {
  return (
    <>
      <IntroBlock />

      <div className="navBlock">
        <div className="navCards__wrapper">
          <Link to="AboutBlock" smooth={true} duration={500}>
            <NavCard titleChild="Информация о компании" />
          </Link>
          <Link to="WorkBlock" smooth={true} duration={700}>
            <NavCard titleChild="Работа в ЮМЕД" />
          </Link>
          <Link to="CorporateCulture" smooth={true} duration={1200}>
            <NavCard titleChild="Корпоративная культура" />
          </Link>
          <Link to="Vacancies" smooth={true} duration={1200}>
            <NavCard titleChild="Открытые вакансии" />
          </Link>
        </div>
      </div>
      <Element name="AboutBlock">
        <AboutBlock />
      </Element>
      <Element name="WorkBlock">
        <WorkBlock />
      </Element>
      <Element name="CorporateCulture">
        <Corporate_culture />
      </Element>
      <Element name="Vacancies">
        <Vacancies />
      </Element>
      <VkUmed />
      <Prisoedin />
    </>
  );
};

export default HomePage;
