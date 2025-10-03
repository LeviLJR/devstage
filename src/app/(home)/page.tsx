import { Radio } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { SubscriptionForm } from "./subscription-form";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-dvh py-8 flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col w-full items-center gap-5 md:place-items-start">
        <Image src={logo} className="w-21.75 md:w-27" alt="devstage logo" />
        <div className="text-4xl text-center leading-none w-full md:text-7xl md:text-left font-heading">
          <h1>
            <span className="text-blue">CodeCraft</span> <br />
            Summit 2025
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 h-full items-stretch md:flex-row">
        <div className="flex-1 flex flex-col gap-6 bg-gray-700 border-gray-600 rounded-2xl border p-8">
          <div className="flex justify-between font-semibold">
            <h2 className="text-xl font-heading">About the event</h2>
            <span className="text-purple text-xs flex gap-2 uppercase items-center">
              <Radio size={20} />
              live
            </span>
          </div>
          <div className="flex h-full text-sm items-center leading-relaxed md:text-base">
            An event created by and for developers who are passionate about
            creating innovative solutions and sharing knowledge. Let's dive into
            the latest trends in software development, systems architecture, and
            emerging technologies, with talks, workshops, and hackathons.
            <br />
            <br />
            March 15 to 17 | 6 p.m. to 9 p.m. | Online & Free
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <SubscriptionForm />
        </Suspense>
      </div>
    </div>
  );
}
