importScripts('https://www.gstatic.com/firebasejs/6.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.3.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyAOOsuZwPWQd8-gfQDH8gCI4Kspi2Lk4NM",
	authDomain: "helloworld-eab5b.firebaseapp.com",
	databaseURL: "https://helloworld-eab5b.firebaseio.com",
	projectId: "helloworld-eab5b",
	storageBucket: "",
	messagingSenderId: "83456433650",
	appId: "1:83456433650:web:c3bc76741eca6030"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});