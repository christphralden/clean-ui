import {defineMiddleware} from 'astro:middleware';
import {notFound} from 'astro:i18n';

export const onRequest = defineMiddleware((context, next) => {
	const pathNotFound = notFound(context);
	if (pathNotFound) {
		return pathNotFound;
	}
	return next();
});
