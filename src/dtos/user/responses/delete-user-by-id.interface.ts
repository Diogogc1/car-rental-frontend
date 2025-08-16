import { IDeleteReservationResponse } from "@/dtos/reservation/responses";

export interface IDeleteUserResponse {
  id: number;
  name: string;
  email: string;
  reservations?: IDeleteReservationResponse[];
}
