"use client";
import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { subscribeToEvent } from "../../http/api";
import { useRouter, useSearchParams } from "next/navigation";

const subscriptionSchema = z.object({
	name: z.string().min(2, "Enter your full name"),
	email: z.string().email("Please enter a valid email address"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscriptionSchema>({
		resolver: zodResolver(subscriptionSchema),
	});

	async function onSubscribe({name, email}: SubscriptionSchema) {
		const referrer =  searchParams.get('referrer')
		const {subscriberId} = await subscribeToEvent({name, email, referrer})
		router.push(`/invite/${subscriberId}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubscribe)}
			className="flex flex-col md:w-[35vw] md:max-w-[441px] md:min-w-xs gap-6 justify-between bg-gray-700 border-gray-600 rounded-2xl border p-8"
		>
			<h2 className="text-xl font-heading font-semibold">Registration</h2>
			<div className="flex flex-col gap-3">
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<User size={20} />
						</InputIcon>
						<InputField
							type="text"
							placeholder="Full name"
							{...register("name")}
						/>
					</InputRoot>
					{errors.name && (
						<p className="text-danger text-xs font-semibold">
							{errors.name.message}
						</p>
					)}
				</div>
				<div className="space-y-2">
					<InputRoot>
						<InputIcon>
							<Mail size={20} />
						</InputIcon>
						<InputField
							type="email"
							placeholder="E-mail"
							{...register("email")}
						/>
					</InputRoot>
					{errors.email && (
						<p className="text-danger text-xs font-semibold">
							{errors.email.message}
						</p>
					)}
				</div>
			</div>
			<Button type="submit">
				Confirm
				<ArrowRight size={20} />
			</Button>
		</form>
	);
}
