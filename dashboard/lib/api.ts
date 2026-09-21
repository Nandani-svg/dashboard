const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

async function request(path: string, options?: RequestInit) {
	const res = await fetch(`${BASE_URL}${path}`, {
		headers: { "Content-Type": "application/json" },
		...options,
	});
	if (!res.ok) throw new Error(`API error: ${res.status}`);
	return res.json();
}

export const api = {
	getAntinukeStatus: (guildId: string) => request(`/api/guilds/${guildId}/antinuke`),
	updateAntinukeStatus: (guildId: string, config: any) =>
		request(`/api/guilds/${guildId}/antinuke`, { method: "PATCH", body: JSON.stringify(config) }),
	getAntinukeLogs: (guildId: string) => request(`/api/guilds/${guildId}/antinuke/logs`),
	setPanicLockdown: (guildId: string, action: "lock" | "unlock") =>
		request(`/api/guilds/${guildId}/antinuke/lockdown`, { method: "POST", body: JSON.stringify({ action }) }),
	addAntinukeWhitelist: (guildId: string, userId: string) =>
		request(`/api/guilds/${guildId}/antinuke/whitelist`, { method: "POST", body: JSON.stringify({ userId }) }),
	removeAntinukeWhitelist: (guildId: string, userId: string) =>
		request(`/api/guilds/${guildId}/antinuke/whitelist/${userId}`, { method: "DELETE" }),
};
