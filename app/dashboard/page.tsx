

// file app/dashboard/page.tsx

import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function ProtectedPage() {

  const { userId } = auth()

  // nếu chưa đăng nhập thì redirect về trang chủ
  if (!userId) {
    redirect('/')
  }

  const user = await currentUser()

  return <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center">
    <h1 className="font-bold text-xl">Dashboard</h1>
    <div>
      Xin chào, {user?.fullName}!
    </div>
    <Link href={'/'}>Quay lại</Link>
  </div>;
}

