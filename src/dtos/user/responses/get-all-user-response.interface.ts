import { IGetAllReservationResponse } from "@/dtos/reservation/responses";

export interface IGetAllUserResponse {
  id: number;
  name: string;
  email: string;
  reservations?: IGetAllReservationResponse[];
}
