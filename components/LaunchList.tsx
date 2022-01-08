import React from 'react';
import { Launch } from '../intefaces/Launch';
import LaunchItem from './LaunchItem';

const LaunchList: React.FC<{ launches: Array<Launch> | undefined }> = ({ launches }) => {
  return (
    <>
      {launches?.map((launch: Launch) => (
        <LaunchItem
          key={launch.mission_name}
          {...launch}
        />
      ))}
    </>
  );
}

export default LaunchList;
