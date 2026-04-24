<script lang="ts">
	import ExperienceComponent from '$lib/ExperienceComponent.svelte';
	import ProjectComponent from '$lib/ProjectComponent.svelte';
</script>

<div class="mx-auto mx-8 md:mx-2 w-11/12 md:w-full flex flex-col">
	<div class="text-3xl pt-12">Hola, me llamo Levente Orban 👋</div>
	<div class="flex flex-col lg:flex-row lg:items-center mt-16">
		<div class="lg:mr-8 mb-4 lg:mb-0 mx-auto lg:w-1/5">
			<img class="" src="profile.png" alt="profile" />
		</div>
		<div class="lg:w-4/5">
			<p>
				Exfounder based in Hungary. I live at the intersection of product and
				engineering with roots in backend development and hands-on experience in product
				management, cloud infrastructure, and team leadership.
			</p>

			<div class="flex gap-3 mt-4">
				<a href="https://github.com/polaroi8d" target="_blank"
					><img class="w-8" src="social/logo-github.svg" alt="Github profile link" /></a
				>
				<a href="https://www.linkedin.com/in/orbanlevi" target="_blank"
					><img class="w-8" src="social/logo-linkedin.svg" alt="LinkedIn profile link" /></a
				>
				<a href="https://twitter.com/orbanlevi" target="_blank"
					><img class="w-8" src="social/logo-twitter.svg" alt="Twitter profile link" /></a
				>
				<a href="https://dribbble.com/orbanlevi" target="_blank"
					><img class="w-8" src="social/logo-dribbble.svg" alt="Dribbble profile link" /></a
				>
			</div>
		</div>
	</div>

	<div class="my-8">
		<div class="">
			<h2 class="text-xl my-4">TLDR;</h2>
			<p class="text-gray-400">
				Regrettably, one aspect of my extensive experience throughout my career is that I
				consistently transitioned between various technology stacks. I worked for companies where
				deep knowledge wasn't crucial, but problem-solving ability was. This prevented me from
				gaining deep expertise. I consider myself a generalist, someone who has seen a lot, capable
				of examining and solving problems from multiple perspectives, even with the involvement of
				external help. I'm not afraid of new things; I love all aspects of IT, whether it's
				maintaining client relationships, solving people's problems, discussing and solving
				programming or infrastructure issues.
			</p>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Experience</h2>
		<ExperienceComponent
			logo="scolia-logo.png"
			position="Technical Product Lead"
			companyName="Scolia Technologies Ltd."
			companyUrl="https://scoliadarts.com"
			description="Led the 0 to 1 launch of a new product line at Scolia, covering product analysis, customer feedback, team coordination, sales and marketing workflows, and first-customer acquisition. Drove international market expansion planning, represented global customer needs in product decisions, and worked cross-functionally to shape go-to-market strategy."
			skills="technology lead, devops, product management, sales, zero to 1 product launch"
			dateIntervall="2020 december - 2025 december"
		/>

		<ExperienceComponent
			logo="unicredit-logo.jpg"
			position="Infrastructure Engineer (contract)"
			companyName="UniCredit"
			companyUrl="https://unicredit.com"
			description="Helping the company to migrate to a containerized infrastructure, optimizing the CI/CD pipelines, and improving the overall infrastructure."
			skills="containerization, kubernetes, devops, infrastructure, CICD, pipeline optimizations"
			dateIntervall="2022 june - 2025 december"
		/>

		<ExperienceComponent
			logo="dyo.png"
			position="Co-founder"
			companyName="dyrector.io"
			companyUrl="https://dyrectorio.com"
			description="As a co-founder at dyrector.io, my role involved effective cross-team communication to align design, engineering, and customer perspectives. I evaluated user feedback, identifying areas for improvement and discovering new feature opportunities. Overseeing product delivery from concept to launch, I took ownership of all aspects of technology product development, from initial discovery to feature implementation."
			skills="engineering and team management, fundraising, product management, cloud (mainly Azure), kubernetes, customers, tech decisions, open source, operativ stuffs"
			dateIntervall="2020 december - 2025 december"
		/>

		<ExperienceComponent
			logo="sunilium.png"
			position="Product Manager (contract)"
			companyName="Sunilium"
			companyUrl="https://sunilium.com"
			description="In my role as a product manager at Sunilium, I managed products throughout their life cycle, conducting research to understand customer needs. I ensured the business focused on building the right product by developing an overarching product strategy. Defining specifications and requirements, I guided and oversaw the design, development, launch, and marketing of the product."
			skills="product design, UI/UX, strategic thinking, product management, business savvy, figma, customers feedback, project management"
			dateIntervall="2019 june - 2021 december"
		/>

		<ExperienceComponent
			logo="bishop.png"
			position="Software Engineer"
			companyName="Bishop & Co."
			companyUrl="https://bishop-co.com/"
			dateIntervall="2017 june - 2020 december"
			description="At Bishop & Co., a Hungarian company specializing in medical projects, I worked as a backend developer. Contributing to projects like Medipredict, I utilized technologies such as Java and Spring Boot. My responsibilities included implementing new features and optimizing CI/CD flows within the project."
			skills="Java, SpringBoot, Hibernate, AWS, CI/CD, GitLab, Docker, Typescript, Node.JS, PHP"
		/>

		<ExperienceComponent
			logo="szte.png"
			position="Software Developer"
			companyName="SZTE SED"
			companyUrl="https://www.sed.inf.u-szeged.hu/"
			dateIntervall="2016 january - 2017 may"
			description="During my time as a software developer at Szte, I contributed to the development of JerryScript, one of the greatest and fastest JavaScript engines. Collaborating with a senior developer, I focused on creating a debugger client for the engine."
			skills="Embedded Engineering, C, Python, Javascript engine, git"
		/>
	</div>

	<div class="my-8">
		<div class="">
			<h2 class="text-2xl my-4">Certifications</h2>
			<ul class="list-disc ml-8">
				<li>AZ-204 - Azure Developer Associate</li>
				<li>AZ-400 - DevOps Engineer Expert</li>
				<li>ID V117-2012 Lifeguard - Issued by VMSZ (Water Rescue Services of Hungary)</li>
				<li>OWD 5708-H Open Water Diver - Issued by UEF</li>
				<li>AOWD NO-2713011130 Advanced Open Water Diver - Issued by PADI</li>
				<li>L1 Freediver - Issued by Molchanovs @ 2023</li>
				<li>W1 Freediver - Issued by Molchanovs @ 2024</li>
			</ul>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Achivements</h2>
		<div class="">
			<ul class="list-disc ml-8">
				<li class="my-2">
					Hackathon Finalist @ EuroAsian Startup Hackathon - <span class="font-thin"
						>2019 november</span
					>
				</li>
				<p class="text-gray-400">
					Participant and a finalist (3d place among 15 international teams) at a HackMeOut
					international hackathon in Tbilisi, Georgia, as a part of the Euro-Asian Startup Awards
					event; with the team developed a winning platform for education Mentlify, connecting
					students with mentors from the business sector. Participated in a full competition-based
					scholarship from Visegrad Fund, Hungary for outstanding digital leaders.
				</p>
				<li class="my-2 mt-8">
					<a href="https://www.strava.com/activities/9903405512" target="_blank"
						>Winner @ II. SWIM&RUN</a
					>
					- <span class="font-thin">2023 october</span>
				</li>
				<p class="text-gray-400">
					What is SWIM&RUN competition? To provide an opportunity for the general population and
					especially families to engage in sports, encourage them to adopt a healthy lifestyle, and
					involve the recently renovated Maty-éri Olympic Center in recreational sports events in
					recent years. The competition was 500m swim and 5km run, my time was 00:29:34.
				</p>
				<li class="my-2 mt-8">
					<a href="https://www.strava.com/activities/10881428988" target="_blank"
						>2nd place @ III. Martelyi Keringo</a
					>
					- <span class="font-thin">2024 march</span>
				</li>
				<p class="text-gray-400">
					It was a six-hour running race where we participated in teams of two. The relay strategy
					was to switch every hour. We managed to complete a total of 70 laps, which was
					approximately 72 kilometers in total distance.
				</p>
				<li class="my-2 mt-8">
					<a href="https://www.strava.com/activities/14445163942" target="_blank"
						>3nd place @ Triton Trail</a
					>
					- <span class="font-thin">2025 may</span>
				</li>
				<p class="text-gray-400">
					It was a trail running race where we participated in teams of three. There was 2876m
					elevation and 63km overall distance.
				</p>
			</ul>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
			<ProjectComponent
				projectName="Cactoide"
				date="2025"
				description="Cactoide is a federated, mobile-first open-source RSVP platform. It's designed as an alternative to Meetup.com, Eventbrite and Partiful for small companies and groups that want a simple, self-hostable way to organize events without platform lock-in."
				skills="Full-stack, Product Management, Open-source"
			>
				<div class="flex flex-col gap-1">
					<div>
						<span class="font-semibold text-gray-400">Code:</span>
						<a href="https://github.com/polaroi8d/cactoide" target="_blank"
							>github.com/polaroi8d/cactoide</a
						>
					</div>
					<div>
						<span class="font-semibold text-gray-400">Hacker News:</span>
						<a href="https://news.ycombinator.com/item?id=45045116" target="_blank">
							Reached the front page"
						</a>
					</div>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="XOR CNCF Quiz"
				date="2022"
				description="XOR Quiz is a quiz where you have to guess the CNCF project based on its value proposition.
				In the CNCF, each project has a rather elusive one-liner, making it challenging to figure out what the
				project actually does. That's why a colleague and I created a quiz where you have to guess the project
				based on its one-liner and a couple of hints. The plan was to do it overnight, so we started around noon
				on a weekend and had it done and lunch by the next morning. Obviously, the whole thing was a joke."
				skills="Svelte, Typescript, TailwindCSS, Product Management"
			>
				<div>
					<span class="font-semibold text-gray-400">Promotion page:</span>
					<a href="https://www.producthunt.com/products/xor-quiz#xor-quiz" target="_blank"
						>ProductHunt Page</a
					>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="Barbacoa"
				date="2021"
				description="The Barbacoa is an application designed to assist chefs and hobbyists during BBQ cooking.
				We developed the application for a festival where we tried to validate the product's legitimacy.
				My task involves the development of the product design, brainstorming about additional features, and, of course
				creating the UI for the application."
				skills="Product Management, Design, UX/UI, Figma"
			>
				<div>
					<span class="font-semibold text-gray-400">Design:</span>
					<a href="https://dribbble.com/shots/23159030-Barbacoa-BBQ-Mobile-App" target="_blank"
						>Dribble Project</a
					>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="Flamny"
				date="2021"
				description="The idea for the Flamny application originated from a casual conversation among friends. The purpose
				of the application was to simplify cooking-related tasks, including shopping and administrative matters.
				We developed the application with friends, and my responsibilities included designing the interfaces and writing backend code.
				Although we later validated the application, unfortunately, we didn't achieve a strong product-market fit,
				leading us to discontinue the development."
				skills="Typescript, NodeJS, NestJS, Prisma, Gitlab CICD, Product Design, Figma"
			>
				<div>
					<span class="font-semibold text-gray-400">Landing page:</span>
					<a href="https://flamny.hypesync.io/" target="_blank">flamny.hypesync.io</a>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="Helios Platform"
				date="2020"
				description="Helios is an application framework that helps enterprises to manage all of their business applications
				in one place promptly. My task is to collaboratively work with the stakeholders and developers to design the interfaces,
				planning to make the application as user-friendly and easy to use as possible.We completed the project through the Sunilium
				company, and it has been in daily use since then, successfully sold to multiple clients. "
				skills="Product Management, Product Owner, Figma"
			>
				<div>
					<span class="font-semibold text-gray-400">Link:</span>
					<a href="https://sunilium.com/docs/Helios_Platform.pdf" target="_blank"
						>Introductionary Document</a
					>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="Parkela"
				date="2019"
				description="Parkela is designed to solve a parking system, where two applications were designed, and I participated as a
				Product Manager in both. One of them is Parkela City, which is a city parking facilitation application that I designed.
				The project included a parking barrier, the opening and closing of which were managed through the application, allowing
				users to reserve specific parking spaces in advance."
				skills="Design Thinking, Product Management, Leadership, Figma, UX/UI"
			>
				<div>
					<span class="font-semibold text-gray-400">Design:</span>
					<a href="https://dribbble.com/shots/23193559-Parkela-Mobile-Application" target="_blank"
						>Dribble Project</a
					>
				</div>
			</ProjectComponent>

			<ProjectComponent
				projectName="MyAux"
				date="2018"
				description="MyAux is a Q&A mobile app with income opportunity.
				The application aimed to address the gap that exists where there are experts in various fields,
				but it's difficult to reach them. Through the application, users could search for and connect with knowledgeable individuals in different domains,
				asking them questions. Experts could earn money by providing answers.
				My task was to develop the product in close collaboration with the owners and continuously iterate on the design."
				skills="Design, UX/UI, Sketch, Adobe XD"
			/>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Podcasts & Articles</h2>
		<div class="">
			<ul class="list-disc ml-8">
				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://www.youtube.com/watch?v=ZU6ql5Wlcs0"
					target="_blank"
					><li class="mt-4">
						FollowThePattern Podcast - Cégalapítás nyílt forráskódú termékkel | Orbán Levente | EP4
					</li></a
				>
				<span class="font-light text-white pl-4">
					Podcast | Language: Hungarian | Released: 2023 October</span
				>
				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://www.youtube.com/watch?v=stT00fK58Hk"
					target="_blank"
					><li class="mt-4">
						CodeYardFactory Stream - "A Software Development Lifecycle-t megfeleltettük a
						filmkészítéssel" - Orbán Levente @ dyrector.io
					</li></a
				>
				<span class="font-light text-white pl-4">
					Podcast | Language: Hungarian | Released: 2023 May</span
				>
				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://www.youtube.com/watch?v=XrTYFEXsguo"
					target="_blank"
					><li class="mt-4">
						Őrültech Podcast - Sose voltunk még ennyire tech - vendégünk: Orbán Levente
					</li></a
				>
				<span class="font-light text-white pl-4">
					Podcast | Language: Hungarian | Released: 2022 December</span
				>

				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://www.yumpu.com/hu/document/read/66027546/computerworld-magazin-20211201-lii-evfolyam-23-szam/16"
					target="_blank"><li class="mt-4">ComputerWorld - Egyszerűsítés a felhőben</li></a
				>
				<span class="font-light text-white pl-4">
					Article | Language: Hungarian | Released: 2021 December</span
				>

				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://24.hu/tech/2021/09/30/web-summit-magyar-startup-dyrector-io/"
					target="_blank"
					><li class="mt-4">
						Magyar startup is lesz a világ egyik legnagyobb technológiai rendezvényén
					</li></a
				>
				<span class="font-light text-white pl-4">
					Article | Language: Hungarian | Released: 2021 September</span
				>

				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://u-szeged.hu/sztehirek/2019-november/otletversenyt-tartottak"
					target="_blank"><li class="mt-4">Ötletversenyt tartottak a szegedi egyetemen</li></a
				>
				<span class="font-light text-white pl-4">
					Article | Language: Hungarian | Released: 2019 November</span
				>
			</ul>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Hobbies</h2>
		<div class="">
			<ul class="list-disc ml-8">
				<li class="mt-4">
					Founder & Organizer @
					<a href="https://szegedsync.hu/" target="_blank">szegedsync</a>
				</li>
				<p class="text-gray-400">
					Szegedsync is a next generation tech meetup series in Szeged focused on real-world
					software, product, and AI topics. We bring together local engineers, product people, and
					tech enthusiasts for talks, workshops, and community building.
				</p>
				<li class="mt-4">
					Organizer @ <a href="https://kcdbudapest.hu/" target="_blank">KCD Budapest 2025</a>
				</li>
				<p class="text-gray-400">
					KCD is a CNCF supported event that takes place in 30 cities every year. You may have
					attended KCDs before in neighboring countries, but finally KCD is coming to Budapest for
					us to enjoy a day together in the local cloud native community.
				</p>
				<li class="mt-4">
					Organizer @ <a href="https://www.meetup.com/cloud-native-szeged/" target="_blank"
						>Cloud Native Szeged Meetup</a
					>
				</li>
				<p class="text-gray-400">
					Cloud Native Meetup is a series of meetups in Szeged, where we aim to host awesome talks
					about cloud technologies such as Kubernetes, GitOps, DevOps, and related topics. One of my
					friends initiated the entire movement, and I joined later on. We have organized more than
					8 events in different companies, with our goal being to achieve around 30 participants in
					every meetup. After the talks, we always had time to enjoy pizza, drink beer, and, of
					course, chat about our work and the topics that we love.
				</p>
				<li class="mt-4">
					Founder @ <a href="https://zenoazurben.hu/" target="_blank">Zénó az űrben</a> Foundation
					(initiative)
					<p class="text-gray-400">
						We started before Christmas in 2021 with my wife; we created a donations where we tried
						to make Christmas more beautiful for children who spent the holidays in foster care.
						Later, we organized several more donations, and more people joined us. In total, we
						carried out more than 5 drives and brought smiles to the faces of numerous children. We
						collected more than 5.000 EUR for childrens.
					</p>
				</li>
				<li class="mt-4">
					Multiple <a href="https://www.balaton-atuszas.hu/en/" target="_blank">Balaton-átúszás</a> swimmers
					(5.2km)
				</li>
				<p class="text-gray-400">
					The 5.2 km long Lake Balaton swim, which has become a tradition since 1983, is an annual
					summer sports event held on the first Saturday of July. Participants in the competition
					undertake to swim across the 5.2 km section between Balaton Révfülöp and Balatonboglár.
				</p>
				<li class="mt-4">
					Half-marathon runner <a
						href="https://www.strava.com/activities/12971137764/overview"
						target="_blank"
					>
						>>> PB 01:33:58 @ Pace: 4:24 min/km</a
					>
					<p class="text-gray-400">
						My initial goal is to run at least 100 km per month and complete at least one
						half-marathon every month. I'm doing it since 2022 October. You can follow me or just
						check my runs on my <a
							href="https://www.strava.com/activities/11026454769"
							target="_blank">Strava</a
						> profile.
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Contact</h2>
		<div class="">
			<ul class="list-disc ml-8">
				<li class="mt-4">leventeorb[at]gmail.com</li>
			</ul>
		</div>
	</div>

	<div class="my-8">
		<h2 class="text-2xl my-4">Life</h2>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 w-10/12 mx-auto"
		>
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages01.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages02.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages03.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages04.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages05.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages06.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages07.png" alt="image" />
			<img class="drop-shadow-2xl rounded-md" src="life/lifeImages08.png" alt="image" />
		</div>
	</div>

	<div class="py-4 flex justify-end text-gray-500">
		Protect the environment, this is an online CV / portfolio site, please do not print it. Build
		with Svelte and hosting by Netlify.
	</div>
</div>
