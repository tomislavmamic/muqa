'use client';

import { type PropsWithChildren } from 'react';
import { useAccount, useChainId, useSwitchChain } from 'wagmi';

import { Button } from '../ui/button';

export function EnsureCorrectNetwork({
  children,
  chainId,
}: PropsWithChildren<{ chainId: number }>) {
  const connectedNetwork = useChainId();
  const { isConnecting } = useAccount();
  const { switchChain } = useSwitchChain();

  if (connectedNetwork !== chainId)
    return (
      <Button isLoading={isConnecting} onClick={() => switchChain({ chainId })}>
        Change network
      </Button>
    );
  return <>{children}</>;
}
