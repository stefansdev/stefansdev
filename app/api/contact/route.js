import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		const body = await request.json();
		const response = await fetch(`${process.env.DIRECTUS_URL}/items/inquiry`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.DIRECTUS_TOKEN}`,
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			return NextResponse.json({ status: 'error' }, { status: 502 });
		}

		return NextResponse.json({ status: 'success' });
	} catch {
		return NextResponse.json({ status: 'error' }, { status: 500 });
	}
}
