import Button from "./Button";

import classes from "./alert-dialog.module.css";

function AlertDialog(props) {
	const { buttonLink, buttonText } = props;

	return (
		<div className={classes.container}>
			<p>{props.children}</p>
			<Button link={buttonLink}>{buttonText}</Button>
		</div>
	);
}

export default AlertDialog;
