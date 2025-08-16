import { IGetAllReservationResponse } from "@/dtos/reservation/responses";

export interface IUpdateUserByIdResponse {
  id: number;
  name: string;
  email: string;
  reservations?: IGetAllReservationResponse[];
}
