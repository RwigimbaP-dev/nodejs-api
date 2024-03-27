import  express  from "express";
import RoleController from "../controllers/RoleController";

const router =express.Router();

router.get("/role", RoleController.GetRole);
router.get("/role/:id", RoleController.GetRoleById);
router.post("/role", RoleController.createdRole);
router.patch("/role/:id", RoleController.updateRole);
router.delete("/role/:id", RoleController.deleteRole);

export default router;