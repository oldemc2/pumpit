import type {Profile} from "../../api";

export type UserProfileProps = {
  profile?: Profile;
  updateProfile: (profile: Profile) => Promise<void>;
}