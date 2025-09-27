// @ts-nocheck
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { connect_to_db } from "$lib/server/db";

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
	const connection = await connect_to_db();
	if (!connection) throw error(500, "Database connection failed");

	const name = event.cookies.get("name") ?? "";
	const email = event.cookies.get("email") ?? "";

	return { name, email };
};
