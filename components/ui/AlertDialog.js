import Button from "./Button";

import classes from "./alert-dialog.module.css";

function AlertDialog(props) {
	return (
		<div className={classes.container}>
			<p>{props.children}</p>
			{props.Button}
		</div>
	);
}

export default AlertDialog;
