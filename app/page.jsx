import { redirect } from "next/navigation"

const Homepage = () => {
  redirect("/dashboard")

  return (
    <div>Homepage</div>
  )
}

export default Homepage