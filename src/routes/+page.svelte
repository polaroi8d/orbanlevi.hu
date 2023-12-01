<script>
	import ExperienceComponent from '$lib/ExperienceComponent.svelte';
	import ProjectComponent from '$lib/ProjectComponent.svelte';
</script>

<div class="mx-auto w-11/12">
	<div class="text-3xl pt-12">Hola, me llamo Levente Orban 👋</div>
	<div class="flex flex-col lg:flex-row mt-16">
		<div class="lg:mr-8 mb-4 lg:mb-0 mx-auto lg:w-1/5">
			<img class="" src="profile.png" alt="profile" />
		</div>
		<div class="lg:w-4/5">
			<p>
				I'm a software engineer / product manager from Hungary. Currently working on
				<a class="font-bold" href="https://github.com/dyrector-io/dyrectorio" target="_blank"
					>dyrector.io</a
				>
				which is an open-source self-hosted container management platform. Id consectetur quis commodo
				minim labore excepteur in. Do nostrud fugiat nostrud adipisicing cillum aliqua duis do anim est
				labore enim magna. Reprehenderit dolor cupidatat nisi labore. Duis ea ea officia commodo do mollit.
				Deserunt aute esse aute magna ut in esse deserunt ex elit. Incididunt irure labore velit voluptate
				deserunt nostrud aute. Exercitation ut proident est aliquip consectetur.
			</p>
			<p class="pt-2">
				Cillum labore in commodo non proident ullamco. In laborum velit pariatur elit qui ad eu
				nulla qui eiusmod ullamco laborum. Pariatur laborum ex eiusmod ad exercitation consectetur
				consequat cillum eiusmod laborum cupidatat ex. Irure incididunt eu consequat consequat
				proident minim sint nisi minim. Cupidatat tempor esse aliqua. Ipsum sit ex consequat in in
				enim laboris laborum. Adipisicing deserunt ad ea nisi cupidatat consectetur id pariatur
				mollit duis enim.
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
		<h2 class="text-2xl my-4">Experience</h2>
		<ExperienceComponent
			logo="dyo.png"
			position="Co-founder"
			companyName="dyrector.io"
			companyUrl="https://dyrectorio.com"
			description="My responsibilities are to communicate effectively across teams to create alignment between
    design, engineering and customers. Evaluate user feedback and improvement areas to identify
    new feature opportunities that will guide our roadmap. Own product delivery from initial
    concept through design, launch, and customer adoption. Responsible for all aspects of
    technology product development including discovery, requirements gathering, development, and
    implementation of features."
			skills="team management, fundraising, product management, cloud, customer, sales, coding"
			dateIntervall="2020 december - present"
		/>

		<ExperienceComponent
			logo="sunilium.png"
			position="Product Manager"
			companyName="Sunilium"
			companyUrl="https://sunilium.com"
			description="Responsible for managing and guiding a product through its entire life cycle, conducts research to figure out what customers/end users want from a product, ensuring that the business is building the right thing. Develop an overarching product strategy, define product specifications and requirements, and guide and oversee the design, development, launch, and marketing of the product."
			skills="product design, UI/UX, strategic thinking,  project management, business savvy"
			dateIntervall="2019 june - 2021 december"
		/>

		<ExperienceComponent
			logo="bishop.png"
			position="Software Engineer"
			companyName="Bishop & Co."
			companyUrl="https://bishop-co.com/"
			dateIntervall="2017 june - 2020 december"
			description="Bishop & Co. is a relatively small company in Hungary that focuses on medical projects. I
    mainly work as a backend developer on projects such as Medipredict, using technologies like
    Java and Spring Boot. My responsibility is to implement new features and optimize the CI/CD
    flows in the project."
			skills="Java, SpringBoot, Hibernate, AWS, CI/CD, GitLab, Docker, Typescript, Node.JS, PHP"
		/>

		<ExperienceComponent
			logo="szte.png"
			position="Software Developer"
			companyName="SZTE SED"
			companyUrl="https://www.sed.inf.u-szeged.hu/"
			dateIntervall="2016 january - 2017 may"
			description="Worked on one of the greatest and fastest javascript engine, JerryScript. My responsibility
  to make a debugger client to the engine with a senior developer."
			skills="Embedded Engineering, C, Python, Javascript engine"
		/>
	</div>

	<div class="my-16">
		<div class="mt-16">
			<h2 class="text-2xl my-4">Certifications</h2>
			<ul class="list-disc ml-8">
				<li>AZ-204 - Azure Developer Associate</li>
				<li>AZ-400 - DevOps Engineer Expert</li>
				<li>ID V117-2012 Lifeguard - Issued by VMSZ (Water Rescue Services of Hungary)</li>
				<li>OWD 5708-H Open Water Diver - Issued by UEF</li>
				<li>AOWD NO-2713011130 Advanced Open Water Diver - Issued by PADI</li>
				<li>L1 Freediver - Issued by Molchanovs</li>
			</ul>
		</div>
	</div>

	<div class="my-16">
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
					Age-group Winner @ II. SWIM&RUN - <span class="font-thin">2023 october</span>
				</li>
				<p class="text-gray-400">
					What is SWIM&RUN competition? To provide an opportunity for the general population and especially families to engage in
					sports, encourage them to adopt a healthy lifestyle, and involve the recently renovated
					Maty-éri Olympic Center in recreational sports events in recent years.
				</p>
			</ul>
		</div>
	</div>

	<div class="my-16">
		<h2 class="text-2xl my-4">Projects</h2>
		<div class="flex flex-wrap gap-4 justify-center">
			<ProjectComponent
				projectName="XOR Quiz"
				date="2022"
				description="XOR Quiz is a quiz where you have to guess the CNCF project based on its value proposition."
				skills="Svelte, Typescript"
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
				description="Laborum consequat quis ipsum in ullamco fugiat do non veniam esse ad excepteur. Lorem proident nisi exercitation elit esse exercitation dolore ex non dolore id nisi exercitation cillum. Consectetur amet id ipsum voluptate Lorem velit culpa est anim aliquip in cupidatat duis. Commodo voluptate proident nostrud. Eu tempor nisi culpa veniam cillum dolore reprehenderit non id fugiat. Tempor culpa ullamco tempor eu proident quis aliquip reprehenderit anim enim. Labore duis duis duis reprehenderit quis fugiat consectetur qui laboris dolore magna qui."
				skills="C++"
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
				description="Laborum consequat quis ipsum in ullamco fugiat do non veniam esse ad excepteur. Lorem proident nisi exercitation elit esse exercitation dolore ex non dolore id nisi exercitation cillum. Consectetur amet id ipsum voluptate Lorem velit culpa est anim aliquip in cupidatat duis. Commodo voluptate proident nostrud. Eu tempor nisi culpa veniam cillum dolore reprehenderit non id fugiat. Tempor culpa ullamco tempor eu proident quis aliquip reprehenderit anim enim. Labore duis duis duis reprehenderit quis fugiat consectetur qui laboris dolore magna qui."
				skills="C++"
			>
      <div>
        <span class="font-semibold text-gray-400">Landing page:</span>
        <a href="https://flamny.hypesync.io/" target="_blank"
          >flamny.hypesync.io</a
        >
      </div>
    </ProjectComponent>

			<ProjectComponent
				projectName="Helios Platform"
				date="2020"
				description="Laborum consequat quis ipsum in ullamco fugiat do non veniam esse ad excepteur. Lorem proident nisi exercitation elit esse exercitation dolore ex non dolore id nisi exercitation cillum. Consectetur amet id ipsum voluptate Lorem velit culpa est anim aliquip in cupidatat duis. Commodo voluptate proident nostrud. Eu tempor nisi culpa veniam cillum dolore reprehenderit non id fugiat. Tempor culpa ullamco tempor eu proident quis aliquip reprehenderit anim enim. Labore duis duis duis reprehenderit quis fugiat consectetur qui laboris dolore magna qui."
				skills="C++"
			/>

			<ProjectComponent
				projectName="MyAux"
				date="2018"
				description="MyAux is a Q&A mobile app with income opportunity. Change your world by using your
        phone. My responsibility was to design the UX & UI for the mobile app and show the path by the design. "
				skills="C++"
			/>
		</div>
	</div>

	<div class="my-16">
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
					Language: Hungarian | Released: 2023 October</span
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
				<span class="font-light text-white pl-4"> Language: Hungarian | Released: 2023 May</span>
				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://www.youtube.com/watch?v=XrTYFEXsguo"
					target="_blank"
					><li class="mt-4">
						Őrültech Podcast - Sose voltunk még ennyire tech - vendégünk: Orbán Levente
					</li></a
				>
				<span class="font-light text-white pl-4">
					Language: Hungarian | Released: 2021 December</span
				>
				<a
					class="text-blue-400 hover:text-blue-800"
					href="https://u-szeged.hu/sztehirek/2019-november/otletversenyt-tartottak"
					target="_blank"><li class="mt-4">Ötletversenyt tartottak a szegedi egyetemen</li></a
				>
				<span class="font-light text-white pl-4">
					Language: Hungarian | Released: 2019 November</span
				>
			</ul>
		</div>
	</div>

	<div class="my-16">
		<h2 class="text-2xl my-4">Hobbies</h2>
		<div class="">
			<ul class="list-disc ml-8">
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
					Half-marathon runner (sub 01:45:00)
					<p class="text-gray-400">
						My initial goal is to run at least 100 km per month and complete at least one
						half-marathon every month. I'm doing it since 2022 October. You can follow me or just
						check my runs on my <a href="https://www.strava.com/athletes/30645198" target="_blank"
							>Strava</a
						> profile.
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="my-16">
		<h2 class="text-2xl my-4">Contact</h2>
		<div class="">
			<ul class="list-disc ml-8">
				<li class="mt-4">email: leventeorb[@]gmail.com</li>
			</ul>
		</div>
	</div>

	<div class="my-16">
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

	<div class="py-4 flex justify-end">
		Protect the environment, this is an online CV / portfolio site, plase do not print it.
	</div>
</div>