'use client';

import contactAction, { FormStateType } from '@/actions/contact-form';
import ContactFormSubmitBtn from '@/components/contact-form/ContactFormSubmitBtn';
import { FormEvent, useCallback, useRef } from 'react';
import { experimental_useFormState as useFormState } from 'react-dom';
import ContactFormStatusMsg from '@/components/contact-form/ContactFormStatusMsg';

type FormBodyProps = {
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
};

export default function ContactFormBody({ placeholders }: FormBodyProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      formRef.current?.reset();
    },
    [formRef]
  );
  const [state, formAction] = useFormState<FormStateType, FormData>(
    contactAction,
    {
      message: undefined,
    }
  );

  return (
    <form
      className='flex flex-col place-items-center gap-4'
      action={formAction}
      ref={formRef}
      onSubmit={onSubmit}
    >
      <input
        name='name'
        type='text'
        placeholder={placeholders.name}
        className='input input-bordered input-primary w-full'
        required
      />
      <input
        name='email'
        type='email'
        placeholder={placeholders.email}
        className='input input-bordered input-primary w-full'
        required
      />
      <input
        name='phone'
        type='number'
        placeholder={placeholders.phone}
        className='input input-bordered input-primary w-full'
        required
      />
      <textarea
        name='message'
        placeholder={placeholders.message}
        className='textarea textarea-primary w-full'
        required
      />
      <ContactFormSubmitBtn />
      <ContactFormStatusMsg state={state} />
    </form>
  );
}
