'use client';

interface TitleProps {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'p';
}

export const Title = ({
  children,
  as,
}: TitleProps) => {
  const Tag = as;

  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}