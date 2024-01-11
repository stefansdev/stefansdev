import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

// e.g a webhook to `https://stefans.dev/api/revalidate?tag=TAG_HER&secret=SECRET_HER`
export async function POST(request) {
	const secret = request.nextUrl.searchParams.get('secret');
	const tag = request.nextUrl.searchParams.get('tag');

	if (secret !== process.env.CACHE_TOKEN) {
		return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
	}

	if (!tag) {
		return NextResponse.json({ message: 'Missing tag param' }, { status: 400 });
	}

	revalidateTag(tag);

	return NextResponse.json({ revalidated: true, now: Date.now() });
}
