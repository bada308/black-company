import { ActiveStatusInfo, AttendStatusInfo } from "../types";
import { ActiveStatus, AttendStatus } from "@/types/member";

export class AttendStatusInfoDto {
  public readonly name: string;
  public readonly attendStatus: AttendStatus;

  constructor(data: AttendStatusInfo) {
    this.name = data?.name;
    this.attendStatus = data?.attendStatus;
  }
}

export class ActiveStatusInfoDto {
  public readonly name: string;
  public readonly activeStatus: ActiveStatus;

  constructor(data: ActiveStatusInfo) {
    this.name = data?.name;
    this.activeStatus = data?.activeStatus;
  }
}
