/**
 * Created by Serhiy on 30.05.18.
 */

function loadAccessData(apiName) {
	import RAD from 'RequestAccessData';

	if (RAD.hasOwnProperty(apiName)) {
		return RAD[apiName];
	}

	return 0;
}

function verifyAccessToken(apiName) {
	var accessData = loadAccessData(apiName);

	app.post(accessData.refreshTokenURL, function (req, res) {
		// verify the existing token
		var profile = jwt.verify(req.body.token, accessData.clientSecret);

		// if more than 14 days old, force login
		if (profile.original_iat - new Date() > 14) { // iat == issued at
			return res.send(401); // re-logging
		}

		// check if the user still exists or if authorization hasn't been revoked
		if (!valid) return res.send(401); // re-logging

		// issue a new token
		var refreshed_token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });
		res.json({ token: refreshed_token });
	});
}

function checkAccessToken(apiName) {
	var checkTokenRequest = new XMLHttpRequest();
	var accessData = loadAccessData(apiName);

	if (!accessData) {
		return;
	}

	checkTokenRequest.open('POST', accessData.refreshTokenURL, true);
	checkTokenRequest.onload = function() {
		if (this.status == 200) {
			callback(JSON.parse(this.response));
		} else {
			var error = new Error(this.statusText);

			error.code = this.status;
			callback({
				status: 'Error',
				error: error
			});
		}
	};

	checkTokenRequest.onerror = function() {
		callback({
			status: 'Error',
			error: new Error("Network Error")
		});
	};

	checkTokenRequest.send('client_id=' + accessData.clientID + '&client_secret=' + accessData.clientSecret);
}
const SpotifyAPI = function() {

	const spotifyRequest = new Promise((resolve, reject) => {
		resolve
	});

	let loginLink;

	function registerAPI(clientId, scopes, redirectURL) {
		loginLink = 'https://accounts.spotify.com/authorize' +
			'?response_type=token' +
			'&client_id=' + clientId +
			(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
			'&redirect_uri=' + encodeURIComponent(redirectURL);
	}

	window.location.href = loginLink;



	const loginToAccount = function(url, accessToken, callback) {
		var loginRequest = new XMLHttpRequest();
		// var accessData = loadAccessData('SPOTIFY_ACCESS_DATA');
		var accessToken = checkAccessToken('SPOTIFY_ACCESS_TOKEN');

		loginRequest.open('GET', url, true);
		loginRequest.setRequestHeader('Authorization', 'Bearer ' + accessToken);

		loginRequest.onload = function() {
			if (this.status == 200) {
				if (this.response.statusText === 'Unauthorized') {
					callback({status:'Unauthorized'});
				}

				callback(this.response.json());
			} else {
				var error = new Error(this.statusText);

				error.code = this.status;
				callback({
					status: 'Error',
					error: error
				});
			}
		};

		loginRequest.onerror = function() {
			reject(new Error("Network Error"));
		};

		loginRequest.send();

		HttpGet(url).then(function (response) {
			if (response.statusText === 'Unauthorized') {
				callback({status:'Unauthorized'});
			}

			return response.json();
		}).then(response => {
			callback(response);
		}).catch(error => {
			callback(error);
		});
		const request = new Request('https://api.spotify.com/v1/me', {
			headers: new Headers({
				'Authorization': 'Bearer ' + accessToken
			})
		});

		fetch(request)

		return new Promise(function(resolve, reject) {

			let xhr = new XMLHttpRequest();


		});

		app.get('/login', function(req, res) {
			var scopes = 'user-read-private user-read-email';
			res.redirect('https://accounts.spotify.com/authorize' +
				'?response_type=code' +
				'&client_id=' + my_client_id +
				(scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
				'&redirect_uri=' + encodeURIComponent(redirect_uri));
		});
	}
}