import { auth } from '$lib/server/lucia';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	// get user from session
	const session = await event.locals.auth.validate();
	event.locals.user = session
		? {
				userId: session.user.userId,
				username: session.user.username,
				isAdmin: session.user.isAdmin
			}
		: null;

	// protect admin routes
	if (event.url.pathname.startsWith('/admin')) {
		if (!event.locals.user?.isAdmin) {
			throw redirect(303, '/auth/login');
		}
	}

	// protect app routes
	if (event.url.pathname.startsWith('/app')) {
		if (!event.locals.user) {
			throw redirect(303, '/auth/login');
		}
	}

	return await resolve(event);
};
