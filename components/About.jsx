import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	User2,
	MailIcon,
	HomeIcon,
	PhoneCall,
	GraduationCap,
	Calendar,
	Briefcase,
} from "lucide-react";

const infoData = [
	{
		icon: <User2 size={20} />,
		text: "Jane Doe",
	},
	{
		icon: <PhoneCall size={20} />,
		text: "+12 34 567 8910",
	},
	{
		icon: <MailIcon size={20} />,
		text: "jane.doe@email.com",
	},
	{
		icon: <Calendar size={20} />,
		text: "Born on 1 Jan, 1993",
	},
	{
		icon: <HomeIcon size={20} />,
		text: "Zug, Switzerland",
	},
];

const qualificationData = [
	{
		title: "education",
		data: [
			{
				university: "CodeCamp",
				qualification: "JavaScript Developer Essential Training",
				year: "2023",
			},
			{
				university: "University of Example",
				qualification: "Bachelor of Business Information Technologist",
				year: "2018",
			},
		],
	},
	{
		title: "experience",
		data: [
			{
				company: "ABC Inc.",
				position: "Sitebuilder",
				year: "2018 - 2019",
			},
			{
				company: "XYZ Corporation",
				position: "Sitebuilder",
				year: "2019 - 2022",
			},
			{
				company: "Tech Innovators",
				position: "Junior Frontend Developer",
				year: "2022 - Present",
			},
		],
	},
];

const skillData = [
	{
		title: "skills",
		data: [
			{
				name: "HTML & CSS",
			},
			{
				name: "CSS Preprocessors",
			},
			{
				name: "Bootstrap",
			},
			{
				name: "JavaScript",
			},
			{
				name: "React",
			},
			{
				name: "Tailwind",
			},
			{
				name: "Git and Version Control",
			},
			{
				name: "Visual Studio Code",
			},
			{
				name: "Content Management Systems",
			},
			{
				name: "Responsive Website Building",
			},
			{
				name: "Figma",
			},
			{
				name: "Problem Solving",
			},
			{
				name: "Time Management and Priorization",
			},
			{
				name: "Adaptability and Flexibility",
			},
			{
				name: "Continuous Learning and Improvement",
			},
			{
				name: "Patience and Perseverance",
			},
		],
	},
	{
		title: "tools",
		data: [
			{
				imgPath: "/about/vscode.svg",
			},
			{
				imgPath: "/about/figma.svg",
			},
			{
				imgPath: "/about/notion.svg",
			},
			{
				imgPath: "/about/wordpress.svg",
			},
		],
	},
];

