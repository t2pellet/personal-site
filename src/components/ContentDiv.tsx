import { HTMLProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = HTMLProps<any> & PropsWithChildren;

export default function ContentDiv({ className, children, ...props }: Props) {
  const classes = classNames(
    'whitespace-pre-wrap rounded-box bg-secondary-content bg-opacity-40 p-4 xl:text-lg leading-tight tracking-tight text-secondary',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
