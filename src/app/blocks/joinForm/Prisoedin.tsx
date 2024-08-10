import React from "react";
import "./Prisoedin.scss";

const Prisoedin = () => {
  return (
    <>
      <main className="prisoed">
        <div className="prisoed2">
          <div className="prisoedin_one margin">
            <h1>Присоединяйся!</h1>
          </div>
          <div className="prisoedin_two margin">
            <input type="text" placeholder="ФИО" />
            <input type="tel" placeholder="Телефон" className="in" />
            <button className="in">ОТПРАВИТЬ</button>
          </div>
          <div className="prisoedin_thre">
            <input type="checkbox" />
            <p>
              Я даю
              <span className="coloc_grin">
                <a href="#"> согласие на обработку персональных данных</a>
              </span>
              и соглашаюсь с
              <span className="coloc_grin">
                <a href="#">политикой конфиденциальности</a>
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Prisoedin;
