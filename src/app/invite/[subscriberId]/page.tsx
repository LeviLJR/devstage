import Image from "next/image";
import logo from "../../../assets/logo.svg";
import { InviteLinkInput } from "./invite-link-input";
import { Ranking } from "./ranking";
import { Stats } from "./stats";

interface InvitePageProps {
  params: Promise<{
    subscriberId: string;
  }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberId } = await props.params;
  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

  return (
    <div
      className="min-h-dvh text-[0.875rem] py-8 md:py-0 [&_*_h2]:text-xl [&_*_h2]:font-heading 
			[&_*_h1,&_*_h2]:font-semibold [&_*_h1,&_*_h2]:leading-none [&_*_p]:text-gray-300
			md:text-base flex flex-col items-center justify-center md:place-items-start gap-10 md:gap-16"
    >
      <Image src={logo} className="w-21.75 md:w-27" alt="devstage logo" />
      <div className="flex flex-col md:w-full md:flex-row items-center text-center gap-10 md:px-[5%] justify-between md:text-start">
        <div className=" flex-1 flex flex-col md:min-w-[405px] md:max-w-[550px] space-y-7 md:items-stretch md:space-y-10">
          <div className="flex flex-col md:items-start gap-2 leading-none">
            <h1 className="text-2xl font-heading font-semibold md:text-4xl">
              Registration confirmed!
            </h1>
            <p>To join the event, click on the link sent to your email.</p>
          </div>
          <div className="space-y-5 md:space-y-6 w-full">
            <div className="space-y-4 md:space-y-3">
              <h2>Refer and Earn</h2>
              <p>
                Invite more people to the event and compete for exclusive
                prizes! Just share the link below and follow the registrations:
              </p>
            </div>
            <InviteLinkInput inviteLink={inviteLink} />
            <Stats subscriberId={subscriberId} />
          </div>
        </div>
        <Ranking />
      </div>
    </div>
  );
}
