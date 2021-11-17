import AppLayout from '@lib/components/Layouts/AppLayout';
import { useSession } from 'next-auth/react';
import { getSession } from '@lib/auth/session';
import { InferGetServerSidePropsType } from 'next';

const Page = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { data: session } = useSession({
    required: false,
  });

  console.log({ session });

  return (
    <AppLayout title="Server">
      <p>
        This page uses the universal getSession() method in
        getServerSideProps().
      </p>
    </AppLayout>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}

export default Page;
