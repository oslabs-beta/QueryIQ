import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from './Button';

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const profilePicStyle: React.CSSProperties = {
    borderRadius: '50%',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-2xl text-slate-100">
        {sessionData && (
          <div className="mb-12 flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="mr-1 h-14 w-14 rounded-full outline outline-1 outline-slate-200"
              src={sessionData.user?.image}
              style={profilePicStyle}
              alt="Profile Picture"
            />
            <span>{sessionData.user?.name}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          </div>
        )}
      </p>
      {/* {sessionData && (
        <div className="group relative mt-8 inline-flex items-center justify-center sm:mt-12">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
            <button className="relative inline-flex items-center justify-center rounded-full border border-transparent bg-slate-900 px-8 py-3 text-base font-normal text-slate-300">
              {sessionData ? 'Continue to app' : ''}
            </button>
          </div>
        </div>
      )} */}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-slate-200 no-underline transition hover:bg-white/20"
        onClick={
          sessionData
            ? // ? () => void signOut()
              () => window.location.replace('/homepage')
            : () =>
                void signIn(sessionData, {
                  callbackUrl: `${window.location.origin}/homepage`,
                })
        }
      >
        {sessionData ? 'Continue' : 'Sign in'}
      </button>
    </div>
  );
};

export default AuthShowcase;
