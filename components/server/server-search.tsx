'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

type ServerSearchProps = {
  data: {
    label: string;
    type: 'channel' | 'member';
    data:
      | {
          icon: React.ReactNode;
          name: string;
          id: string;
        }[]
      | undefined;
  }[];
};

export default function ServerSearch({ data }: ServerSearchProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();

  return <div>ServerSearch </div>;
}
