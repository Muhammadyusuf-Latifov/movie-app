import { memo } from "react";
import logo from "../../shared/assets/logo.svg";
import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#000] pb-[30px]">
      <div className="container  grid grid-cols-4 bg-[#111111]  py-[30px] rounded-[12px]">
        <div>
          <img src={logo} alt="" />
          <div className=" mt-[45px]">
            <button className="footerBtn">Google Play</button>
          </div>
          <div>
            <button className="footerBtn">App Store</button>
          </div>
        </div>

        <div>
          <p className="text-[#fff] mb-[20px]">About Us</p>
          <ul className="link text-[#fff]">
            <li className="text-[#A1A1A1]">Public offer</li>

            <li className="text-[#A1A1A1]"> Advertising</li>

            <li className="text-[#A1A1A1]">F.A.Q</li>

            <li className="text-[#A1A1A1]">Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-[#fff] mb-[20px]">Category</p>
          <ul className="link">
            <li className="text-[#A1A1A1]">Movie</li>

            <li className="text-[#A1A1A1]"> Theater</li>

            <li className="text-[#A1A1A1]">Concert</li>

            <li className="text-[#A1A1A1]">Sport</li>
          </ul>
        </div>

        <div>
          <p className="text-[#fff]  mb-[20px]"> Contact us</p>
          <ul className="link">
            <li className="text-[#C61F1F] text-[20px]">+998 (95) 897-33-38</li>
          </ul>
          <p className="text-[#fff] mb-[20px] mt-[45px]">Social Media</p>
          <div className="flex items-center gap-[20px]">
            <Instagram className="text-[red]" />
            <Facebook className="text-[red]" />
            <Youtube className="text-[red]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
