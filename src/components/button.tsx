import { type ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
	return (
		<button
			className="flex items-center justify-between bg-gray-500 text-blue font-semibold rounded-xl h-12 px-5 w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/>
	);
}
