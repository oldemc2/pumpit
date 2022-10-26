import {FC} from "react";

import avatarUrl from './assets/profile.png';
import type {UserProfileProps} from './types';

import './styles.css';

export const UserProfile: FC<UserProfileProps> = ({profile}) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt="avatar" />
      {JSON.stringify(profile, null, 2)}
    </div>
  )
}