'use client';

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ContactFormSubmitBtn({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='btn btn-primary w-full'>
      {pending ? (
        <span className='loading loading-spinner loading-lg'></span>
      ) : (
        `${label}`
      )}
    </button>
  );
}
