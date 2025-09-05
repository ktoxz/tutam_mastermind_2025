import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { BASIC_ROUTES } from './consts/routes';

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === '/') {
		const url = request.nextUrl.clone();
		url.pathname = BASIC_ROUTES.home.href;
		return NextResponse.redirect(url);
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/'],
};
