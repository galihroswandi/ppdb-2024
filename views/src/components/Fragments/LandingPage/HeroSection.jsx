import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import FilePresentRoundedIcon from "@mui/icons-material/FilePresentRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Logo from "../../../assets/icons/coder.png";
import HeroImage from "../../../assets/img/cuate.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full bg-primary-color pt-28 lg:pt-36 rounded-b-3xl pb-10 mb-10">
      <Navbar />
      <ContentHero />
    </section>
  );
}

export const Navbar = () => {
  const [state, setState] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;
      const direction = prevScrollPos < currentScrollPos ? "down" : "up";

      if (direction === "down") {
        document.getElementById("navbar").classList.add("-translate-y-24");
      } else {
        document
          .getElementById("navbar")
          .classList.replace("-translate-y-24", "translate-y-0");
      }

      setTimeout(() => {
        setPrevScrollPos(currentScrollPos);
        setVisible(isVisible);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <section
      className={`${
        visible ? "navbar" : "navbar hidden"
      } bg-white w-[90%] fixed top-6 left-[50%] -translate-x-[50%] rounded-full px-5 lg:px-7 py-3 flex justify-between items-center transition-all duration-300 border border-slate-300`}
      id="navbar"
    >
      <section>
        <img src={Logo} alt="Logo Image" className="w-16 lg:w-20" />
      </section>
      <section className="hidden nav-link-lg lg:flex items-center gap-5 text-slate-700 font-semibold">
        <Link to="/" className="text-slate-600">
          Beranda
        </Link>
        <a href="#alur-ppdb">Alur PPDB</a>
        <a href="#info-ppdb">Info PPDB</a>
        <a href="#syarat-ppdb">Syarat PPDB</a>
        <Link to="/input-data">Form Pendaftaran</Link>
      </section>
      <section className="hidden lg:flex items-center gap-2">
        <a
          href="#"
          className="bg-secondary-color text-slate-700 px-6 py-2 font-semibold rounded-md"
        >
          Daftar
        </a>
        <Link
          to="/login"
          className="bg-secondary-color text-slate-700 px-6 py-2 font-semibold rounded-md"
        >
          Login
        </Link>
      </section>
      <button className="lg:hidden">
        <MenuIcon
          fontSize="large"
          sx={{ color: "#263238" }}
          onClick={toggleDrawer(true)}
        />
      </button>
      <SwipeableDrawer
        anchor="bottom"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {[
              {
                text: "Beranda",
                url: "#",
              },
              {
                text: "Alur PPDB",
                url: "#alur-ppdb",
              },
              {
                text: "Info PPDB",
                url: "#info-ppdb",
              },
              {
                text: "Syarat PPDB",
                url: "#syarat-ppdb",
              },
              {
                text: "Form Pendaftaran",
                url: "/input-data",
              },
            ].map((text, index) => (
              <ListItem key={index} disablePadding>
                <a href={text.url} className="w-full text-slate-700">
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 && <HomeRoundedIcon />}
                      {index === 1 && <FormatListNumberedRoundedIcon />}
                      {index === 2 && <InfoRoundedIcon />}
                      {index === 3 && <FilePresentRoundedIcon />}
                      {index === 4 && <EditNoteIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text.text} />
                  </ListItemButton>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </section>
  );
};

const ContentHero = () => {
  return (
    <section className="content max-w-[90%] mx-auto flex flex-col lg:flex-row items-start justify-between gap-3">
      <section className="desc lg:w-[230%] xl:w-[180%]">
        <h1 className="lg:leading-tight xl:leading-tight leading-snug md:leading-tight sm:leading-tight xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold text-white lg:w-[120%] lg:mb-5 mb-3">
          Selamat Datang di Pendaftaran Peserta Didik Baru (PPDB) Online Sekolah
          Coder Digital Indonesia
        </h1>
        <p className="text-white mb-10">
          Bergabunglah dengan Komunitas Pendidikan Kami! Daftarkan anak Anda
          secara mudah dan aman untuk memulai perjalanan pendidikan yang
          menyenangkan bersama kami.
        </p>
        <Link
          to="/input-data"
          className="bg-secondary-color text-slate-700 px-6 lg:py-3 py-2.5 font-semibold rounded-md"
        >
          Daftar Sekarang
        </Link>
      </section>
      <section className="img lg:px-14 pr-0 pt-0">
        <img src={HeroImage} alt="Hero Image" className="w-full xl:w-auto" />
      </section>
    </section>
  );
};
