import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { siteConfiguration } from "@/config/siteConfig";
import PastEditionCard from './PastEditionCard';
import Link from 'next/link';

export default function PastEditons() {
  const { pasteditions, pastEditionURL, pastEditionsCTA } = siteConfiguration;

  return (
    <div className="flex flex-col gap-y-10">
      <div className="laptop:px-4 tablet: px-0 py-16 ">
        <SectionHeader
          title="Explore Past GISfest"
          layout="text-left"
        />
        {/* <div className="flex flex-col gap-6">
          {teamDescription.map((description, id) => (
            <p
              key={`team-description-${id}`}
              className="laptop:text-h5 text-body text-tc-10 font-p-medium "
            >
              {description}
            </p>
          ))}
        </div> */}
      </div>

      <div className="grid grid-flow-row grid-cols-1 gap-10 tablet:grid-cols-1 laptop:grid-cols-2 tv:grid-cols-3">
          {pasteditions.map((session, id) => (
            <PastEditionCard key={`session-${id}`} session={session} />
          ))}
      </div>
      <div className="flex justify-center tablet:basis:1/2 laptop:basis-2/3 tablet:self-center p-2 tablet:p-4">
        <Link
          href={pastEditionURL}
          title={pastEditionsCTA}
          className="py-[12px] px-6 font-clashDisplay text-body whitespace-nowrap text-center hover:bg-tc-30 font-p-medium border border-tc-30 rounded-lg text-tc-0"
        >
          Explore more
        </Link>
      </div>

    </div>

  );
};


