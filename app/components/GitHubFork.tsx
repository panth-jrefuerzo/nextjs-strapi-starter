import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
interface GH {
    url : string;
}

const GitHubFork = ({ url }:GH) => {
  return (
    <Link href={url} target="_blank" className='p-1 bg-indigo-800 rounded-lg text-white hover:bg-indigo-700 transition-all duration-300'>
        <AiFillGithub  size={20} className='inline'/> Fork me
    </Link>
  );
};

export default GitHubFork;
