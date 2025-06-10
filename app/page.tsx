"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  emailRequired: string;
  firstName: string;
  firstNameRequired: string;
  lastName: string;
  lastNameRequired: string;
  school: string;
  schoolRequired: string;
  year: number;
  yearRequired: number;
  degreeProgram: string;
  degreeProgramRequired: string;
  facebook: string;
  desiredRole: string;
  desiredRoleRequired: string;
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("email"));

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 transition-all duration-300  ${
          isOpen ? "opacity-100 bg-white/70" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center bg-gradient-to-t from-[#F7FAFF] to-[#FFFFFF]  outline outline-[#E6EEF8] drop-shadow-[0_2px_1.5px_rgba(162,190,231,0.5)] justify-center gap-[5px] max-w-[380px] w-full rounded-[10px]">
          <div className="flex flex-col items-center justify-center gap-[2px] p-[30px]">
            <Image
              className="select-none"
              src="/images/icon.svg"
              alt="InternPH"
              width={50}
              height={50}
              unoptimized={true}
            />
            <h3 className="text-[20px] text-[#273750] font-bold text-center">
              Join the waitlist
            </h3>
            <p className="text-[16px] text-[#273750] font-medium text-center max-w-[250px]">
              Get early access on exclusive internship offers.
            </p>
          </div>
          <hr className="w-full border-[#E6EEF8] border-b-[1px] border-dashed" />
          <form
            className="flex flex-col items-center justify-center gap-[10px] w-full p-[30px]"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col items-start justify-center gap-[5px] w-full">
              <label className="font-medium text-[16px] text-[#273750]">
                Email
              </label>
              <input
                type="text"
                placeholder="juan@gmail.com"
                className="w-full p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7]"
                {...register("email", {
                  required: "Field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="font-medium text-[14px] text-[#ff3478]"
                >
                  {errors.email.message}
                </motion.span>
              )}
            </div>
            <div className="flex flex-row items-start justify-center gap-[10px] w-full">
              <div className="flex flex-col items-start justify-center gap-[5px] w-full">
                <label className="font-medium text-[16px] text-[#273750]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Juan"
                  className="w-full p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7]"
                  {...register("firstName", {
                    required: "Field is required",
                  })}
                />
                {errors.firstName && (
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="font-medium text-[14px] text-[#ff3478]"
                  >
                    {errors.firstName.message}
                  </motion.span>
                )}
              </div>
              <div className="flex flex-col items-start justify-center gap-[5px] w-full">
                <label className="font-medium text-[16px] text-[#273750]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Dela Cruz"
                  className="w-full p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7]"
                  {...register("lastName", {
                    required: "Field is required",
                  })}
                />
                {errors.lastName && (
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="font-medium text-[14px] text-[#ff3478]"
                  >
                    {errors.lastName.message}
                  </motion.span>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px] w-full">
              <label className="font-medium text-[16px] text-[#273750]">
                Name of School
              </label>
              <input
                type="text"
                placeholder="University of the Philippines"
                className="w-full p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7]"
                {...register("school", {
                  required: "Field is required",
                })}
              />
              {errors.school && (
                <motion.span
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="font-medium text-[14px] text-[#ff3478]"
                >
                  {errors.school.message}
                </motion.span>
              )}
            </div>
            <div className="flex flex-row items-start justify-center gap-[10px] w-full">
              <div className="flex flex-col items-start justify-center gap-[5px] w-[80px]">
                <label className="font-medium text-[16px] text-[#273750]">
                  Year
                </label>
                <div className="relative w-[60px]">
                  <select
                    className="w-full cursor-pointer appearance-none p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7] pr-8"
                    {...register("year")}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#273750]">
                    <svg
                      className="h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                {errors.year && (
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="font-medium text-[14px] text-[#ff3478]"
                  >
                    {errors.year.message}
                  </motion.span>
                )}
              </div>
              <div className="flex flex-col items-start justify-center gap-[5px] w-full">
                <label className="font-medium text-[16px] text-[#273750]">
                  Degree Program
                </label>
                <input
                  type="text"
                  placeholder="BS Computer Science"
                  className="w-full p-[10px] rounded-[10px] border-[1px] focus:outline-[#0167FF] focus:outline-[2px] border-[#E6EEF8] bg-[#EDF0F7]"
                  {...register("degreeProgram", {
                    required: "Field is required",
                  })}
                />
                {errors.degreeProgram && (
                  <motion.span
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="font-medium text-[14px] text-[#ff3478]"
                  >
                    {errors.degreeProgram.message}
                  </motion.span>
                )}
              </div>
            </div>
            <motion.button
              type="submit"
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
                scale: 0.9,
              }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.42 }}
              className="select-none cursor-pointer inset-shadow-[0_1px_0_rgba(255,255,255,.45)] drop-shadow-[0_2px_0.5px_#A2BEE7] bg-gradient-to-t from-[#216AF8] via-[#0066FF] to-[#4A93FF] text-white text-[16px] font-bold px-[15px] py-[6px] rounded-[10px] outline-[1px] outline-[#003CFF] w-full"
            >
              <span className="drop-shadow-[0_1px_0_rgba(0,0,0,.45)]">
                Join the Waitlist
              </span>
            </motion.button>
          </form>
        </div>
      </div>
      <div
        className={
          "flex flex-col items-center justify-center w-full px-[10px] pb-[50px]"
        }
      >
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
                  width={140.3}
                  height={30}
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
                onClick={handleOpen}
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
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.56 }}
              className="text-[20px] font-bold text-[#273750] text-center"
            >
              How it works
            </motion.h2>
            <div className="flex flex-col items-center justify-center gap-[25px] w-full">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.63 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="select-none relative overflow-hidden flex flex-col items-center justify-end min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]">
                  <Image
                    className="absolute top-[40px]"
                    src="/images/1ststep.png"
                    alt="InternPH"
                    width={224}
                    height={177}
                    unoptimized={true}
                  />
                </div>
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="select-none relative flex flex-col items-center justify-end overflow-hidden min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]">
                  <Image
                    className="absolute top-[50px]"
                    src="/images/2ndstep.png"
                    alt="InternPH"
                    width={280}
                    height={177}
                    unoptimized={true}
                  />
                </div>
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
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.77 }}
                className="flex flex-row w-full gap-[30px] items-center"
              >
                <div className="select-none relative flex flex-col items-center justify-center overflow-hidden min-w-[320px] w-full max-w-[320px] bg-gradient-to-t from-[#A6CAFF] to-[#0066FF] h-[210px] rounded-[10px]">
                  <Image
                    className="absolute top-[30px]"
                    src="/images/3rdstep.png"
                    alt="InternPH"
                    width={240}
                    height={177}
                    unoptimized={true}
                  />
                </div>
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
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.84 }}
            className="w-full border-[#E6EEF8] border-b-[1px] my-[10px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.91 }}
            className="select-none text-[14px] font-normal text-[#273750] text-center"
          >
            © 2025 InternPH. All rights reserved.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
