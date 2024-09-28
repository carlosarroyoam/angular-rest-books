import Header from "@/components/Header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="container py-8">{children}</main>
    </>
  );
}
