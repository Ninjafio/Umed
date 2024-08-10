import { VK } from "../../Imgs/ImgsIndex";
import Image from "next/image";
import "./Vkumed.scss";

const VkUmed = () => {
  return (
    <>
      <main className="vkumed">
        <div>
          <Image src={VK} alt="Huh" className="imag_vk_umed" />
        </div>
        <div className="text_vkumed">
          <h2>Работа в ЮМЕД</h2>
          <p>
            UMED - первый негосударственный медицинский колледж и медицинский
            институт в Челябинской области
          </p>
          <a href="https://vk.com/club224289176" target="_blank">
            Присоединяйтесь к нашему сообществу!
          </a>
        </div>
      </main>
    </>
  );
};

export default VkUmed;
