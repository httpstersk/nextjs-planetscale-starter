import AppLayout from '@lib/components/Layouts/AppLayout';
import { useSession } from 'next-auth/react';

const Page = (props) => {
  const { data: session } = useSession();

  return (
    <AppLayout title="Server Redirect">
      <p>
        Hello, {`${session.user.name ?? session.user.email}`} This is a
        protected route. You can see it because you're logged in.
      </p>
    </AppLayout>
  );
};

Page.auth = {
  redirectTo: '/',
};

export default Page;
