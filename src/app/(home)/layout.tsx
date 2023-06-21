import React from 'react';

export const metadata = {
  title: 'Home | Website Name',
  description: 'Website Name and its Description',
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default HomeLayout;
