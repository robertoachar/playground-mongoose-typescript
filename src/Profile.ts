import { model, Schema } from 'mongoose';

export interface IProfile {
  name: string;
  description: string;
}

const profileSchema = new Schema<IProfile>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    toObject: { virtuals: true },
  }
);

export const Profile = model<IProfile>('Profile', profileSchema);
