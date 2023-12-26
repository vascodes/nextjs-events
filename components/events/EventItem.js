function EventItem(props) {
	const { event } = props;

	return (
		<li>
			{event.title} at {event.location}
		</li>
	);
}

export default EventItem;
