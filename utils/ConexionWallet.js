import Moralis from 'moralis';

const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
Moralis.start({ serverUrl, appId });

export async function loginWallet() {
	console.log('loginWallet');
	let user = await Moralis.User.current();

	if (!user) {
		user = await Moralis.authenticate();
		console.log(`llego al authenticate`);
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		}
	}
	console.log(`llego al return `);

	return user;
}

export async function logOutWallet() {
	await Moralis.User.logOut();
	console.log('logged out');
	localStorage.removeItem('user');
}


