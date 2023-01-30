import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Card,
  ProfileDescription,
  ProfileName,
  Tag,
  Location,
  ProfileStats,
  ProfileList,
  Label,
  Quantity,
} from './Profile.styled';

const Profiles = ({ username, tag, location, avatar, stats }) => {
  console.log(username)
  return (
    <Card>
      <ProfileDescription>
        <Image src={avatar} alt={username} />
        <ProfileName>{username}</ProfileName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescription>

      <ProfileStats>
        <ProfileList>
          <Label>Followers</Label>
          <Quantity> {stats.followers}</Quantity>
        </ProfileList>
        <ProfileList>
          <Label>Views</Label>
          <Quantity> {stats.views}</Quantity>
        </ProfileList>
        <ProfileList>
          <Label>Likes</Label>
          <Quantity> {stats.likes}</Quantity>
        </ProfileList>
      </ProfileStats>
    </Card>
  );

};

Profiles.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profiles;
