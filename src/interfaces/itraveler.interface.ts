export interface ITraveler {
  id: number;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  lead_traveler: boolean;
  gender: string;
  created_at: string;
  traveler_type: "ADT" | "CNN" | "INF";
}
