import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<>
			<h1>Home Page</h1>
			<EventList events={featuredEvents} />
		</>
	);
}

export default HomePage;
