'use client';

import { RootState, useAppSelector } from "@/state/store";
import { redirect } from "next/navigation";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loginState = useAppSelector((state: RootState) => state.login);
  if (loginState.isLoggedIn) {
    redirect("/");
  }
  
  return (
    <>
    {children}
    </>
  );
}
