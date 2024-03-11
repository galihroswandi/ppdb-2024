import { PropTypes } from "prop-types";
import FlatDesignStep from "../../../assets/img/rafiki.png";

export default function AlurPPDB() {
  return (
    <section className="max-w-[90%] mx-auto pb-20 w-full" id="alur-ppdb">
      <header>
        <h2 className="font-bold text-2xl lg:text-3xl text-slate-700 mb-3">
          Alur PPDB Online
        </h2>
      </header>
      <section className="content md:flex md:justify-between xl:justify-start xl:gap-10">
        <section
          className="image mb-5 md:max-w-xs lg:max-w-lg xl:max-w-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src={FlatDesignStep} alt="Stepper Image" />
        </section>
        <section
          className="flex flex-col gap-6 xl:gap-10"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <RenderList
            number="1"
            text="Calon peserta didik masuk ke website ppdb.schoolwebpro.sch.id"
          />
          <RenderList number="2" text="Daftar Akun" />
          <RenderList number="3" text="Lengkapi Formulir" />
          <RenderList number="4" text="Upload Berkas" />
          <RenderList
            number="5"
            text="Login Menggunakan Username dan Password yang Telah Dibuat"
          />
          <RenderList
            number="6"
            text="Pengumuman diumumkan melalui website dan Email"
          />
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
