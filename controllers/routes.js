import { v4 as uuidv4 } from 'uuid';


let users= []

export const createuser = (req,res)=>{
    const user = req.body
    const userwithID= {...user, id:uuidv4()}
    users.push(userwithID)
    res.send(`user with name ${user.Firstname} is added to the list`)
   }

export const getusers= (req,res)=>{
    res.send(users)
}

export const updateUsers= (req,res)=>{
    const { id } = req.params
    const {Firstname,Lastname,Age} = req.body
    const user = users.find((user)=> user.id===id)

    if (Firstname) {user.Firstname = Firstname }
    if (Lastname){ user.Lastname=Lastname}
    if (Age){  user.Age=Age }
    res.send(`User with ${id} has been Updated`)
   }

export const getauser= (req,res)=>{
    const { id } = req.params
    const foundUser = users.find((user)=>user.id ===id)
    res.send(foundUser)
   }

   export const deleteUser =(req,res)=>{
    const { id } = req.params
     users = users.filter((user)=>user.id !=id)
    res.send(`User With The ${id} is deleted from the database`)}