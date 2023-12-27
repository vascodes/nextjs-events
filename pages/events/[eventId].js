import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventHeader from "../../components/event-detail/EventHeader";
import EventContent from "../../components/event-detail/EventContent";
import EventDetails from "../../components/event-detail/EventDetails";

function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <h1>No event found.</h1>;
	}

	return (
		<>
			<EventHeader title={event.title} />
			<EventDetails
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>{event.description}</EventContent>
		</>
	);
}

export default EventDetailPage;
