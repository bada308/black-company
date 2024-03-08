import { MemberInfo } from "@/types/member";

export interface ActiveStatusInfo
  extends Omit<MemberInfo, "memberId" | "attendStatus"> {}
export interface AttendStatusInfo
  extends Omit<MemberInfo, "memberId" | "activeStatus"> {}
