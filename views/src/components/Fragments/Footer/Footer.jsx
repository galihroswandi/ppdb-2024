import { Link } from "react-router-dom";
import FacebookIcon from "../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import YoutubeIcon from "../../../assets/icons/youtube.svg";
import XtwitterIcon from "../../../assets/icons/x-twitter.svg";

export default function Footer() {
  return (
    <section className="bg-primary-color w-full pt-5 lg:pt-10">
      <section className="max-w-[90%] mx-auto w-full text-white">
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 lg:mb-5">
          <section className="temukankami">
            <header>
              <h3 className="font-bold text-2xl mb-2">Temukan Kami</h3>
            </header>
            <p>Alamat: Jl. Pendidikan No. 123, Kota Anda</p>
            <p>Telepon: (021) 1234-5678</p>
            <p>Email: info@sekolahanda.com</p>
          </section>
          <section>
            <section
              className="rounded-md shadow-md overflow-hidden h-32 sm:h-40"
              id="map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25189.262921553607!2d106.98504379362531!3d-6.122591186989013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a214551b95783%3A0x96a6230632cd9784!2sGerbang%20Tol%20Tarumajaya!5e0!3m2!1sid!2sid!4v1710138742257!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </section>
          </section>
          <section className="sosmed ml-20">
            <header>
              <h3 className="font-bold text-2xl mb-2">Social Media</h3>
            </header>
            <section className="flex items-center gap-5">
              <Link
                target="_blank"
                to="https://www.facebook.com"
                title="Facebook"
              >
                <img src={FacebookIcon} alt="Facebook Icon" className="w-7" />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com"
                title="Instagram"
              >
                <img src={InstagramIcon} alt="Instagram Icon" className="w-7" />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com"
                title="Youtube"
              >
                <img src={YoutubeIcon} alt="Youtube Icon" className="w-7" />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com"
                title="X-Twitter"
              >
                <img src={XtwitterIcon} alt="Twitter Icon" className="w-7" />
              </Link>
            </section>
          </section>
        </section>
        <section className="copyright py-3">
          <p className="text-sm text-center">
            &copy; 2023 Sekolah A. All rights reserved.
          </p>
        </section>
      </section>
    </section>
  );
}
