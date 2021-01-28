export async function checkUsername(username: string): Promise<{ error: string | null; data: string }> {
	// simulate API response delay
	await new Promise((res) => setTimeout(res, 100));

	if (RegExp(/^[a-z-_.]+$/i).test(username) === false) {
		return { error: "InvalidFormat", data: "username can only consist of characters a-z, A-Z, '-', '_' and '.'" };
	}

	if (["admin", "null", "root"].includes(username)) {
		return { error: "AlreadyExists", data: "this username is already taken" };
	}

	return {
		error: null,
		data: `${username.toLowerCase()}@dig-it-ally.com`,
	};
}
