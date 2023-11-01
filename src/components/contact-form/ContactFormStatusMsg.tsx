import { FormStateType } from '@/actions/contact-form';
import classNames from 'classnames';

export default function ContactFormStatusMsg({
  state,
}: {
  state: FormStateType;
}) {
  if (state.message === undefined) return null;

  const classes = classNames('text-sm md:text-md text-center', {
    ['text-error']: !!state.error,
    ['text-success']: !state.error,
  });
  return <span className={classes}>{state.message}</span>;
}
