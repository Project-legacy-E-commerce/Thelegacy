import * as React from "react"
import Users from "@/app/seller/Interfaces/UserType"

export default function FetchAllUsers () {
    const [users, setUsers] = React.useState<Users[]>([])

    React.useEffect(()=>{
        fetch("http://localhost:3000/")
    },[])
}