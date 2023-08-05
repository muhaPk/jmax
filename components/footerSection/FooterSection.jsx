import Image from "next/image";
import './style.css';
import Link from "next/link";

function FooterSection() {
  return (
    <section className="footer-section relative px-[16px] lg:px-32 pt-[50px] pb-[34px]">
      <Image
          src="/footer/Vector 19.svg"
          alt="rectangle"
          width={1645}
          height={210}
          className="bg-footer absolute bottom-0 right-0"
      />
      <div className="footer-container">
        <div className="text-center w-[100%] flex justify-center">
          <Image
            src="/logo-jmax.svg"
            alt="rectangle"
            width={67}
            height={100}
            className="logo"
          />
        </div>
        <div className="section-footer-navbar flex justify-center mt-[51px] relative">
          <ul className="flex nav-contact-info left-0 tel">
            <li className="mr-[35px] lg:mr-[20px] xl:mr-[35px]"><Link className="font-montserrat lg:text-[16px] xl:text-[18px] text-[12px] md:text-[18px] text-primary" href="tel:+12346789">+359 88 9 362120</Link></li>
            <li><Link className="font-montserrat lg:text-[16px] xl:text-[18px] text-[12px] md:text-[18px] text-primary" href="mailto:office@jmax.bg">office@jmax.bg</Link></li>
          </ul>
          <ul className="flex nav-links font-montserrat">
            <li><Link className="text-[12px] md:text-[16px] lg:text-[16px] 2xl:text-[22px] text-white" href="#portfolio">ПОРТФОЛИО</Link></li>
            <li className="ml-[35px] lg:ml-[20px] xl:ml-[35px]"><Link className="text-[12px] md:text-[16px] lg:text-[16px] 2xl:text-[22px] text-white" href="#prices">ЦЕНИ</Link></li>
            <li className="ml-[35px] lg:ml-[20px] xl:ml-[35px]"><Link className="text-[12px] md:text-[16px] lg:text-[16px] 2xl:text-[22px] text-white" href="#process">ПРОЦЕС</Link></li>
            <li className="ml-[35px] lg:ml-[20px] xl:ml-[35px]"><Link className="text-[12px] md:text-[16px] lg:text-[16px] 2xl:text-[22px] text-white" href="#faq">ВЪПРОСИ</Link></li>
          </ul>
          <ul className="flex nav-contact-info soc right-0">
            <li className="footer-social"><Link href="https://www.facebook.com/jmaxwebsites">
              <Image
          src="/footer/facebook.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </Link></li>
            <li className="ml-[44px] lg:ml-[24px] xl:ml-[24px] footer-social"><Link href="https://www.instagram.com/jmax_websites/">
              <Image
          src="/footer/Instagram.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </Link></li>
            <li className="ml-[44px] lg:ml-[24px] xl:ml-[24px] footer-social"><Link href="">
              <Image
          src="/footer/LinkedIn.svg"
          alt="rectangle"
          width={24}
          height={24}
          className="footer-social-icon"
      />
            </Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
