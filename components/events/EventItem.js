import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/Button";

function EventItem(props) {
	const { id, image, title, date, location, address } = props;

	const formattedDate = new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const eventLink = `events/${id}`;

	return (
		<li className={classes.item}>
			<img src={image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div>
						<time>{formattedDate}</time>
					</div>
					<div className={classes.address}>
						<address>{location}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={eventLink}>View Event</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
