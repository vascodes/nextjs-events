import classes from "./event-header.module.css";

function EventHeader(props) {
	const { title } = props;

	return (
		<section className={classes.header}>
			<h1>{title}</h1>
		</section>
	);
}

export default EventHeader;
