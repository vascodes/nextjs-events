import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";

function FilteredEventsPage() {
	const router = useRouter();
	const slug = router.query.slug;

	if (!slug) {
		return <p className="center">Loading...</p>;
	}

	// First two parameters in the URL is filter Year and Month respectively.
	const filterYear = slug[0];
	const filterMonth = slug[1];
	const numYear = Number(filterYear);
	const numMonth = Number(filterMonth);

	// Invalid URL check.
	if (isNaN(numYear) || isNaN(numMonth) || slug.length > 2) {
		return <p>Invalid URL.</p>;
	}

	// Invalid Month check.
	if (numMonth < 1 || numMonth > 12) {
		return <p>Invalid Month.</p>;
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return <p>No events during the provided filter.</p>;
	}

	return (
		<>
			<EventList events={filteredEvents} />
		</>
	);
}

export default FilteredEventsPage;
