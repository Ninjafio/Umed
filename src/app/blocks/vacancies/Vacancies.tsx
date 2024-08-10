"use client";

import React, { useState } from "react";
import "./Vakansii.scss";

const Vacancies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const OpenModal = () => {
    if (isLoad === false) {
      setIsLoad(true);
      const script = document.createElement("script");
      script.src =
        "https://cdn-ru.bitrix24.ru/b11758382/crm/form/loader_299.js";
      script.async = true;
      script.dataset.b24Form = "inline/299/vrhrzc";
      script.dataset.skipMoving = "true";
      document.body.appendChild(script);
    } else {
      setIsOpen(true);
      var modal = document.querySelector(".b24-form") as HTMLElement;
      modal.style.display = "block";
    }
  };
  const CloseModal = () => {
    if (isOpen) {
      setIsOpen(false);
      var modal = document.querySelector(".b24-form") as HTMLElement;
      modal.style.display = "none";
    }
  };
  //onClick={isOpen ? CloseModal : OpenModal}
  // <div className={`close_btn ${isOpen ? "active" : ""}`}>х</div>
  return (
    <>
      <main className="main_vakansii">
        <div
          className={`close_btn ${isOpen ? "active" : ""}`}
          onClick={isOpen ? CloseModal : OpenModal}
        >
          х
        </div>
        <div className="div_card">
          <h1>Акушер-гинеколог</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/104788328?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button onClick={isOpen ? CloseModal : OpenModal}>
            Отправить резюме
          </button>
        </div>
        <div className="div_card">
          <h1>Специалист</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/104375797?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button onClick={isOpen ? CloseModal : OpenModal}>
            Отправить резюме
          </button>
        </div>
        <div className="div_card">
          <h1>Преподаватель стоматологии</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/104375691?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
        <div className="div_card">
          <h1>Заведующий столовой</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/103126945?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
        <div className="div_card">
          <h1>Педагог-психолог</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/103750615?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
        <div className="div_card">
          <h1>Педагог-организатор</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/103709946?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>

        <div className="div_card">
          <h1>Преподаватель курса "Анестезиология и реаниматология"</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/103367523?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
        <div className="div_card">
          <h1>
            Преподаватель курса профессионального обучения "Косметик - эстетист"
          </h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/103460468?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
        <div className="div_card">
          <h1>Стоматолог</h1>
          <button>
            <a href="https://chelyabinsk.hh.ru/vacancy/104874940?from=employer&hhtmFrom=employer">
              Подробная информация
            </a>
          </button>
          <button>Отправить резюме</button>
        </div>
      </main>
    </>
  );
};

export default Vacancies;
