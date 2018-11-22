// @flow

let API_ROOT_URL = 'https://wetix-api-dev.appspot.com/v1/';
let OAUTH_URL = 'https://sb-api.wetix.my/oauth';

let STORAGE_PATH = 'https://storage.googleapis.com/wetix-prod-assets/';
let ICONS_WETIX = `${STORAGE_PATH}wetix_icons_vertical.png`;

let ENV = 'DEV';

const host = window.location.hostname;

switch (true) {
	case /sb-web.wetix.my/gi.test(host):
	case /wetix-web-sb.appspot.com/gi.test(host):
		API_ROOT_URL = 'https://sb-api.wetix.my/v1/';
		STORAGE_PATH = 'https://storage.googleapis.com/wetix-sandbox-assets/';
		ICONS_WETIX = `${STORAGE_PATH}wetix_icons_vertical.png`;
		OAUTH_URL = 'https://sb-api.wetix.my/oauth';
		break;
	case /dev-web.wetix.my/gi.test(host):
	case /wetix-web-dev.appspot.com/gi.test(host):
		API_ROOT_URL = 'https://wetix-api-dev.appspot.com/v1/';
		break;
	case /^web.wetix.my/gi.test(host):
	case /^wetix-web-prod.appspot.com/gi.test(host):
		API_ROOT_URL = 'https://api.wetix.my/v1/';
		STORAGE_PATH = 'https://storage.googleapis.com/wetix-prod-assets/';
		ICONS_WETIX = `${STORAGE_PATH}wetix_icons_vertical.png`;
		OAUTH_URL = 'https://api.wetix.my/oauth';
		ENV = 'PROD';
		break;
	default:
	// API_ROOT_URL = 'https://wetix-api-prod.appspot.com/v1/';
	// API_ROOT_URL = 'http://api.wetix.my:8080/v1/';
		API_ROOT_URL = 'https://sb-api.wetix.my/v1/';
		API_ROOT_URL = 'http://local-api.wetix.my:8080/v1/';
// API_ROOT_URL = 'https://api.wetix.my/v1/';
// API_ROOT_URL = 'http://api.wetix.local:8080/v1/';
// API_ROOT_URL = 'https://dev-api.wetix.my/v1/';
// API_ROOT_URL = 'https://wetix-api-dev.appspot.com/v1/';
}

export default {
	API_ROOT_URL,
	STORAGE_PATH,
	ICONS_WETIX,
	OAUTH_URL,
	ENV
};
