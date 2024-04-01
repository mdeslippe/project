/**
 * Handle message submissions on the contact us page.
 *
 * @param {FormEvent<HTMLFormElement>} event The form submission event
 */
function sendMessage(event) {
	// Prevent the page from reloading.
	event.preventDefault();

	// Inform the user that the message was sent.
	alert("Message Sent!");

	// Clear the form fields.
	event.target.reset();
}
