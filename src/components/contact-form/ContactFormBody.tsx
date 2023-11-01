'use client';

import contactAction, { FormStateType } from '@/actions/contact-form';
import ContactFormSubmitBtn from '@/components/contact-form/ContactFormSubmitBtn';
import { useCallback, useRef } from 'react';
import { experimental_useFormState as useFormState } from 'react-dom';
import ContactFormStatusMsg from '@/components/contact-form/ContactFormStatusMsg';

export default function ContactFormBody() {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = useCallback(() => formRef.current?.reset(), [formRef]);
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
        placeholder='Enter your name'
        className='input input-bordered input-primary w-full'
      />
      <input
        name='email'
        type='text'
        placeholder='Enter your email'
        className='input input-bordered input-primary w-full'
      />
      <input
        name='phone'
        type='text'
        placeholder='Enter your phone #'
        className='input input-bordered input-primary w-full'
      />
      <textarea
        name='message'
        placeholder='Your message'
        className='textarea textarea-primary w-full'
      />
      <ContactFormSubmitBtn />
      <ContactFormStatusMsg state={state} />
    </form>
  );
}
