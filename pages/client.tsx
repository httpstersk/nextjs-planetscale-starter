import AppLayout from '@lib/components/Layouts/AppLayout';
import { useSession } from 'next-auth/react';
import Loader from '@lib/components/Loader';

const Page = (props) => {
  const { status } = useSession({
    required: false,
  });

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <AppLayout title="Client">
      <p>This page uses the useSession() React Hook.</p>
    </AppLayout>
  );
};

export default Page;
