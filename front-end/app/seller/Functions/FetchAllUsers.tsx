import * as React from "react"
import Clients from "@/app/seller/Interfaces/UserType"

export default function FetchAllUsers () {
    const [clients, setClients] = React.useState<Clients[]>([])

    React.useEffect(() => {
        fetch(`http://localhost:3000/saler/getallprod/${1}`)
          .then((result) => result.json())
          .then((res) => {
            setClients(res);
          })
          .catch((err) => {
            console.error(err);
          })
      }, []);
    
      return clients;
}