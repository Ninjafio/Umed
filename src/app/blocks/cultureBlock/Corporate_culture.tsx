"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./Corporate_culture.scss";
import "swiper/scss";


const Corporate_culture = () => {
  return (
    <>
      <main className="main_corporate_culture">
        <h1>Корпоративная культура </h1>
        <div className="wrap_wrap">
          <div className="rabota">
            <div>
              <h2>МЫ ШИРЕ СМОТРИМ </h2>
              <h2>НА СВОЕ РАБОЧЕЕ МЕСТО</h2>
            </div>
            <p>
              ЮМЕД создает благоприятную атмосферу для работы и общения,
              поддерживает инициативы сотрудников и развивает корпоративные
              мероприятия. Ходим в театр, сауну, бассейн, играем вместе в
              спортивные игры, занимаемся самопознанием, проводим мозговой штурм
              в игровой форме.
            </p>
          </div>
          <div className="swiper_corporate_culture">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              rewind={true}
              onBeforeInit={(swiper: any) => {}}
              allowTouchMove={true}
              allowSlideNext={true}
              allowSlidePrev={true}
              loop={true}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="Cultyra1"></SwiperSlide>
              <SwiperSlide className="Cultyra2"></SwiperSlide>
              <SwiperSlide className="Cultyra3"></SwiperSlide>
              <SwiperSlide className="Cultyra4"></SwiperSlide>
              <SwiperSlide className="Cultyra5"></SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper_corporate_culture2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              rewind={true}
              onBeforeInit={(swiper: any) => {}}
              allowTouchMove={true}
              allowSlideNext={true}
              allowSlidePrev={true}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              className="swip2"
            >
              <SwiperSlide className="Cultyra2_1"></SwiperSlide>
              <SwiperSlide className="Cultyra2_2"></SwiperSlide>
              <SwiperSlide className="Cultyra2_3"></SwiperSlide>
              <SwiperSlide className="Cultyra2_4"></SwiperSlide>
              <SwiperSlide className="Cultyra2_5"></SwiperSlide>
              <SwiperSlide className="Cultyra2_6"></SwiperSlide>
              <SwiperSlide className="Cultyra2_7"></SwiperSlide>
              <SwiperSlide className="Cultyra2_8"></SwiperSlide>
              <SwiperSlide className="Cultyra2_9"></SwiperSlide>
            </Swiper>
          </div>
          <div className="rabota2">
            <div>
              <h2>ДАРИМ КОРПОРАТИВНЫЕ ПОДАРКИ</h2>
              <p>Мы высоко ценим наших сотрудников и стремимся сделать их день рождения особенным и запоминающимся. В честь этого события дарим специальный сертификат, который можно обменять на корпоративные подарки по выбору, а также можно выбрать подарок через чат-бот в нашем корпоративном магазине.
</p>
            </div>
          </div>
        </div>
      </main>

      <div className="directorCard">
        <div>
          <p>Наша компания ориентирована на развитие и инновации. Мы всегда рады приветствовать новые таланты. Уверены, что успех зависит от людей, поэтому стремимся создавать условия для их профессионального и личностного развития. 
В компании вы сможете участвовать в проектах, вносить свои идеи и развивать собственные инициативы!
Присоединяйтесь к нам, давайте вместе создавать будущее.
</p>
          <i>Олег Николаевич Крылов, директор</i>
        </div>
      </div>
    </>
  );
};

export default Corporate_culture;
