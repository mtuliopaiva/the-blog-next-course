export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Layout da About</h1>
      {children}
    </>
  );
}
