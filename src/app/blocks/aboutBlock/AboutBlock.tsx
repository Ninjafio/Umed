"use client";

import React from "react";
import {
  WorkflowsImg,
  fifthAboutImg,
  firstAboutImg,
  fourthAboutImg,
  secondAboutImg,
  sixthAboutImg,
  thirdAboutImg,
} from "../../Imgs/ImgsIndex";

import { AboutCard } from "@/app/components/aboutCard/AboutCard";
import Image from "next/image";
import "./AboutBlock.scss";

const AboutBlock = () => {
  return (
    <>
      <div className="ProgressiveBlock">
        <div className="ProgressiveBlock_header">
          <div className="ProgressiveBlock_Title">
            <h2>Информация о компании</h2>
          </div>
        </div>
        <div className="ProgressiveBlock_bottom">
          <div className="ProgressiveBlock_bottomLeft">
            <p className="storyTxt">
              Уральский медицинский колледж начал работу в 2018 году, а в 2023
              открылся Уральский медицинский институт. Сегодня колледж
              и институт располагаются в трех корпусах и обучают более
              4000 студентов. Современные форматы преподавания позволяют нам
              обучать студентов со всей страны.
            </p>
            <p className="targetTxt__first">
              <span>
                ОСНОВНАЯ ЦЕЛЬ <br />
              </span>
              Повышение качества и продолжительности жизни людей
            </p>
            <p className="targetTxt">
              <span>
                ЗАМЫСЕЛ <br />
              </span>
              Проведение обучения по программам среднего профессионального и
              высшего образования по специальности группы Здравоохранение.
            </p>
          </div>
          <div className="ProgressiveBlock_bottomRight_img">
            <Image src={WorkflowsImg} alt="Huh"></Image>
          </div>
        </div>
      </div>

      <div className="aboutBlock">
        <div className="about-text-wrapper">
          <h1 className="about-title">
            ИЩЕМ ПЕРВОКЛАССНЫХ <br /> СОТРУДНИКОВ В СВОИХ СФЕРАХ
          </h1>
          <div className="about-card-container">
            <ul className="about-card-wrapper">
              <AboutCard imgChild={firstAboutImg}>
                Держим высокие темпы развития
              </AboutCard>
              <AboutCard imgChild={secondAboutImg}>
                Решаем интересные задачи
              </AboutCard>
              <AboutCard imgChild={thirdAboutImg}>
                Расширяем учебные площади
              </AboutCard>
              <AboutCard imgChild={fourthAboutImg}>
                Совершенствуем образовательные программы
              </AboutCard>
              <AboutCard imgChild={fifthAboutImg}>
                Применяем современные технологии в образовании
              </AboutCard>
              <AboutCard imgChild={sixthAboutImg}>
                Проводим незабываемые события для сотрудников
              </AboutCard>
            </ul>
          </div>
        </div>
      </div>

      <div className="AboutBlock__video-wrapper">
        <div className="AboutBlock__video-txt-wrapper">
          <h2 className="AboutBlock__video-title">Видеоэксурсия</h2>
          <p className="AboutBlock__video-txt">
          Мы предлагаем вам виртуальный тур по ЮМЕД!<br/> Он поможет лучше понять инфраструктуру и возможности Уральского медицинского колледжа.<br/> Мы стараемся создавать все условия для комфортной и продуктивной работы.<br/> Особое внимание уделяем постоянному обновлению оборудования, чтобы вы всегда имели доступ к современным технологиям, которые делают рабочие процессы интересными и позволяют добиваться высоких результатов.
          </p>
        </div>
        <div className="AboutBlock__video-wrapper_iframes">
          <iframe
            src="https://vk.com/video_ext.php?oid=-130300428&id=456240711&hd=2&autoplay=1"
            width="325"
            height="646"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock; muted;"
            allowFullScreen={true}
            className="vk_video"
          ></iframe>
          <iframe
            src="https://vk.com/video_ext.php?oid=-130300428&id=456240280&hd=2&autoplay=1"
            width="325"
            height="646"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock; muted;"
            allowFullScreen={true}
            className="vk_video"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;

