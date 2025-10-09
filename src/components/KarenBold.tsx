import type { PropsWithChildren } from "react";

interface KarenBoldProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

export const KarenBold: React.FC<KarenBoldProps> = ({ children }) => {
  return (
    <span className="text-zinc-50 font-medium font-kare text-xl">
      {children}
    </span>
  );
};
