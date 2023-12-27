import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<>
			<EventList events={events} />
		</>
	);
}

export default AllEventsPage;
