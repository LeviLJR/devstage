import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import { getRanking, getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "../../../http/api";

interface StatsProps {
	subscriberId: string
}
export async function Stats({subscriberId}: StatsProps) {
	const {count: acessCount} = await getSubscriberInviteClicks(subscriberId)
	const {count: subsCount}= await getSubscriberInviteCount(subscriberId)
	const  {position: rankPosition} = await getSubscriberRankingPosition(subscriberId)
	return (
		<div className="gap-3 grid md:grid-cols-3">
			<div className="w-auto relative flex flex-col items-center justify-center h-24.5 bg-gray-700 border rounded-xl border-gray-600">
				<MousePointerClick className="absolute top-3 left-3 text-purple" />
				<span className="text-gray-100 text-2xl font-heading font-semibold">
					{acessCount}
				</span>
				<span className="text-gray-300 text-sm text-center">
					Acessos ao link
				</span>
			</div>
			<div className="w-auto relative flex flex-col items-center justify-center h-24.5 bg-gray-700 border rounded-xl border-gray-600">
				<BadgeCheck className="absolute top-3 left-3 text-purple" />
				<span className="text-gray-100 text-2xl font-heading font-semibold">
					{subsCount}
				</span>
				<span className="text-gray-300 text-sm text-center">
				Inscrições feitas
				</span>
			</div>
			<div className="w-auto relative flex flex-col items-center justify-center h-24.5 bg-gray-700 border rounded-xl border-gray-600">
				<Medal className="absolute top-3 left-3 text-purple" />
				<span className="text-gray-100 text-2xl font-heading font-semibold">
					{rankPosition ? `${rankPosition}°`: '-'}
				</span>
				<span className="text-gray-300 text-sm text-center">
				Posição no ranking
				</span>
			</div>
		</div>
	);
}
