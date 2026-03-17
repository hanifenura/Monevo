import express from "express";
import {
  createInvitation,
  joinListWithCode,
  getListInvitations,
  deleteInvitation,
  getListMembers,
  removeMemberAccess,
  leaveList,
  updateMemberRole,
} from "../controllers/shareController.js";

const router = express.Router();

// Davet oluştur - POST /api/share/invite
router.post("/invite", createInvitation);

// Davet koduyla listeye katıl - POST /api/share/join
router.post("/join", joinListWithCode);

// Listenin davetlerini getir - GET /api/share/invitations/:list_id
router.get("/invitations/:list_id", getListInvitations);

// Daveti iptal et - DELETE /api/share/invitations/:invitation_id
router.delete("/invitations/:invitation_id", deleteInvitation);

// Liste üyelerini getir - GET /api/share/members/:list_id
router.get("/members/:list_id", getListMembers);

// Üye erişimini kaldır - DELETE /api/share/members/:list_id/:user_id
router.delete("/members/:list_id/:user_id", removeMemberAccess);

// Listeden ayrıl - POST /api/share/leave/:list_id
router.post("/leave/:list_id", leaveList);

// Üye rolünü güncelle - PUT /api/share/members/:list_id/:user_id/role
router.put("/members/:list_id/:user_id/role", updateMemberRole);

export default router;
