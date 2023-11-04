import ContentDiv from '@/components/ContentDiv';
import ContactFormBody from '@/components/contact-form/ContactFormBody';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const dict = useTranslations('sections.contact.form');
  return (
    <ContentDiv className='relative mx-auto w-80'>
      <ContactFormBody
        placeholders={{
          name: dict('name'),
          email: dict('email'),
          phone: dict('phone'),
          message: dict('message'),
        }}
      />
    </ContentDiv>
  );
}
