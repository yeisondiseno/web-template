import React, { ComponentPropsWithoutRef } from 'react';

type VideoType = ComponentPropsWithoutRef<'video'>;

const Video = (props: VideoType) => <video {...props} />;

export default Video;
