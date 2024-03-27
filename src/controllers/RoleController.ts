import {Request,Response} from "express";
import Role from "../db/models/Role";


const GetRole= async (req:Request, res:Response):Promise<Response>=>{
    try {
        const roles= await Role.findAll({
            where:{
                active:true
            }
        });

        return res.status(200).send({
            status:200,
            message:'ok',
            data:roles
        })
    }catch(error:any){
        if(error !=null && error instanceof Error){
            return res.status(500).send({
                status:500,
                message:error.message,
                errors:error
            })
        }
        return res.status(500).send({
            status:500,
            message:"Internal server error",
            errors:error
        });

    }
}
const createdRole=async(req:Request, res:Response):Promise<Response>=>{
    try{
        const {roleName,active}=req.body;
        const create =await Role.create({
            roleName,
            active
        });
        return res.status(200).send({
            status:201,
            message:"Created",
            data:create
        });

    }catch(error:any){
        if(error !=null && error instanceof Error){
            return res.status(500).send({
                status:500,
                message:error.message,
                errors:error
            })
        }
        return res.status(500).send({
            status:500,
            message:"Internal server error",
            errors:error
        });

    }
}
const updateRole=async(req:Request, res:Response):Promise<Response>=>{
    try{
        const {id}=req.params;
        const {roleName,active}=req.body;
        const role=await Role.findByPk(id);

       if(!role){
        return res.status(404).send({
            status:404,
            message:"Data not Found",
            data:null
        });
    }
    role.roleName=roleName;
    role.active=active;
    await role.save();

    return res.status(200).send({
        status:200,
        message:"ok",
        data:role
    });
    }catch(error:any){
        if(error !=null && error instanceof Error){
            return res.status(500).send({
                status:500,
                message:error.message,
                errors:error
            })
        }
        return res.status(500).send({
            status:500,
            message:"Internal server error",
            errors:error
        });

    }
}
const deleteRole=async(req:Request, res:Response):Promise<Response>=>{
    try{
        const {id}=req.params;
        const {roleName,active}=req.body;
        const role=await Role.findByPk(id);

       if(!role){
        return res.status(404).send({
            status:404,
            message:"Data not Found",
            data:null
        });
    }

    await role.destroy();
    return res.status(200).send({
        status:200,
        message:"Delete Role successfully",
        data:null
    });
   
    }catch(error:any){
        if(error !=null && error instanceof Error){
            return res.status(500).send({
                status:500,
                message:error.message,
                errors:error
            })
        }
        return res.status(500).send({
            status:500,
            message:"Internal server error",
            errors:error
        });

    }
}
const GetRoleById=async(req:Request, res:Response):Promise<Response>=>{
    try{
        const {id}=req.params;
        const {roleName,active}=req.body;
        const role=await Role.findByPk(id);

       if(!role){
        return res.status(404).send({
            status:404,
            message:"Data not Found",
            data:null
        });
    }

    return res.status(200).send({
        status:200,
        message:"Get Role BY Id  successfully",
        data:role
    });
   
    }catch(error:any){
        if(error !=null && error instanceof Error){
            return res.status(500).send({
                status:500,
                message:error.message,
                errors:error
            })
        }
        return res.status(500).send({
            status:500,
            message:"Internal server error",
            errors:error
        });

    }
}
export default {GetRole,createdRole,updateRole,deleteRole,GetRoleById};