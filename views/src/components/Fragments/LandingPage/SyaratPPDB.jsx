import { PropTypes } from "prop-types";
import FlatDesignStep from "../../../assets/img/amico.png";

export default function SyaratPPDB() {
  return (
    <section className="max-w-[90%] mx-auto pb-20 w-full" id="syarat-ppdb">
      <header>
        <h2 className="font-bold text-2xl lg:text-3xl text-slate-700 mb-10">
          Syarat PPDB Online
        </h2>
      </header>
      <section className="content md:flex md:justify-between xl:justify-start xl:gap-10">
        <section
          className="flex flex-col gap-6 xl:gap-10 md:w-1/2"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <RenderList number="1" text="Surat Keterangan Lulus" />
          <RenderList number="2" text="Kartu Keluarga" />
          <RenderList number="3" text="Akta Kelahiran" />
          <RenderList number="4" text="Ijazah Jenjang Sebelumnya" />
        </section>
        <section
          className="image mb-5 md:max-w-xs lg:max-w-lg mt-7 md:-mt-16"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src={FlatDesignStep} alt="Stepper Image" />
        </section>
      </section>
    </section>
  );
}

const RenderList = ({ number, text }) => {
  return (
    <section className="flex items-start gap-3">
      <div className="number bg-primary-color text-secondary-color font-extrabold px-2.5 py-0.5 rounded-full text-xl">
        {number}
      </div>
      <p className="text-slate-700">{text}</p>
    </section>
  );
};

RenderList.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string,
};
