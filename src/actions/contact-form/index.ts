'use server';

import emailJS from '@emailjs/nodejs';
import debounce from 'lodash.debounce';

export type FormStateType = { message?: string; error?: boolean };

const contactFn = debounce(async (payload: FormData) => {
  const formDataRecord: Record<string, unknown> = {};
  Array.from(payload.keys()).forEach(
    (key) => (formDataRecord[key] = payload.get(key))
  );
  try {
    const result = await emailJS.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE as string,
      formDataRecord,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_KEY as string,
        privateKey: process.env.NEXT_PUBLIC_EMAIL_PRIVATE_KEY as string,
      }
    );
    console.log('result: ' + result.status);
  } catch (e) {
    return { message: 'Hmm, something went wrong...', error: true };
  }
  return { message: 'Successfully sent your message! Will be in touch :)' };
}, 10000);

export default async function contactAction(
  _prevState: FormStateType,
  payload: FormData
): Promise<FormStateType> {
  const result = await contactFn(payload);
  if (result != undefined) return result;
  return { message: 'Hold on there partner!', error: true };
}
