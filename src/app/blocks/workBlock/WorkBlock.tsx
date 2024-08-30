"use client";
import { useRef } from "react";

import {
  AreTheyTwinsHuh,
  CardBlockImgSert,
  CardsBlockImgLD,
  nextBtnImg,
  prevBtnImg,
} from "../../Imgs/ImgsIndex";

import { ImgCard, TxtCard, WorkBlockCard } from "../../components/Index";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

import Image from "next/image";
import "./WorkBlock.scss";

const WorkBlock = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className="WorkBlock">
        <h2 className="WorkBlock__Title">Мы гарантируем</h2>
        <p className="WorkBlock__Txt">Нам важно, чтобы каждый сотрудник ощущал уверенность в своем будущем. Мы заботимся о здоровье и безопасности нашего персонала, а новых сотрудников не только знакомим с командой, но и помогаем им адаптироваться в рабочей среде.</p>
        <div className="WorkBlockCard__wrapper">
          <WorkBlockCard titleChild={"белая \nзарплата"}>
            и социальные гарантии для всех сотрудников
          </WorkBlockCard>
          <WorkBlockCard titleChild={"бесплатная \nмедкомиссия"}>
            для каждого нового сотрудника
          </WorkBlockCard>
          <WorkBlockCard titleChild={"курс \nпо адаптации"}>
            для новых сотрудников
          </WorkBlockCard>
        </div>
      </div>


      <div className="CardBlock_videoSwiperBlock">
      <h2 className="CardBlock_videoSwiperBlock_title">
        Интервью с нашими преподавателями
      </h2>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, FreeMode, Thumbs]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          rewind={true}
          onBeforeInit={(swiper) => {
            //@ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            //@ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          pagination={true}
          allowTouchMove={true}
          allowSlideNext={true}
          allowSlidePrev={true}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          className="CardBlock_videoSwiper"
        >
          <div
            className="CardBlock_videoSwiper_nextSlide"
            ref={navigationNextRef}
          >
            <Image alt="" src={nextBtnImg} />
          </div>
          <div
            className="CardBlock_videoSwiper_prevSlide"
            ref={navigationPrevRef}
          >
            <Image alt="" src={prevBtnImg} />
          </div>

          <SwiperSlide className="CardBlock_videoSwiper_Slide">
            <iframe
              src="https://vk.com/video_ext.php?oid=-224289176&id=456239025&hash=2fb79d86cbddfb33"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </SwiperSlide>

          <SwiperSlide className="CardBlock_videoSwiper_Slide">
            <iframe
              src="https://vk.com/video_ext.php?oid=-224289176&id=456239021&hash=77479bdfc7090a22"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="CardBlock_videoSwiper_Slide">
            <iframe
              src="https://vk.com/video_ext.php?oid=-224289176&id=456239019&hash=78f42a82278b7a7b"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide className="CardBlock_videoSwiper_Slide">
            <iframe
              src="https://vk.com/video_ext.php?oid=-224289176&id=456239021&hash=77479bdfc7090a22"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="CardsBlock">
        <h2 className="CardsBlock__Title">Твои возможности</h2>
        <div className="Cards_items">
          <div className="reverse-cards">
            <div className="ImgCard_item anim_left">
              <ImgCard imgChild={AreTheyTwinsHuh}></ImgCard>
            </div>
            <div className="TxtCard_item">
              <TxtCard titleChild="РАЗВИВАЙТЕСЬ И РАЗВИВАЙТЕ">
                Вы хотите развиваться сами, совершенствовать процессы вокруг,
                показывать высший пилотаж в своем деле.
              </TxtCard>
            </div>
          </div>

          <div className="TxtCard_item">
            <TxtCard titleChild="ОПТИМИЗИРУЙТЕ РАБОЧИЕ ПРОЦЕССЫ">
              Наш чат-бот помогает автоматизировать вопросы студентов и
              преподавателей, а также информировать персонал.
            </TxtCard>
          </div>
          <div className="ImgCard_item">
            <ImgCard imgChild={CardsBlockImgLD}></ImgCard>
          </div>

          <div className="reverse-cards">
            <div className="ImgCard_item anim_left">
              <ImgCard imgChild={CardBlockImgSert}></ImgCard>
            </div>
            <div className="TxtCard_item">
              <TxtCard titleChild="РАЗВИВАЙТЕСЬ И РАЗВИВАЙТЕ">
                Вы хотите развиваться сами, совершенствовать процессы вокруг,
                показывать высший пилотаж в своем деле.
              </TxtCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkBlock;

/*


*/
