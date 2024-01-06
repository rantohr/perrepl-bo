export interface ISupplier {
  id: number;
  contacts: IContactSupplier[];
  images: [];
  name: string;
  location: string;
  website: string;
  billing_address: string;
  type: string;
  area_covered: string;
  remark: string;
}

export interface IContactSupplier {
  id: number;
  phone: string;
  email: string;
  role: string;
}

export type CreateSupplierDto = Omit<
  ISupplier,
  "id" | "images" | "contacts"
> & {
  contacts: Omit<IContactSupplier, "id">[];
};

// {
//     "id": 1,
//     "contacts": [
//         {
//             "id": 1,
//             "phone": "123-456-7890",
//             "email": "reservation@example.com",
//             "role": "RESERVATION"
//         },
//         {
//             "id": 2,
//             "phone": "987-654-3210",
//             "email": "manager@example.com",
//             "role": "MANAGER"
//         }
//     ],
//     "images": [],
//     "name": "Supplier 1",
//     "location": "Location 1",
//     "website": "http://example.com",
//     "billing_address": "Billing Address 1",
//     "type": "Type 1",
//     "area_covered": "Area Covered 1",
//     "remark": "Some remarks"
// }
