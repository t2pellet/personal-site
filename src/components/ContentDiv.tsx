import { HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = HTMLProps<any> & PropsWithChildren;

export default function ContentDiv({ className, children, ...props }: Props) {
  const classes = classNames(
    'whitespace-pre-wrap rounded-box bg-base-200 dark:bg-opacity-40 p-4 xl:text-lg leading-tight tracking-tight dark:text-neutral-content',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
