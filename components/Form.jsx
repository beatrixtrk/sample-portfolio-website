"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";
const Form = () => {
	return (
		<form className="flex flex-col gap-y-4">
			<div className="relative flex itemd-center">
				<Input type="name" id="name" placeholder="Name" />
				<User className="absolute top-4 right-6" size={20} />
			</div>
			<div className="relative flex itemd-center">
				<Input type="email" id="email" placeholder="Email" />
				<MailIcon className="absolute top-4 right-6" size={20} />
			</div>
			<div className="relative flex itemd-center">
				<Textarea placeholder="Message" />
				<MessagesSquare className="absolute top-4 right-6" size={20} />
			</div>
			<Button className="flex items-center gap-x-1 max-w-[166px]">
				Let's talk
				<ArrowRightIcon size={20} />
			</Button>
		</form>
	);
};

export default Form;
