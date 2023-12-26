import EventItem from "./EventItem";

function EventList(props) {
	const { events } = props;

	return (
		<ul>
			{events.map(event => (
				<EventItem key={event.id} event={event} />
			))}
		</ul>
	);
}

export default EventList;
