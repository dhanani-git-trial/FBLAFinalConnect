// @ts-nocheck
import type { PageServerLoad, Actions } from './$types';
import { redirect, error } from '@sveltejs/kit';
import { tempquest_pass, wrong_question_access, return_tempquest_data } from '$lib/server/createaquest';

export const load = async ({ url, cookies }: Parameters<PageServerLoad>[0]) => {
  const pageName = Number(url.pathname.slice(-1)) || -9;
  const email = cookies.get("email");
  if (!email) throw error(400, "Missing email cookie");
  if (pageName != -9) {
    await wrong_question_access(email, pageName);
  }

  const tempquest = await return_tempquest_data(email);
  return { tempquest: tempquest}
};


export const actions = {
    default: async ({ request, cookies }: import('./$types').RequestEvent) => {
        const email = cookies.get("email");
        if (!email) throw error(400, "Missing email cookie");
        const formData = await request.formData();

        //CHANGE
        const info = Object.fromEntries(formData) as { question_3: string; answerchoicea_3: string; answerchoiceb_3: string; answerchoicec_3: string; answerchoiced_3: string; explanation_3: string; image_3: string;};
        //CHANGE


        await tempquest_pass(email, info);
        
        throw redirect(303, '/create/quest_storage');
    }
};
;null as any as Actions;