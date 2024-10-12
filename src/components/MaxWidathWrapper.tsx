import { cn } from '@/lib/utils';

const MaxWindthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-10',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWindthWrapper;
