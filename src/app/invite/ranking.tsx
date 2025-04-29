import Image from "next/image";
import cooper from "../../assets/medal-cooper.svg";
import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";

export function Ranking() {
	return (
		<div className="w-full md:w-[30%] md:min-w-62 md:max-w-[430px] space-y-2 md:space-y-5">
			<h2 className="mb-5">Ranking de indicações</h2>
			<div className="relative flex flex-col items-start p-6 justify-center bg-gray-700 border rounded-xl border-gray-600 gap-2">
				<span className="text-gray-300 text-base">
					<span className="font-semibold">1°</span> | André Souza
				</span>
				<span className="text-gray-100 text-2xl font-heading leading-none font-semibold">
					1.128
				</span>
				<Image className="absolute top-0 right-8" src={gold} alt="medal gold" />
			</div>
			<div className="relative flex flex-col items-start p-6 justify-center bg-gray-700 border rounded-xl border-gray-600 gap-2">
				<span className="text-gray-300 text-base">
					<span className="font-semibold">2°</span>| Souza
				</span>
				<span className="text-gray-100 text-2xl font-heading leading-none font-semibold">
					1.28
				</span>
				<Image
					className="absolute top-0 right-8"
					src={silver}
					alt="medal gold"
				/>
			</div>
			<div className="relative flex flex-col items-start p-6 justify-center bg-gray-700 border rounded-xl border-gray-600 gap-2">
				<span className="text-gray-300 text-base">
					<span className="font-semibold">3°</span>| André
				</span>
				<span className="text-gray-100 text-2xl font-heading leading-none font-semibold flex items-center gap-3">
					1.8
					<span className="text-gray-300 border rounded-[6px] text-xs font-semibold bg-gray-500 px-3 py-1">
						You
					</span>
				</span>
				<Image
					className="absolute top-0 right-8"
					src={cooper}
					alt="medal gold"
				/>
			</div>
		</div>
	);
}
