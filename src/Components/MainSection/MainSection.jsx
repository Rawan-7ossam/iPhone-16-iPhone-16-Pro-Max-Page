import Heading from "../Heading/Heading";
import { motion, useScroll, useTransform } from "framer-motion";

// XLARGE2x IMAGES
import xlImg1 from "../../assets/images/hero_style1__ejjuw3sw3t0m_xlarge_2x.jpg";
import xlImg2 from "../../assets/images/hero_style2__gbh1d5shzmie_xlarge_2x.jpg";
import xlImg3 from "../../assets/images/hero_style3__ebrovo7velkm_xlarge_2x.jpg";

//LARGE IMAGES
import lgImg1 from "../../assets/images/hero_style1__ejjuw3sw3t0m_large.jpg";
import lgImg2 from "../../assets/images/hero_style2__gbh1d5shzmie_large.jpg";
import lgImg3 from "../../assets/images/hero_style3__ebrovo7velkm_large.jpg";

//MEDIUM IMAGES
import mdImg1 from "../../assets/images/hero_style1__ejjuw3sw3t0m_medium.jpg";
import mdImg2 from "../../assets/images/hero_style2__gbh1d5shzmie_medium.jpg";
import mdImg3 from "../../assets/images/hero_style3__ebrovo7velkm_medium.jpg";

//SMALL IMAGES
import smImg1 from "../../assets/images/hero_style1__ejjuw3sw3t0m_small.jpg";
import smImg2 from "../../assets/images/hero_style2__gbh1d5shzmie_small.jpg";
import smImg3 from "../../assets/images/hero_style3__ebrovo7velkm_small.jpg";

//XSMALL IMAGES
import xsmImg1 from "../../assets/images/hero_style1__ejjuw3sw3t0m_xsmall.jpg";
import xsmImg2 from "../../assets/images/hero_style2__gbh1d5shzmie_xsmall.jpg";
import xsmImg3 from "../../assets/images/hero_style3__ebrovo7velkm_xsmall.jpg";

import { useEffect, useState } from "react";

export default function MainSection() {
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState([smImg1, smImg2, smImg3]);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
  setImages([xlImg1, xlImg2, xlImg3]);
  setIsLg(true);
} else if (width >= 1067) {
  setImages([lgImg1, lgImg2, lgImg3]);
  setIsLg(true);
} else if (width >= 734) {
  setImages([mdImg1, mdImg2, mdImg3]);
  setIsLg(false);
} else if (width >= 480) {
  setImages([smImg1, smImg2, smImg3]);
  setIsLg(false);
} else {
  setImages([xsmImg1, xsmImg2, xsmImg3]);
  setIsLg(false);
}
    };

    updateImages();
    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);
  }, []);

  //filter one
  const clip1 = useTransform(
    scrollYProgress,
    [0.17, 0.4],
    ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]
  );

  //filter two
  const clip2 = useTransform(
    scrollYProgress,
    [0.4, 0.6],
    ["inset(0% 0% 0% 100%)", "inset(0% 0% 0% 0%)"]
  );

  //to shrink and translate the last image
  const shrink = useTransform(scrollYProgress, [0.6, 1], ["98%", "75%"]);
  const transY = useTransform(scrollYProgress, [0.6, 1], [0, -150]);

  //changes on last text
  const textY = useTransform(scrollYProgress, [0.7, 1], [150, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  // opacity for images
  const opacity1 = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);
  const opacity3 =1

  return (
    <div className=" min-h-screen pt-[8vh]  bg-black">
      <Heading />
      {isLg ? (
        <div className=" lg:h-[265vh] mx-1 lg:mx-0">
          <div className="sticky top-[20px] lg:top-[30px] h-screen flex items-center justify-center overflow-hidden bg-black">
            <motion.div
              className="absolute w-[98%] h-screen overflow-hidden"
              style={{ width: shrink }}
            >
              <motion.img
                src={images[0]}
                style={{ opacity: opacity1 }}
                className="w-full h-full object-cover absolute rounded-4xl z-0 "
              />
              <motion.img
                src={images[1]}
                style={{ clipPath: clip1, opacity: opacity2 }}
                transition={{duration:0.5}}
                className="w-full h-full object-cover absolute rounded-4xl z-10 "
              />
              <motion.img
                src={images[2]}
                style={{ clipPath: clip2, y: transY, opacity: opacity3 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute rounded-4xl z-20 "
              />
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center gap-10 bg-black">
          {images.map((image, i) => (
            <img key={i} src={image} alt={`image ${i}`} />
          ))}
        </div>
      )}

      <motion.div
        className=" text-center px-5 w-[88%] lg:w-[52%] mx-auto bg-black  pb-10"
        style={{ y: textY, opacity: textOpacity }}
        transition={{ duration: 1.2 ,ease:"easeInOut" }}
      >
        <p className=" mt-5 lg:mt-0 text-[#86868b] text-[21px]  font-semibold mx-auto">
          Our latest generation of Photographic Styles gives you greater
          creative flexibility than ever before, so you can{" "}
          <span className="text-white">make every photo even more you</span> .
          And thanks to advances in our image pipeline, you can now reverse any
          style, anytime.
        </p>
      </motion.div>
    </div>
  );
}
