interface KareBoldProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

export const KareBold: React.FC<KareBoldProps> = ({ children }) => {
  return (
    <span className="text-zinc-50 font-kare text-xl text-center mx-auto my-auto">
      {children}
    </span>
  );
};
