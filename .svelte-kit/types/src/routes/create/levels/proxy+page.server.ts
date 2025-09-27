// @ts-nocheck
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { get_lvl } from '$lib/server/class_and_levels'; // adjust path

export const load = async ({ cookies }: Parameters<PageServerLoad>[0]) => {
  const email = cookies.get('email');
  if (!email) throw error(400, 'Missing email cookie');

  const real_lvl = await get_lvl(email);

  return { real_lvl };
};
