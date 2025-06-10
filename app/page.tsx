"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full px-[10px] pb-[50px]">
        <div className="flex flex-col items-center justify-center gap-[20px] max-w-[580px] w-full">
          <div className="relative w-fit h-fit">
            <motion.div
              initial={{ opacity: 0, y: 70, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image
                className="select-none absolute top-[55px] left-[40px]"
                src="/images/opening1.png"
                alt="InternPH"
                quality={100}
                width={250}
                height={170}
                unoptimized={true}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 70, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.07 }}
            >
              <Image
                className="select-none absolute top-[70px] left-[180px]"
                src="/images/opening2.png"
                alt="InternPH"
                quality={100}
                width={250}
                height={170}
                unoptimized={true}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 70, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.14 }}
            >
              <Image
                className="select-none absolute top-[170px] left-[105px]"
                src="/images/opening3.png"
                alt="InternPH"
                quality={100}
                width={250}
                height={170}
                unoptimized={true}
              />
            </motion.div>
            <div className="w-[450px] h-[350px] invisible" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.21 }}
              >
                <Image
                  className="select-none"
                  src="/images/internph.svg"
                  alt="InternPH"
                  width={167.3}
                  height={40}
                  unoptimized={true}
                />
              </motion.div>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                className="text-2xl font-bold text-[#273750] text-center text-[24px]"
              >
                Find your OJT in just a few clicks.
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
                className="text-[16px] font-medium text-[#273750] text-center max-w-[350px]"
              >
                We help college students land the best internships for free.
              </motion.p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <motion.button
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.42 }}
                className="select-none cursor-pointer inset-shadow-[0_1px_0_rgba(255,255,255,.45)] drop-shadow-[0_2px_0.5px_#A2BEE7] bg-gradient-to-t from-[#216AF8] via-[#0066FF] to-[#4A93FF] text-white text-[16px] font-bold px-[15px] py-[6px] rounded-[10px] outline-[1px] outline-[#003CFF]"
              >
                <span className="drop-shadow-[0_1px_0_rgba(0,0,0,.45)]">
                  Join the Waitlist
                </span>
              </motion.button>
            </div>
          </div>
          <motion.hr
            initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
            className="w-full border-[#E6EEF8] border-b-[1px] my-[10px]"
          />
          <div className="flex flex-col items-center justify-center gap-[20px] w-full">
            <h2 className="text-[20px] font-bold text-[#273750] text-center">
              How it works
            </h2>
            <div className="flex flex-col items-center justify-center gap-[25px] w-full">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="overflow-hidden min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]"></div>
                <div>
                  <div className="flex flex-row gap-[5px] items-center">
                    <span className="text-[14px] select-none w-[22px] h-[22px] flex items-center justify-center text-center rounded-full bg-[#667284] text-white font-bold">
                      1
                    </span>
                    <h3 className="font-bold text-[16px] text-[#273750]">
                      Create a free profile
                    </h3>
                  </div>
                  <p className="text-[16px] font-normal text-[#273750] mt-[10px]">
                    Showcase your best self to get discovered by top
                    employers.{" "}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="overflow-hidden min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]"></div>
                <div>
                  <div className="flex flex-row gap-[5px] items-center">
                    <span className="text-[14px] select-none w-[22px] h-[22px] flex items-center justify-center text-center rounded-full bg-[#667284] text-white font-bold">
                      2
                    </span>
                    <h3 className="font-bold text-[16px] text-[#273750]">
                      Get notified
                    </h3>
                  </div>
                  <p className="text-[16px] font-normal text-[#273750] mt-[10px]">
                    We email you exclusive job openings best fit for you.{" "}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="overflow-hidden min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]"></div>
                <div>
                  <div className="flex flex-row gap-[5px] items-center ">
                    <span className="text-[14px] select-none w-[22px] h-[22px] flex items-center justify-center text-center rounded-full bg-[#667284] text-white font-bold">
                      3
                    </span>
                    <h3 className="font-bold text-[16px] text-[#273750]">
                      Get hired
                    </h3>
                  </div>
                  <p className="text-[16px] font-normal text-[#273750] mt-[10px]">
                    From interviews to closing the offer, we handle it all for
                    you.{" "}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.hr
            initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
            className="w-full border-[#E6EEF8] border-b-[1px] my-[10px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.49 }}
            className="text-[14px] font-normal text-[#273750] text-center"
          >
            © 2025 InternPH. All rights reserved.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
