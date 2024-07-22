import dynamic from 'next/dynamic';

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Sample = dynamic(() => import('./yearbook/pastYearbook'), {
  ssr: false,
});

export default function Page() {
  return <Sample />;
}
