import React from "react"
import film_logo from "../../assets/film_logo.png"
import edit_icon from "../../assets/homePage/edit-tools.png"
import play_icon from "../../assets/play-button-arrowhead.png"

import { Link } from "react-router-dom"
import { AddFIlm } from "../FilmComponents/AddFIlm"
import { PlayLine } from "../FilmComponents/PlayLine"

export const HomePage: React.FC = () => {

  const URL = "https://www.youtube.com/watch?v=EXUmx2Ays4E&ab_channel=ARTEMWOLF"

  return (
    <>
      <div className="mx-[15px]">
        <div className="bg-twoMain rounded-[10px]">
          <div className=" flex justify-between items-center mt-[15px] font-main">
            <div className="flex justify-center items-center">
              <img className="w-[80px] p-[10px]" src={film_logo} alt="logo film" />
              <p className="text-whiteText font-light">Чудо</p>
              <Link to="/edit"><img className="w-5 ml-2" src={edit_icon} alt="Редактировать" /></Link>
            </div>
            <div className="">
              <Link to={URL}><img className="w-5 mr-[10px]" src={play_icon} alt="Смотреть" /></Link>
            </div>
          </div>
          <div className="px-[10px]">
            <PlayLine />
          </div>
        </div>
        <AddFIlm />
      </div>
      
    </>
  )
}
