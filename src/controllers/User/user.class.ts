type uuid = string;

export interface IUser {
  id?: uuid;
  phoneNo: string;
  password: string;
  create_at: Date;
  update_at: Date;
}
