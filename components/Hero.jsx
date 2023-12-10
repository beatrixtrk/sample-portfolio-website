import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
	RiBriefcase4Fill,
	RiTeamFill,
	RiTodoFill,
	RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
	return (
		<section className="py-24 lg:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-8">
					<div className="felx max-w-[600px] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
						<div className="text-sm font-semibold uppercase mb-2 tracking-[4px]">
							Junior
						</div>
						<div className="text-sm font-semibold uppercase mb-4 text-primary tracking-[4px]">
							Frontend Developer
						</div>
						<h1 className="h1 mb-4">
							Hello, my name is{" "}
							<span className="text-primary">Jane</span> Doe
						</h1>
						<p className="subtitle max-w-[490px] mx-auto lg:mx-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<div className="flex flex-col gap-y-3 justify-center lg:justify-start md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
							<Link href="/contact">
								<Button className="gap-x-2">
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Button
								variant="secondary"
								className="gap-x-2 max-w-[166px] mx-auto md:mx-0 "
							>
								Download CV <Download size={18} />
							</Button>
						</div>
						<Socials
							containerStyles="flex justify-center lg:justify-start gap-x-6 mx-auto lg:mx-0"
							iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
						/>
					</div>
					<div className="hidden lg:flex relative">
						<Badge
							containerStyles="absolute top-0 -left-[5rem]"
							icon={<RiBriefcase4Fill />}
							endCountNum={6}
							badgeText="Years Of Experience"
						/>
						<div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[400px] h-[400px] bg-contain bg-no-repeat absolute -top-1 -right-2"></div>
						<DevImg
							containerStyles="bg-hero_shape w-[410px] h-[362px] bg-no-repeat bg-contain relative bg-botttom"
							imgSrc="/hero/developer.png"
						/>
					</div>
				</div>
				<div className="hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
					<RiArrowDownSLine className="text-3xl text-primary" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
