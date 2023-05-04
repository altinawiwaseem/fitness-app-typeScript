import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import banner from "@/assets/banner3.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <p className="text-6xl ">Exercise</p>
              <div className="text-[175px] text-primary-100 before:absolute before:-left-20 before:-top-40 before:z-[-1] md:before:content-exercise"></div>
            </div>
            <p className="mt-8 text-xl ">Fitness Club</p>
            <p className="my-4 text-4xl text-red-600">
              Sweat, Smile <br /> and Repeat
            </p>
            <p className=" text-xl">check out the most effective exercises </p>
          </motion.div>

          {/* Actions */}

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Explore Exercises
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Exercises)}
              href={`#${SelectedPage.Exercises}`}
            />
          </motion.div>
        </div>

        {/* Image */}
        <div>
          <img src={banner} alt="home-page-image" className="" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
