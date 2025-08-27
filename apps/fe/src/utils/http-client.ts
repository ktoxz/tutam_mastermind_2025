export async function postJson<T>(url: string, body?: any): Promise<T> {
	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: body ? JSON.stringify(body) : undefined,
	});
	if (!response.ok) throw new Error(`${response.statusText}`);
	return response.json();
}
