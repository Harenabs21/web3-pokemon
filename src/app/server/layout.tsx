export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="bg-neutral-800 flex flex-col justify-between items-center">
        {children}
      </main> 
  );
}
