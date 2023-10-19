import { HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = HTMLProps<any> & PropsWithChildren;

export default function ContentDiv({ className, children }: Props) {
  const classes = classNames(
    className,
    'whitespace-pre-wrap rounded-xl bg-secondary-content bg-opacity-40 p-4 text-lg leading-tight tracking-tight text-secondary lg:rounded-2xl xl:rounded-3xl'
  );

  return <div className={classes}>{children}</div>;
}
