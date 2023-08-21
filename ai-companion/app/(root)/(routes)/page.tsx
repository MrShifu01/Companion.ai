import React from 'react'
import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
