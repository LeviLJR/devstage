import { Mail } from "lucide-react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// interface InputProps extends ComponentProps<'input'> {
//     error?: boolean
// }

// export function Input({error = false , ...props}: InputProps){
//     return (
//         // focus-within:border-danger
//         <div
//             data-error={error}
//             className="group bg-gray-800 h-12 border border-gray-600
//             focus-within:border-gray-100s
//             rounded-xl flex items-center px-4 gap-3 data-[error=true]:border-danger
//             not-[:has(input:placeholder-shown)]:data-[error=true]:border-danger"
//             >
//             <span className="text-gray-400 group-focus-within:text-gray-100
//             group-[&:not(:has(input:placeholder-shown))]:text-gray-100
//             group-data-[error=true]:text-danger
//             group-data-[error=true]:[&:not(:has(input:placeholder-shown))]:text-danger
//             ">
//                 <Mail/>
//             </span>
//             <input
//                 className="placeholder-gray-400 text-gray-100 outline-0 flex-1 "
//                 {...props}
//             />
//         </div>
//     )

// }

interface InputRootProps extends ComponentProps<"div"> {
	error?: boolean;
}

export function InputRoot({
	error = false,
	className,
	...props
}: InputRootProps) {
	return (
		<div
			data-error={error}
			className={twMerge(
				"group bg-gray-800 h-12 border border-gray-600 focus-within:border-gray-100 not-[:has(input:placeholder-shown)]:border-gray-100 rounded-xl flex items-center px-4 gap-3 data-[error=true]:border-danger not-[:has(input:placeholder-shown)]:data-[error=true]:border-danger",
				className,
			)}
			{...props}
		/>
	);
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
	return (
		<span
			className="text-gray-400 group-focus-within:text-gray-100 
            group-[&:not(:has(input:placeholder-shown))]:text-gray-100 
            group-data-[error=true]:text-danger
            group-data-[error=true]:[&:not(:has(input:placeholder-shown))]:text-danger
            "
			{...props}
		/>
	);
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
	return (
		<input
			className="placeholder-gray-400 text-gray-100 outline-0 flex-1 "
			{...props}
		/>
	);
}
