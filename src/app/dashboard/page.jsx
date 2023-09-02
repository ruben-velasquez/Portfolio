"use client"
import { useEffect, useState } from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push("/")
      } else {
        setSession(data.session)
      }
    })
  }, [supabase, router])

  if (!session) {
    return null
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
