
//  title:{type:String , required:true},
//         link:String,
//         desc:string,
//         tags:[{type:mongoose.Types.ObjectId , ref:'Tag'}],
//         UserID:{type:mongoose.Types.ObjectId , ref:'user' , required:true},
//         Type:{type:String , required:true}
// })

import { ProfileForm } from "./form";





export function AddForm() {
        return (
                <div className="fixed bg-transparent h-screen w-screen">

                        <div className="backdrop-blur-sm  w-full h-full flex justify-center items-center">
                             
                                        <ProfileForm></ProfileForm>
                        </div>
                </div>
        )
}





