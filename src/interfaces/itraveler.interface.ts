export interface ITraveler {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  gender?: string;
  phone_number?: string;
  lead_traveler: boolean;
  traveler_type: "ADT" | "CNN" | "INF";
}
