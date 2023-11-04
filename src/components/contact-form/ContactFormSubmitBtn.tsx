'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ContactFormSubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='btn btn-primary w-full'>
      {pending ? (
        <span className='loading loading-spinner loading-lg'></span>
      ) : (
        `Send 🚀`
      )}
    </button>
  );
}
