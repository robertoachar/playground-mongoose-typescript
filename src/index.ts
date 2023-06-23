import { connect, disconnect } from './connection';
import { IProfile, Profile } from './Profile';
import { User } from './User';

const start = async (): Promise<void> => {
  await connect();

  await Profile.deleteMany({});
  await User.deleteMany({});

  const profile = new Profile({
    name: 'Admin',
  });
  await profile.save();

  const user = new User({
    name: 'Roberto Achar',
    profile,
  });
  await user.save();

  const firstUser = await User.findById(user.id).populate<{
    profile: IProfile;
  }>('profile');

  console.log(firstUser?.name);
  console.log(firstUser?.profile);

  await disconnect();
};

start().catch((error: Error) => {
  console.log(error.message);
});
