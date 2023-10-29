import twilio from 'twilio';
import ContentDiv from '@/components/ContentDiv';

const contactFormBody = (formData: FormData): string => `
New Contact Submission:\n\n
Name: ${formData.get('name')}\n
Email: ${formData.get('email')}\n
Phone: ${formData.get('phone')}\n\n
Message:\n\n${formData.get('message')}
`;

export default function ContactForm() {
  async function contact(formData: FormData) {
    'use server';
    const twilioClient = twilio(
      process.env.NEXT_PUBLIC_TWILIO_ACCOUNT,
      process.env.NEXT_PUBLIC_TWILIO_AUTH
    );
    const result = await twilioClient.messages.create({
      from: process.env.NEXT_PUBLIC_PHONE_NUMBER,
      to: '+15145704380',
      body: contactFormBody(formData),
    });
    console.log(result.sid);
  }

  return (
    <ContentDiv className='relative mx-auto w-80'>
      <form className='flex flex-col place-items-center gap-4' action={contact}>
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
        <button className='btn btn-primary w-full' type='submit'>
          Submit
        </button>
      </form>
    </ContentDiv>
  );
}
