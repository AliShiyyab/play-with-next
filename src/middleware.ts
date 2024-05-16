import { NextRequest, NextResponse } from 'next/server';

// List of supported locales
export const locales: string[] = ['en', 'ar'];

// Function to get the preferred locale from the request
function getLocale(request: NextRequest): string {
    const acceptLanguage: string | null = request.headers.get('accept-language');
    if (!acceptLanguage) {
        return locales[0];
    }

    const preferredLocales = acceptLanguage.split(',')
        .map(lang => {
            const [code, q = "q=1"] = lang.split(';');
            return { code: code.trim(), quality: parseFloat(q.split('=')[1]) };
        })
        .sort((a, b) => b.quality - a.quality);

    for (const { code } of preferredLocales) {
        if (locales.includes(code.toLowerCase())) {
            return code;
        }
    }

    return locales[0];
}

export function middleware(request: NextRequest): NextResponse | undefined {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        '/((?!_next|api).*)',
    ],
};
