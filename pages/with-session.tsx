import AppLayout from '@lib/components/Layouts/AppLayout';
import { useSession, signIn } from 'next-auth/react';
import { useQuery } from 'react-query';
import superagent from 'superagent';

const Page = (props) => {
  const { status, data: session } = useSession({
    required: false,
  });

  const withSessionQuery = useQuery(
    ['with-session-example', session],
    async () => {
      console.log({ session });
      const data = await superagent.get('/api/with-session-example');
      return data.body.content;
    },
    {
      // The query will not execute until the session exists
      enabled: !!session,
    }
  );

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  if (!session) {
    return (
      <AppLayout title="With Session">
        <p>Access Denied</p>

        <button type="button" onClick={() => signIn()}>
          <strong>Login</strong>
        </button>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="With Session">
      <p>
        Hello, {`${session.user.name ?? session.user.email}`} You can see this
        because you're logged in.
      </p>

      {withSessionQuery?.data && <p>{withSessionQuery.data}</p>}
    </AppLayout>
  );
};

export default Page;
