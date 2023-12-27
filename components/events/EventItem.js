import classes from "./event-item.module.css";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Button from "../ui/Button";

function EventItem(props) {
	const { id, image, title, date, location } = props;

	const formattedDate = new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const eventLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			{/* Event Image */}
			<img src={`/${image}`} alt={title} />

			{/* Event Content */}
			<div className={classes.content}>
				{/* Event Summary */}
				<div className={classes.summary}>
					{/* Event Title */}
					<h2>{title}</h2>

					{/* Event Date */}
					<div className={classes.date}>
						<DateIcon />
						<time>{formattedDate}</time>
					</div>

					{/* Event Address */}
					<div className={classes.address}>
						<AddressIcon />
						<address>{location}</address>
					</div>
				</div>

				{/* Actions */}
				<div className={classes.actions}>
					<Button link={eventLink}>
						<span>View Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
