import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';

type Props = {
  params: {
    serverId: string;
  };
};

export default async function ServerPage({}: Props) {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  return <div>ServerPage</div>;
}
