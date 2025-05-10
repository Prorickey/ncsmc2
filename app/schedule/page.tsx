export default function SchedulePage() {
	const schedule: { title: string; time: string; description: string }[] = [
		{
			title: "Login to Zoom",
			time: "9:30",
			description:
				"Make sure you are able to log into zoom prior to the join time and that your setup is working."
		},
		{
			title: "Introductions",
			time: "10:00",
			description: "Introductions of the staff and students."
		},
		{
			title: "Speed Round",
			time: "10:20-11:00",
			description:
				"The speed round consists of 30 problems, where participants are given 40 minutes to solve them all. This round is very fast-paced and requires speed and accuracy as well, with later questions increasing in difficulty. All answers are integers and are short-answer form. Every question will be worth 1 point, and there is no penalty for incorrect answers and no bonus for leaving a question blank. No calculators will be allowed, but scratch paper, pencils, and rulers are permitted. "
		},
		{
			title: "Accuracy Round",
			time: "11:10-11:50",
			description:
				"This round consists of 10 total questions, and lasts a total of 40 minutes. Each question is worth 2 points, and leaving a question blank does not yield extra points, nor do wrong answers receive any penalties. Participants will spend 6 minutes on the first two questions, the next 6 on the next two, and so on for all 5 pairs of questions, with a minute leeway between rounds."
		},
		{ title: "Lunch", time: "11:50-12:30", description: "" },
		{
			title: "Team Round",
			time: "12:45-1:45",
			description: "20 questions, 1 hour"
		},
		{
			title: "Optional Fun Activity / Disputes",
			time: "1:45-2:45",
			description:
				"TBD, something fun! Disputes need to be submitted by 2:00"
		},
		{ title: "Awards Ceremony", time: "2:45-3:15", description: "" }
	]

	return (
		<div className="my-10 w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
			<h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
				Schedule
			</h1>
			<p className="w-full text-center text-xl pb-1">
				Competition on Saturday, May 10th
			</p>
			<div className="h-[1px] bg-stone-400 w-2/3 mx-auto"></div>
			{schedule.map((item, index) => (
				<div
					key={index}
					className="my-4 p-4 bg-[#222222] rounded-lg shadow-md">
					<h2 className="text-[#f4c300] text-xl font-semibold">
						{item.title}
					</h2>
					<p className="text-[#8a8a8d] text-lg">{item.time}</p>
					<p className="text-[#b1b1b4]">{item.description}</p>
				</div>
			))}
		</div>
	)
}
