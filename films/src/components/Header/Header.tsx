import React, { useEffect, useState } from "react"
import home from "../../assets/home-page.png"
import user from "../../assets/user-profile.png"
import share from "../../assets/share.png"
import settings from "../../assets/settings.png"
import { Link, Location, useLocation } from "react-router-dom"

export const Header: React.FC = () => {
  const [titlePage, setTitlePage] = useState<string | undefined>('')

  const location: Location = useLocation()
  const getPageName = (url: Location) => {
    switch (url.pathname) {
      case "/":
        return "Фильмы";
      case "/settings":
        return "Настройки";
      case "/watching":
        return "Продолжить";
      case "/watched":
        return "Просмотренные";
      case "/like":
        return "Любимые";
      case "/archive":
        return "Архив";
      case "/profile":
        return "Профиль";
      case "/share":
        return "Поделится";
    }
  }

  useEffect(() => {
    if (getPageName(location)) {
      setTitlePage(getPageName(location))
    } else {
      console.log("Ошибка Загрузки страницы")
      setTitlePage("Ошибка Загрузки страницы")
    }

  }, [location])

  return (
    <>
      <header className="sticky top-0 px-4 bg-buttonBg w-full z-50 border-b-[1px] border-white border-opacity-20 ">
        <div className="flex items-center justify-between pt-[30px]">
          <div className=" ">
            <Link to="/">
              <img className="w-12" src={home} alt="Home Page" />
            </Link>
          </div>
          <nav className="">
            <ul className="flex items-center space-x-2">
              <li className="w-8 h-8 space-x-4">
                <Link to="/profile">
                  <img src={user} alt="" />
                </Link>
              </li>
              <li className="w-8 h-8 space-x-4">
                <Link to="/share">
                  <img src={share} alt="" />
                </Link>
              </li>
              <li className="w-8 h-8 space-x-4">
                <Link to="/settings">
                  <img src={settings} alt="" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-3 text-whiteText text-[30px] font-main font-semibold">
          {titlePage}
        </div>
      </header>
    </>
  )
}
