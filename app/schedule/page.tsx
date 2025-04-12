export default function SchedulePage() {

    const schedule: { title: string, time: string, description: string }[] = [
        { title: 'Login to Zoom', time: '9:30', description: 'Make sure you are able to log into zoom prior to the join time and that your setup is working.' },
        { title: 'Introductions', time: '10:00', description: 'Introductions of the staff and students.' },
        { title: 'Speed Round', time: '10:20-11:00', description: '30 questions, 40 minutes' },
        { title: 'Target Round', time: '11:10-11:40', description: '10 questions, 30 minutes (6 min per pair)' },
        { title: 'Lunch', time: '11:40-12:30', description: '' },
        { title: 'Team Round', time: '12:30-1:30', description: '20 questions, 1 hour' },
        { title: 'Fun Activity', time: '1:30-2:00', description: 'TBD, something fun!' },
        { title: 'Awards Ceremony', time: '2:00-2:30', description: '' }
    ]

    return (
        <div className="my-10 w-[95%] lg:w-2/3 p-5 rounded-2xl mx-auto bg-[#111111]">
            <h1 className="text-stone-50 text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">Schedule</h1>
            <div className="h-[1px] bg-stone-400 w-2/3 mx-auto"></div>
            {
                schedule.map((item, index) => (
                    <div key={index} className="my-4 p-4 bg-[#222222] rounded-lg shadow-md">
                        <h2 className="text-[#f4c300] text-xl font-semibold">{item.title}</h2>
                        <p className="text-[#8a8a8d] text-lg">{item.time}</p>
                        <p className="text-[#b1b1b4]">{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}