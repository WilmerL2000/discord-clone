import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { ChannelType } from '@prisma/client';

import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';

import ChatHeader from '@/components/chat/chat-header';

type Props = {
  params: {
    serverId: string;
    channelId: string;
  };
};

export default async function ChannelIdPage({ params }: Props) {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const member = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
  });

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  if (!channel || !member) {
    redirect('/');
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        name={channel.name}
        serverId={channel.serverId}
        type="channel"
      />
    </div>
  );
}
