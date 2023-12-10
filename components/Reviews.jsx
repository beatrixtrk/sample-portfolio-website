"use client";

import Image from "next/image";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Autoplay, Pagination } from "swiper/modules";

const reviewsData = [
	{
		avatar: "/reviews/avatar-1.png",
		name: "Richard Thomson",
		job: "Chef",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
	{
		avatar: "/reviews/avatar-2.png",
		name: "Evelyn Anderson",
		job: "Interion Designer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
	{
		avatar: "/reviews/avatar-3.png",
		name: "John Doe",
		job: "Game Dev",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
	{
		avatar: "/reviews/avatar-4.png",
		name: "Emily Smith",
		job: "Therapist",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
	{
		avatar: "/reviews/avatar-5.png",
		name: "Oliver Taylor",
		job: "Engineer",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
	{
		avatar: "/reviews/avatar-6.png",
		name: "Mason Wilson",
		job: "Video Editor",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dignissimos!",
	},
];

const Reviews = () => {
	return (
		<section className="mb-12 xl:mb-32">
			<div className="container max-auto">
				<h2 className="section-title mb-12 text-center mx-auto">
					Reviews
				</h2>
				<Swiper
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1400: { slidesPerView: 3 },
					}}
					spaceBetween={30}
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 2500,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
					className="h-[350px]"
				>
					{reviewsData.map((person, index) => {
						return (
							<SwiperSlide key={index}>
								<Card className="bg-[#f2edf2] dark:bg-secondary/40 p-8 min-h-[300px]">
									<CardHeader className="p-0 mb-10">
										<div className="flex items-center gap-x-4">
											<Image
												src={person.avatar}
												width={70}
												height={70}
												alt=""
												priority
											/>
										</div>
										<div className="flex flex-col">
											<CardTitle>{person.name}</CardTitle>
											<p>{person.job}</p>
										</div>
									</CardHeader>
									<CardDescription className="text-lg text-muted-foreground">
										{person.description}
									</CardDescription>
								</Card>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Reviews;
