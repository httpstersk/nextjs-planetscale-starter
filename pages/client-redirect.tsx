import AppLayout from '@lib/components/Layouts/AppLayout';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Page = (props) => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/', '/', {});
    },
  });

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  return (
    <AppLayout>
      <p>
        Hello, {`${session.user.name ?? session.user.email}`} This is a
        protected route. You can see it because you're logged in.
      </p>
    </AppLayout>
  );
};

export default Page;
