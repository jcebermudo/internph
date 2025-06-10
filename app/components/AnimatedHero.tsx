"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <div className="relative w-fit h-fit">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="select-none absolute top-[40px] left-0"
          src="/images/opening1.png"
          alt="InternPH"
          width={300}
          height={170}
        />
      </motion.div>

      <Image
        className="select-none absolute top-[70px] left-[150px]"
        src="/images/opening2.png"
        alt="InternPH"
        width={300}
        height={170}
      />

      <Image
        className="select-none absolute top-[170px] left-[70px]"
        src="/images/opening3.png"
        alt="InternPH"
        width={300}
        height={170}
      />
      <div className="w-[450px] h-[400px] invisible" aria-hidden="true" />
    </div>
  );
}
