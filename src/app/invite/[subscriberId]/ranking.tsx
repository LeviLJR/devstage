import Image from "next/image";
import cooper from "../../../assets/medal-cooper.svg";
import gold from "../../../assets/medal-gold.svg";
import silver from "../../../assets/medal-silver.svg";
import { getRanking } from "@/http/api";

export async function Ranking() {
	const {ranking} = await getRanking()
	return (
		<div className="w-full md:w-[30%] md:min-w-62 md:max-w-[430px] space-y-2 md:space-y-5">
			<h2 className="mb-5">Ranking de indicações</h2>
			<div className=" space-y-4">
				{ranking.map((item,index) => {
					const rankPosition = index+1
					return(
						<div key={item.id} className="relative flex flex-col items-start p-6 justify-center bg-gray-700 border rounded-xl gap-2 border-gray-600">
							<span className="text-gray-300 text-base">
								<span className="font-semibold">{rankPosition}°</span> | {item.name}
							</span>
							<span className="text-gray-100 text-2xl font-heading leading-none font-semibold">
								{item.score}
							</span>
							{rankPosition === 1 && <Image className="absolute top-0 right-8" src={gold} alt="medal gold" />}
							{rankPosition === 2 && <Image className="absolute top-0 right-8" src={silver} alt="medal silver" />}
							{rankPosition === 3 && <Image className="absolute top-0 right-8" src={cooper} alt="medal cooper" />}
						
						</div>
					)
				})}
			</div>
			
			
		</div>
	);
}