const About = () => {
	const getData = (arr, title) => {
		return arr.find((item) => item.title === title);
	};
	return (
		<section className="lg:min-h-[100vh] pb-12 lg:py-24">
			<div className="container mx-auto">
				<h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
					About me
				</h2>
				<div className="flex flex-col lg:flex-row gap-x-20">
					<div className="hidden lg:flex flex-initial relative">
						<div className="bg-about_shape_light dark:bg-about_shape_dark w-[405px] h-[405px] bg-no-repeat bg-contain relative" />
						{/* <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[405px] h-[405px] bg-no-repeat bg-contain relative' imgSrc=''/> */}
					</div>
					<div className="flex-auto">
						<Tabs defaultValue="personal">
							<TabsList className="w-full grid p-[4px] lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
								<TabsTrigger
									className="w-[162px] lg:w-auto"
									value="personal"
								>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] lg:w-auto"
									value="qualification"
								>
									Qualifications
								</TabsTrigger>
								<TabsTrigger
									className="w-[162px] lg:w-auto"
									value="skills"
								>
									Skills
								</TabsTrigger>
							</TabsList>
							<div className="text-lg mt-12 lg:mt-8">
								{/* Personal tab */}
								<TabsContent value="personal">
									<div className="tetx-center lg:text-left">
										<h3 className="h3 mb-4 max-w-xl mx-auto">
											Over 6 years experience
										</h3>
										<p className="subtitle max-w-xl mx-auto lg:mx-0">
											As an enthusiastic junior frontend
											developer, I am eager to engage in
											innovative and challenging projects.
											My passion is to creat and enhanc
											unique digital experiences for users
											in the online space. I am adaptable
											and a quick learner, always open to
											exploring new technologies and
											methodologies.
										</p>
										<div className="grid lg:grid-cols-2 gap-4 mb-12">
											{infoData.map((item, index) => {
												return (
													<div
														className="flex items-center gap-x-4 mx-auto lg:mx-0"
														key={index}
													>
														<div className="text-primary">
															{item.icon}
														</div>
														<div>{item.text}</div>
													</div>
												);
											})}
										</div>
										<div className="flex flex-col gap-y-4">
											<div className="text-primary">
												Language Skill
											</div>
											<div className="border-b border-border"></div>
											<div>English</div>
										</div>
									</div>
								</TabsContent>
								{/* Qualification tab */}
								<TabsContent value="qualification">
									<div>
										<h3 className="h3 mb-4">
											My Awesome Journey
										</h3>
										<div className="grid md:grid-cols-2 gap-y-8">
											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<Briefcase />
													<h4 className="capitalize font-medium">
														{
															getData(
																qualificationData,
																"experience"
															).title
														}
													</h4>
												</div>
												<div className="flex flex-col gap-y-8">
													{getData(
														qualificationData,
														"experience"
													).data.map(
														(item, index) => {
															const {
																company,
																position,
																year,
															} = item;
															return (
																<div
																	className="flex gap-x-8 group "
																	key={index}
																>
																	<div className="h-[84px] w-[1px] bg-border relative ml-3">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{
																				company
																			}
																		</div>
																		<div className="text-lg leading-none text-muted-foreground mb-4">
																			{
																				position
																			}
																		</div>
																		<div className="text-base font-medium">
																			{
																				year
																			}
																		</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>

											<div className="flex flex-col gap-y-6">
												<div className="flex gap-x-4 items-center text-[22px] text-primary">
													<GraduationCap />
													<h4 className="capitalize font-medium">
														{
															getData(
																qualificationData,
																"education"
															).title
														}
													</h4>
												</div>
												<div className="flex flex-col gap-y-8">
													{getData(
														qualificationData,
														"education"
													).data.map(
														(item, index) => {
															const {
																university,
																qualification,
																year,
															} = item;
															return (
																<div
																	className="flex gap-x-8 group "
																	key={index}
																>
																	<div className="h-[84px] w-[1px] bg-border relative ml-3">
																		<div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
																	</div>
																	<div>
																		<div className="font-semibold text-xl leading-none mb-2">
																			{
																				university
																			}
																		</div>
																		<div className="text-lg leading-none text-muted-foreground mb-4">
																			{
																				qualification
																			}
																		</div>
																		<div className="text-base font-medium">
																			{
																				year
																			}
																		</div>
																	</div>
																</div>
															);
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								{/* Skills tab */}
								<TabsContent value="skills">
									<div className="text-center xl:text-left">
										<h3 className="h3 mb-8">
											What I Use Everyday
										</h3>
										<div className="mb-16">
											<h4 className="text-xl font-semibold mb-2">
												Skills
											</h4>
											<div className="border-b border-border mb-4"></div>
											<div className="grid lg:grid-cols-2 mb-16">
												{getData(
													skillData,
													"skills"
												).data.map((item, index) => {
													const { name } = item;
													return (
														<div
															className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
															key={index}
														>
															<div className="font-medium">
																{name}
															</div>
														</div>
													);
												})}
											</div>
										</div>
										<div className="mb-16">
											<h4 className="text-xl font-semibold mb-2">
												Tools
											</h4>
											<div className="border-b border-border mb-4"></div>
											<div className="flex gap-x-8 justify-center xl:justify-start mb-16">
												{getData(
													skillData,
													"tools"
												).data.map((item, index) => {
													const { imgPath } = item;
													return (
														<div key={index}>
															<Image
																src={imgPath}
																width={48}
																height={48}
																alt=""
																priority
															/>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
