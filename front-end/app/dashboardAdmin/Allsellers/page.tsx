"use clients"
import Datasellers from '@/app/dashboardAdmin/Allsellers/seller'
import TemporaryDrawer from '@/app/dashboardAdmin/Sidebar'
export default function seller (){
    return(
      
<main> 
               <TemporaryDrawer/>
              
       <Datasellers/>
       <div>
       <h1 style={{color:"red",fontSize:"large",marginLeft:"45%",marginBottom:"50px"}}>Sellers List And informations</h1>
       </div>
</main>
    )


}
