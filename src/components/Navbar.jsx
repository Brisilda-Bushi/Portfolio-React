import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { allData } from "../constants";
import { logo, menu, close } from "../assets";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { navLinks } = allData();
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t } = useTranslation();

    const handleLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Brisilda &nbsp;
                        <span className="lg:block hidden">|&nbsp; Bushi</span>
                    </p>
                </Link>

                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title
                                    ? "text-white"
                                    : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    <select
                        className="text-secondary font-bold focus:outline-none bg-primary font-medium text-[18px]"
                        value={selectedLanguage}
                        onChange={(e) => handleLanguage(e.target.value)}
                    >
                        <option value="en">{t("English")}</option>
                        <option value="de">{t("German")}</option>
                        <option value="gr">{t("Greek")}</option>
                        <option value="al">{t("Albanian")}</option>
                    </select>
                </ul>

                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.title
                                            ? "text-white"
                                            : "text-secondary"
                                    } font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                            <select
                                className="w-full text-secondary font-bold border-0 outline-none focus:outline-none focus:border-0 bg-transparent font-medium "
                                value={selectedLanguage}
                                onChange={(e) => handleLanguage(e.target.value)}
                            >
                                <option value="en">{t("English")}</option>
                                <option value="de">{t("German")}</option>
                                <option value="gr">{t("Greek")}</option>
                                <option value="al">{t("Albanian")}</option>
                            </select>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
