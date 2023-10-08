import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';

type Props = { children: React.ReactNode; params: { serverId: string } };

export default async function ServerIdLayout({ children, params }: Props) {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }
  return <div>ServerIdLayout</div>;
}
