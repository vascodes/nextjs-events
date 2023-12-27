import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/ResultsTitle";
import AlertDialog from "../../components/ui/AlertDialog";

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
		return (
			<AlertDialog buttonLink="/events" buttonText="All Events">
				Invalid URL.
			</AlertDialog>
		);
	}

	// Invalid Month check.
	if (numMonth < 1 || numMonth > 12) {
		return (
			<AlertDialog buttonLink="/events" buttonText="All Events">
				Invalid Month.
			</AlertDialog>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<AlertDialog buttonLink="/events" buttonText="All Events">
				No events during the provided filter.
			</AlertDialog>
		);
	}

	const filterDate = new Date(numYear, numMonth - 1);

	return (
		<>
			<ResultsTitle date={filterDate} />
			<EventList events={filteredEvents} />
		</>
	);
}

export default FilteredEventsPage;
