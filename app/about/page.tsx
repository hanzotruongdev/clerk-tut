'use client'

import { useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function AboutPage() {
  const { user, isSignedIn } = useUser()


  return <div className="w-full min-h-screen flex flex-col  gap-4 items-center justify-center">
    <h1 className="font-bold text-xl">About</h1>
    {!isSignedIn &&
      <div>
        Bạn chưa đăng nhập, vui lòng đăng nhập!
      </div>}

    {isSignedIn &&
      <div>
        Xin chào {user.fullName}
      </div>}
    <Link href={'/'}>Quay lại</Link>
  </div>

}