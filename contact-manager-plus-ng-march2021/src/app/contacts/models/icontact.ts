// ng g i contacts/models/IContact
export interface IContact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

// to make the model with class
// export class Contact implements IContact{
//   id: number;
//   name: string;
//   phone: string;
//   email: string;
// }
