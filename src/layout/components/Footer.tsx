import { memo } from "react";
import logo from "../../shared/assets/logo.svg";
import { Instagram, Facebook, Youtube } from "lucide-react";
import appStore from "../../shared/assets/apple.svg";
import googlePlay from "../../shared/assets/googlePlay.svg";
import {
  NotepadText,
  Sparkle,
  ShieldQuestionMark,
  Phone,
  SquarePlay,
  Clapperboard,
  Drum,
  Volleyball,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#000] pb-[30px]">
      <div className="container ">
        <div className="footWrap px-[20px]   bg-[#111111]  py-[30px] rounded-[12px]">
          <div className="part ">
            <img src={logo} alt="" />
            <div className=" mt-[45px] max-[475]:mt-[20px]">
              <img src={googlePlay} alt="" />
            </div>
            <div className="mt-[8px]">
              <img src={appStore} alt="" />
            </div>
          </div>

          <div className="part">
            <p className="text-[#fff] mb-[20px]">About Us</p>
            <ul className="link text-[#fff]">
              <li className="text-[#A1A1A1]">
                <span>
                  <NotepadText className="text-[#d00000]" /> Public offer
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <Sparkle className="text-[#d00000]" /> Advertising
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <ShieldQuestionMark className="text-[#d00000]" />
                  F.A.Q
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <Phone className="text-[#d00000]" /> Contact
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#fff] mb-[20px]">Category</p>
            <ul className="link">
              <li className="text-[#A1A1A1]">
                <span>
                  <SquarePlay className="text-[#d00000]" />
                  Movie
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <Clapperboard className="text-[#d00000]" />
                  Theater
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <Drum className="text-[#d00000]" /> Concert
                </span>
              </li>

              <li className="text-[#A1A1A1]">
                <span>
                  <Volleyball className="text-[#d00000]"/> Sport
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[#fff]  mb-[20px]"> Contact us</p>
            <ul className="link">
              <li className="text-[#C61F1F] text-[20px]">
                +998 (95) 897-33-38
              </li>
            </ul>
            <p className="text-[#fff] mb-[20px] mt-[45px] max-[475px]:mt-[20px]">Social Media</p>
            <div className="flex items-center gap-[20px]">
              <Instagram className="text-[red]" />
              <Facebook className="text-[red]" />
              <Youtube className="text-[red]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
