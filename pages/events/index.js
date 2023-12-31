import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage() {
	const events = getAllEvents();

	return (
		<>
			<EventSearch />
			<EventList events={events} />
		</>
	);
}

export default AllEventsPage;
