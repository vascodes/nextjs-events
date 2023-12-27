import AddressIcon from "../icons/AddressIcon";
import DateIcon from "../icons/DateIcon";
import EventDetailItem from "./EventDetailItem";
import classes from "./event-details.module.css";

function EventDetails(props) {
	const { date, address, image, imageAlt } = props;

	const formattedDate = new Date(date).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<section className={classes.details}>
			<div className={classes.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul className={classes.list}>
				<EventDetailItem icon={DateIcon}>
					<time>{formattedDate}</time>
				</EventDetailItem>
				<EventDetailItem icon={AddressIcon}>
					<address>{address}</address>
				</EventDetailItem>
			</ul>
		</section>
	);
}

export default EventDetails;
