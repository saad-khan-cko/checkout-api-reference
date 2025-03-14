import { Checkout } from 'checkout-sdk-node';

let cko = new Checkout('your_client_secret_here', {
	client: 'ack_XXXXXXXXXXXX',
	scope: ['gateway'], // array of scopes
	environment: 'sandbox', // or "production"
});

// Or if you use api keys:
// const cko = new Checkout('sk_sbox_XXX', { pk: 'pk_sbox_XXX'}});

try {
	const risk = await cko.risk.requestPreCapture({
		source: {
			type: 'token',
			token: 'tok_XXX',
		},
	});
} catch (err) {
	console.log(err.name);
}
